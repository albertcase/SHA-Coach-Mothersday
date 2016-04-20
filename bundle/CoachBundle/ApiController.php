<?php
namespace CoachBundle;

use Core\Controller;


class ApiController extends Controller {

	public function testAction() {
		$mobile = '15121038676';
		$AcxiomAPI = new \Lib\AcxiomAPI();
	    echo $AcxiomAPI->sendverifycode($mobile);exit;
	    //echo $AcxiomAPI->customerbind($mobile, 'oKCDxjivJ92ky4dxLT8dt1jcXtn4', '26r5');exit;
	    //echo $AcxiomAPI->customerregister('张', '伟', $mobile, 'ikwer@163.com', 'M', 'oKCDxjivJ92ky4dxLT8dt1jcXtn4');exit;
		$redis = new \Lib\RedisAPI();
		$redis->ballot(2,1);
		var_dump($redis->regUser('oKCDxjivJ92ky4dxLT8dt1jcXtn4', 'nickname', 'headimgurl'));
		exit;
	}

	public function sendverifycodeAction() {
		if (!isset($_SESSION['user_id'])) {
			return $this->statusPrint(0, '未登录');
		}
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '3')
		);
		$request->validation($fields);
		$mobile = $request->request->get('mobile');
		$AcxiomAPI = new \Lib\AcxiomAPI();
	    $rs = $AcxiomAPI->sendverifycode($mobile);
	    if ($rs == 200) {
	    	return $this->statusPrint(1, '提交成功');
	    }
	    return $this->statusPrint(2, '提交失败');
	}

	public function customerbindAction() {
		if (!isset($_SESSION['user_id'])) {
			return $this->statusPrint(0, '未登录');
		}
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '3'),
			'verifycode' =>  array('notnull', '3')
		);
		$request->validation($fields);
		$mobile = $request->request->get('mobile');
		$verifycode = $request->request->get('verifycode');
		$AcxiomAPI = new \Lib\AcxiomAPI();
	    $rs = $AcxiomAPI->sendverifycode($mobile, $_SESSION['openid'], $verifycode);
	    if ($rs == 200) {
	    	return $this->statusPrint(1, '提交成功');
	    }
	    return $this->statusPrint(2, '提交失败');
	}

	public function customerregisterAction() {
		if (!isset($_SESSION['user_id'])) {
			return $this->statusPrint(0, '未登录');
		}
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '3')
		);
		$request->validation($fields);
		$openid = $request->request->get('openid');
		$AcxiomAPI = new \Lib\AcxiomAPI();
	    $rs = $AcxiomAPI->customerregister($mobile);
	    if ($rs == 200) {
	    	return $this->statusPrint(1, '提交成功');
	    }
	    return $this->statusPrint(2, '提交失败');
	}

	public function isloginAction() {
		if (!isset($_SESSION['user_id'])) {
			return $this->statusPrint(0, '未登录');
		}
		$id = $_SESSION['user_id'];
		$redis = new \Lib\RedisAPI();
		$info = $redis->loadUser($id);
		return $this->statusPrint(1, $info);
	}

	public function flushAction() {
		$redis = new \Lib\RedisAPI();
		var_dump($redis->flushAll());exit;
	}

	public function callbackAction() {
		$request = $this->Request();
		$fields = array(
			'openid' => array('notnull', '3')
		);
		$request->validation($fields);
		$openid = $request->query->get('openid');
		$redis = new \Lib\RedisAPI();
		$_SESSION['user_id'] = $redis->loginUser($openid);
		$_SESSION['openid'] = $openid;

		exit;
	}

	public function getdataAction() {
		$data = $GLOBALS['HTTP_RAW_POST_DATA'];	
		$data = json_decode($data, true);
		$redis = new \Lib\RedisAPI();
		$redis->regUser($data['data']['openid'], $data['data']['nickname'], $data['data']['headimgurl']);
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

	public function greetingAction() {
		if (!isset($_SESSION['user_id'])) {
			return $this->statusPrint(0, '未登录');
		}
		
		$request = $this->Request();
		$fields = array(
			'greeting' => array('notnull', '3'),
			'type' => array('notnull', '3'),
		);
		$request->validation($fields);
		$greeting = $request->request->get('greeting');
		$type = $request->request->get('type');
		$redis = new \Lib\RedisAPI();
		$rs = $redis->setGreeting($greeting, $type); 	
		if ($rs) {
			return $this->statusPrint(1, '提交成功');
		}
		return $this->statusPrint(999, '服务器繁忙，请稍候再试');
		
	}

}
