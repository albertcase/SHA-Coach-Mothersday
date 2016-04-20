<?php
namespace CoachBundle;

use Core\Controller;


class SiteController extends Controller {

	public function indexAction() {	
		// if (!isset($_SESSION['user_id'])) {
		// 	$parameterAry = $_GET;
		// 	if(count($parameterAry)>0)
		// 		$url = "/?".http_build_query($parameterAry);
		// 	else
		// 		$url = "/";
		// 	$_SESSION['redirect_url'] = $url;
		// 	$WechatAPI = new \Lib\WechatAPI();
		// 	$WechatAPI->wechatAuthorize();
		// }	
		$this->render('test');
		exit;
	}

}
