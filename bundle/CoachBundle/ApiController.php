<?php
namespace CoachBundle;

use Core\Controller;


class ApiController extends Controller {

	public function testAction() {
		// $mobile = '15121038676';
		// $AcxiomAPI = new \Lib\AcxiomAPI();
	 //    echo $AcxiomAPI->sendverifycode($mobile);exit;
	    //echo $AcxiomAPI->customerbind($mobile, 'oKCDxjivJ92ky4dxLT8dt1jcXtn4', '26r5');exit;
	    //echo $AcxiomAPI->customerregister('张', '伟', $mobile, 'ikwer@163.com', 'M', 'oKCDxjivJ92ky4dxLT8dt1jcXtn4');exit;
		$redis = new \Lib\RedisAPI();
		$rs = $redis->setGreeting('123123', '5'); 
		var_dump($rs);exit;
		// var_dump($redis->loadUser($_SESSION['user_id']));exit;
		//$redis->ballot(2,1);
		//var_dump($redis->regUser('oKCDxjivJ92ky4dxLT8dt1jcXtn4', 'nickname', 'headimgurl'));
		exit;
	}

	public function sendverifycodeAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
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
	    if ($rs == 1) {
	    	return $this->statusPrint(1, '提交成功');
	    }
	    if ($rs == 2) {
	    	return $this->statusPrint(3, '已经绑定过');
	    }
	    return $this->statusPrint(2, '提交失败');
	}

	public function customerbindAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
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
	    if ($rs == 1) {
	    	return $this->statusPrint(1, '提交成功');
	    }
	    if ($rs == 2) {
	    	return $this->statusPrint(3, '已经绑定过');
	    }
	    return $this->statusPrint(2, '提交失败');
	}

	public function customerregisterAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$request = $this->Request();
		$fields = array(
			'firstname' => array('notnull', '3'),
			'lastname' => array('notnull', '3'),
			'mobile' =>  array('mobile', '3'),
			'email' => array('notnull', '3'),
			'gender' =>  array('notnull', '3'),
			'openid' => array('notnull', '3')
		);
		$request->validation($fields);
		$firstname = $request->request->get('firstname');
		$lastname = $request->request->get('lastname');
		$mobile = $request->request->get('mobile');
		$email = $request->request->get('email');
		$gender = $request->request->get('gender');
		$openid = $request->request->get('openid');
		$AcxiomAPI = new \Lib\AcxiomAPI();
	    $rs = $AcxiomAPI->customerregister($firstname, $lastname, $mobile, $email, $gender, $openid);
	    if ($rs == 1) {
	    	return $this->statusPrint(1, '提交成功');
	    }
	    if ($rs == 2) {
	    	return $this->statusPrint(3, '已经绑定过');
	    }
	    return $this->statusPrint(2, '提交失败');
	}

	public function isloginAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		return $this->statusPrint(1, $user);
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
		$userapi = new \Lib\UserAPI();
		$userapi->userLogin($openid);
		
		exit;
	}

	public function getdataAction() {
		$data = $GLOBALS['HTTP_RAW_POST_DATA'];	
		$data = json_decode($data, true);
		$databaseapi = new \Lib\DatabaseAPI();
		$databaseapi->regUser($data['data']['openid'], $data['data']['nickname'], $data['data']['headimgurl']);
	}


	public function listAction() {
		$request = $this->Request();
		$page = $request->query->get('page') ? $request->query->get('page') : 1;
		$row = $request->query->get('row') ? $request->query->get('row') : 4;
		$redis = new \Lib\UserAPI();
		$rs = $redis->getGreeting($page, $row);
		return $this->statusPrint(1, $rs);
		
	}

	public function statusAction() {
		// if (!isset($_SESSION['user'])) {
		// 	return $this->statusPrint(0, '未登录');
		// }
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		$wechatapi = new \Lib\WechatAPI();
		//Eric 获取用户资料（关注） 微信js 
		$rs = $wechatapi->isSubscribed($user->openid); 
		$rs = 1;
		if ($rs) {
			return $this->statusPrint(1, '已关注');
		}
		return $this->statusPrint(2, '未关注');
	}

	public function greetingAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		if ($user->greeting) {
			return $this->statusPrint(2, '已经提交过了');
		}
		$request = $this->Request();
		$fields = array(
			'greeting' => array('notnull', '3'),
			'background' => array('notnull', '3'),
			//'image' => array('notnull', '3'),
		);
		$request->validation($fields);
		$greeting = $request->request->get('greeting');
		$background = $request->request->get('background');
		$image = $request->request->get('image');
		$uploadapi = new \Lib\UploadAPI();
		$url = $uploadapi->saveImage($image);

		$databaseapi = new \Lib\DatabaseAPI();
		$rs = $databaseapi->setGreeting($user->uid, $url, $greeting, $background); 
		if ($rs) {
			return $this->statusPrint(1, '提交成功');
		}
		return $this->statusPrint(999, '服务器繁忙，请稍候再试');
		
	}

	public function ballotAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}
		
		$request = $this->Request();
		$fields = array(
			'id' => array('notnull', '3')
		);
		$request->validation($fields);
		$id = $request->request->get('id');
		$redis = new \Lib\RedisAPI();
		$rs = $redis->ballot($user->uid, $id); 
		if ($rs) {
			$databaseapi = new \Lib\DatabaseAPI();
			$databaseapi->ballot($user->uid, $id); 
			return $this->statusPrint(1, '提交成功');
		}
		return $this->statusPrint(2, '已经提交过');
		
	}


}
