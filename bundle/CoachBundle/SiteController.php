<?php
namespace CoachBundle;

use Core\Controller;


class SiteController extends Controller {

	public function indexAction() {	
		if(date("Ymd")>=20160511) {
			$this->render('index');
			exit
		}
		$this->render('old');
		exit;
	}

	public function testAction() {		
		$this->render('index');
		exit;
	}

	public function homeAction() {	
		$user_agent = $_SERVER['HTTP_USER_AGENT'];
		if (strpos($user_agent, 'MicroMessenger') === false) {
		    // 非微信浏览器禁止浏览
		    echo "HTTP/1.1 401 Unauthorized";
		    exit;
		}
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			$parameterAry = $_GET;
			if(count($parameterAry)>0)
				$url = "/home?".http_build_query($parameterAry);
			else
				$url = "/home";
			$_SESSION['redirect_url'] = $url;
			$WechatAPI = new \Lib\WechatAPI();
			$WechatAPI->wechatAuthorize();
		}
		if ($user->greeting) {
			return $this->redirect('/photo?id='.$user->id);
		}
		$wechatapi = new \Lib\WechatAPI();
		$rs = $wechatapi->isSubscribed($user->openid); 
		if ($rs) {
			$display = 'hide';
		} else {
			$display = '';
		}
		$this->render('home', array('display' => $display));
		exit;
	}

	public function photoAction() {	
		$user_agent = $_SERVER['HTTP_USER_AGENT'];
		if (strpos($user_agent, 'MicroMessenger') === false) {
		    // 非微信浏览器禁止浏览
		    echo "HTTP/1.1 401 Unauthorized";
		    exit;
		}
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			$parameterAry = $_GET;
			if(count($parameterAry)>0)
				$url = "/photo?".http_build_query($parameterAry);
			else
				$url = "/photo";
			$_SESSION['redirect_url'] = $url;
			$WechatAPI = new \Lib\WechatAPI();
			$WechatAPI->wechatAuthorize();
		}
		$this->render('photo');
		exit;
	}

	public function galleryAction() {	
		$user_agent = $_SERVER['HTTP_USER_AGENT'];
		if (strpos($user_agent, 'MicroMessenger') === false) {
		    // 非微信浏览器禁止浏览
		    echo "HTTP/1.1 401 Unauthorized";
		    exit;
		}
		// $UserAPI = new \Lib\UserAPI();
		// $user = $UserAPI->userLoad(true);
		// if (!$user) {
		// 	$parameterAry = $_GET;
		// 	if(count($parameterAry)>0)
		// 		$url = "/gallery?".http_build_query($parameterAry);
		// 	else
		// 		$url = "/gallery";
		// 	$_SESSION['redirect_url'] = $url;
		// 	$WechatAPI = new \Lib\WechatAPI();
		// 	$WechatAPI->wechatAuthorize();
		// }
		$this->render('gallery');
		exit;
	}

}
