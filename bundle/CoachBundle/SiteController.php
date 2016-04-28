<?php
namespace CoachBundle;

use Core\Controller;


class SiteController extends Controller {

	public function indexAction() {	
			
		$this->render('index');
		exit;
	}

	public function homeAction() {	
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
		$rs = $wechatapi->isSubscribed($user->openid); 
		if ($rs) {
			$display = '';
		} else {
			$display = 'hide';
		}
		$this->render('home', array('display' => $display));
		exit;
	}

	public function photoAction() {	
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
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			$parameterAry = $_GET;
			if(count($parameterAry)>0)
				$url = "/gallery?".http_build_query($parameterAry);
			else
				$url = "/gallery";
			$_SESSION['redirect_url'] = $url;
			$WechatAPI = new \Lib\WechatAPI();
			$WechatAPI->wechatAuthorize();
		}
		$this->render('gallery');
		exit;
	}

}
