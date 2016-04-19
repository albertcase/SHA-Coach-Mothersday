<?php
namespace CoachBundle;

use Core\Controller;


class ApiController extends Controller {

	public function testAction() {
		// $mobile = '15121038676';
		// $AcxiomAPI = new \Lib\AcxiomAPI();
	 //    echo $AcxiomAPI->sendverifycode($mobile);exit;
		$redis = new \Lib\RedisAPI();
		echo $redis->getkey('test');exit;
		$redis->incrkey('test');
	}

	public function callbackAction() {
		echo $this->Request()->request->get('openid');
		exit;
	}

	public function getdataAction() {
		$data = $GLOBALS['HTTP_RAW_POST_DATA'];	
		$data = json_decode($data, true);
		$DatabaseAPI = new \Lib\DatabaseAPI();
		$DatabaseAPI->regUser($data['data']['openid'], $data['data']['nickname'], $data['data']['headimgurl']);
	}


	public function scanAction() {
		
	}

	public function statusAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		if ( $user->greeting == '' ) {
			return $this->statusPrint(1, '0');
		}
		return $this->statusPrint(1, '1');
	}

	public function submitAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}

		if ( $user->greeting != '' ) {
			return $this->statusPrint(2, '已经参与过');
		}

		$request = $this->Request();
		$fields = array(
			'greeting' => array('notnull', '3'),
			'type' => array('notnull', '3'),
		);
		$request->validation($fields);
		$greeting = $request->request->get('greeting');
		$type = $request->request->get('type');

		$DatabaseAPI = new \Lib\DatabaseAPI();

		$rs = $DatabaseAPI->setGreeting($user->uid, $greeting, $type); 	
		if ($rs) {
			return $this->statusPrint(1, '提交成功');
		}
		return $this->statusPrint(999, '服务器繁忙，请稍候再试');
		
	}

}
