<?php
namespace CoachBundle;

use Core\Controller;


class SiteController extends Controller {

	public function indexAction() {	
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			$parameterAry = $_GET;
			if(count($parameterAry)>0)
				$url = "/?".http_build_query($parameterAry);
			else
				$url = "/";
			$_SESSION['redirect_url'] = $url;
			$WechatAPI = new \Lib\WechatAPI();
			$WechatAPI->wechatAuthorize();
		}	
		$this->render('index');
		exit;
	}

	public function homeAction() {	
		$this->render('home');
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
		$this->render('gallery');
		exit;
	}

}
