<?php
namespace Lib;

class AcxiomAPI extends Base {

	public $apiUrl = 'https://uat10.acxiom.com.cn';

    public function sendverifycode($mobile){
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/sendverifycode";
        $data = array('mobile' => $mobile);
        $result = $this->postData($ws, json_encode($data)); 
        $rs = json_decode($result, true);
        $databaseAPI = new \Lib\DatabaseAPI();
        $databaseAPI->saveAcxiomLog('sendverifycode', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result);
        if ( $rs['responseCode'] == "200" ) {
        	return 1;
        }
        if ( $rs['responseCode'] == "001" || $rs['responseCode'] == "002") {
            return 2;
        }
        return 0;
    }
   
    public function customerbind($mobile, $openid, $verifycode){
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/customerbind";
        $data = array('mobile' => $mobile, 'openid' => $openid, 'verifycode' => $verifycode);
        $result = $this->postData($ws, json_encode($data)); 
        $rs = json_decode($result, true);
        $databaseAPI = new \Lib\DatabaseAPI();
        $databaseAPI->saveAcxiomLog('customerbind', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result);
        if ( $rs['responseCode'] == "003" ) {
        	return 1;
        }
        if ( $rs['responseCode'] == "004" ) {
            return 2;
        }
        return 0;
    }

    public function customerregister($firstname, $lastname, $mobile, $email, $gender, $openid){
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/customerregister";
        $data = array('firstname' => $firstname, 'lastname' => $lastname, 'mobile' => $mobile, 'email' => $email, 'gender' => $gender, 'openid' => $openid);
        $result = $this->postData($ws, json_encode($data)); 
        $rs = json_decode($result, true);
        $databaseAPI = new \Lib\DatabaseAPI();
        $databaseAPI->saveAcxiomLog('customerregister', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result);
        if ( $rs['responseCode'] == "200" ) {
        	return 1;
        }
        return 0;
    }

    public function openidverify($openid) {
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/openidverify";
        $data = array('openid' => $openid);
        $result = $this->postData($ws, json_encode($data)); 
        $rs = json_decode($result, true);
        $databaseAPI = new \Lib\DatabaseAPI();
        $databaseAPI->saveAcxiomLog('openidverify', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result);
        if ( $rs['responseCode'] == "200" ) {
            if ( $rs['satus'] == "未绑定" ) {
                return 0;
            } else {
                return 1;
            }
        }
        return 0;
    }
}
