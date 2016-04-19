<?php
namespace Lib;

class AcxiomAPI extends Base {

	public $apiUrl = 'https://uat10.acxiom.com.cn';

    public function sendverifycode($mobile){
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/sendverifycode";
        $data = array('Mobile' => $mobile);
        $result = $this->postData($ws, json_encode($data)); 
        $rs = json_decode($result, true);
        $databaseAPI = new \Lib\DatabaseAPI();
        $databaseAPI->saveAcxiomLog('sendverifycode', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result);
        if( $rs['responseCode'] == 200 ) {
        	return $rs['responseDesc'];
        }
        return $rs['responseDesc'];
    }
   
    public function customerbind($mobile, $openid, $verifycode){
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/customerbind";
        $data = array('Mobile' => $mobile, 'Openid' => $openid, 'verifycode' => $verifycode);
        $result = $this->postData($ws, json_encode($data)); 
        $rs = json_decode($result, true);
        $databaseAPI = new \Lib\DatabaseAPI();
        $databaseAPI->saveAcxiomLog('customerbind', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result);
        if( $rs['responseCode'] == 200 ) {
        	return $rs['responseDesc'];
        }
        return $rs['responseDesc'];
    }

    public function customerregister($firstname, $lastname, $mobile, $email, $gender, $openid){
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/customerregister";
        $data = array('firstname' => $firstname, 'lastname' => $lastname, 'Mobile' => $mobile, 'Email' => $email, 'gender' => $gender, 'openid' => $openid);
        $result = $this->postData($ws, json_encode($data)); 
        $rs = json_decode($result, true);
        $databaseAPI = new \Lib\DatabaseAPI();
        $databaseAPI->saveAcxiomLog('customerregister', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result);
        if( $rs['responseCode'] == 200 ) {
        	return $rs['responseDesc'];
        }
        return $rs['responseDesc'];
    }
}
