<?php
namespace Lib;

class AcxiomAPI extends Base {

	public $apiUrl = 'https://uat10.acxiom.com.cn';

    public function sendverifycode($mobile){
        $start = $this->getMillisecond();
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/sendverifycode";
        $data = array('mobile' => $mobile);
        $result = $this->postData($ws, json_encode($data)); 
        $end = $this->getMillisecond();
        $usetime = $end - $start;
        $rs = json_decode($result, true);
        $RedisAPI = new \Lib\RedisAPI();
        $RedisAPI->saveAcxiomLog('sendverifycode', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result, $start, $end, $usetime);
        if ( $rs['responseCode'] == "200" ) {
        	return array('code' => '1' , 'msg' => $rs['data']['status'], 'verifycode' => $rs['data']['verifycode']);
        }
        return array('code' => '2' , 'msg' => $rs['responseDesc']);
    }
   
    public function customerbind($mobile, $openid, $verifycode){
        $start = $this->getMillisecond();
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/customerbind";
        $data = array('mobile' => $mobile, 'openid' => $openid, 'verifycode' => $verifycode);
        $result = $this->postData($ws, json_encode($data)); 
        $end = $this->getMillisecond();
        $usetime = $end - $start;
        $rs = json_decode($result, true);
        $RedisAPI = new \Lib\RedisAPI();
        $RedisAPI->saveAcxiomLog('customerbind', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result, $start, $end, $usetime);
        if ( $rs['responseCode'] == "200" ) {
        	return array('code' => '1' , 'msg' => '绑定成功');
        }
        return array('code' => '2' , 'msg' => $rs['responseDesc']);
    }

    public function customerregister($firstname, $lastname, $mobile, $email, $gender, $openid){
        $start = $this->getMillisecond();
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/customerregister";
        $data = array('firstname' => $firstname, 'lastname' => $lastname, 'mobile' => $mobile, 'email' => $email, 'gender' => $gender, 'openid' => $openid);
        $result = $this->postData($ws, json_encode($data)); 
        $end = $this->getMillisecond();
        $usetime = $end - $start;
        $rs = json_decode($result, true);
        $RedisAPI = new \Lib\RedisAPI();
        $RedisAPI->saveAcxiomLog('customerregister', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result, $start, $end, $usetime);
        if ( $rs['responseCode'] == "200" ) {
        	return array('code' => '1' , 'msg' => '提交成功');
        }
        return array('code' => '2' , 'msg' => $rs['responseDesc']);
    }

    public function openidverify($openid) {
        $start = $this->getMillisecond();
        $ws = $this->apiUrl . "/coachwechatws/ws/customer/openidverify";
        $data = array('openid' => $openid);
        $result = $this->postData($ws, json_encode($data)); 
        $end = $this->getMillisecond();
        $usetime = $end - $start;
        $rs = json_decode($result, true);
        $RedisAPI = new \Lib\RedisAPI();
        $RedisAPI->saveAcxiomLog('openidverify', json_encode($data), $rs['responseCode'], $rs['responseDesc'], $result, $start, $end, $usetime);
        if ( $rs['responseCode'] == "200" ) {
            if ( $rs['status'] == "已绑定" ) {
                return array('code' => '1' , 'msg' => '已绑定');
            } else {
                return array('code' => '2' , 'msg' => '未绑定');
            }
        }
        return array('code' => '2' , 'msg' => $rs['responseDesc']);
    }

    public function getMillisecond() {
        list($t1, $t2) = explode(' ', microtime());
        return (float)sprintf('%.0f',(floatval($t1)+floatval($t2))*1000);
    }
}
