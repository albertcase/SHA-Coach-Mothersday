<?php
namespace Lib;

class AcxiomAPI extends Base {

	public $apiUrl = 'https://uat10.acxiom.com.cn';

    public function sendverifycode($mobile){
        $start = getMillisecond();
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/sendverifycode";
        $data = array('mobile' => $mobile);
        $result = $this->postData($ws, json_encode($data)); 
        $end = getMillisecond();
        $usetime = $end - $start;
        $rs = json_decode($result, true);
        $RedisAPI = new \Lib\RedisAPI();
        $RedisAPI->saveAcxiomLog('sendverifycode', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result, $start, $end, $usetime);
        if ( $rs['responseCode'] == "200" ) {
        	return 1;
        }
        if ( $rs['responseCode'] == "001" || $rs['responseCode'] == "002") {
            return 2;
        }
        return 0;
    }
   
    public function customerbind($mobile, $openid, $verifycode){
        $start = getMillisecond();
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/customerbind";
        $data = array('mobile' => $mobile, 'openid' => $openid, 'verifycode' => $verifycode);
        $result = $this->postData($ws, json_encode($data)); 
        $end = getMillisecond();
        $usetime = $end - $start;
        $rs = json_decode($result, true);
        $RedisAPI = new \Lib\RedisAPI();
        $RedisAPI->saveAcxiomLog('customerbind', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result, $start, $end, $usetime);
        if ( $rs['responseCode'] == "003" ) {
        	return 1;
        }
        if ( $rs['responseCode'] == "004" ) {
            return 2;
        }
        return 0;
    }

    public function customerregister($firstname, $lastname, $mobile, $email, $gender, $openid){
        $start = getMillisecond();
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/customerregister";
        $data = array('firstname' => $firstname, 'lastname' => $lastname, 'mobile' => $mobile, 'email' => $email, 'gender' => $gender, 'openid' => $openid);
        $result = $this->postData($ws, json_encode($data)); 
        $end = getMillisecond();
        $usetime = $end - $start;
        $rs = json_decode($result, true);
        $RedisAPI = new \Lib\RedisAPI();
        $RedisAPI->saveAcxiomLog('customerregister', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result, $start, $end, $usetime);
        if ( $rs['responseCode'] == "200" ) {
        	return 1;
        }
        return 0;
    }

    public function openidverify($openid) {
        $start = getMillisecond();
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/openidverify";
        $data = array('openid' => $openid);
        $result = $this->postData($ws, json_encode($data)); 
        $end = getMillisecond();
        $usetime = $end - $start;
        $rs = json_decode($result, true);
        $RedisAPI = new \Lib\RedisAPI();
        $RedisAPI->saveAcxiomLog('openidverify', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result, $start, $end, $usetime);
        if ( $rs['responseCode'] == "200" ) {
            if ( $rs['status'] == "已绑定" ) {
                return 1;
            } else {
                return 0;
            }
        }
        return 0;
    }

    public function getMillisecond() {
        list($t1, $t2) = explode(' ', microtime());
        return (float)sprintf('%.0f',(floatval($t1)+floatval($t2))*1000);
    }
}
