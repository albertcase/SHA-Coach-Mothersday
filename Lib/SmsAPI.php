<?php
namespace Lib;

class SmsAPI extends Base {

    public function sendMessage($userid, $mobile){
        $ws = "https://[IP]/coachwechatws/ws/customer/sendverifycode";
        $data = array('Mobile' => $mobile);
        $this->postData($ws, $mobile);

        $databaseAPI = new \Lib\DatabaseAPI();
        $databaseAPI->saveSmsLog($userid, $mobile, $code, $lindid, $msg, $send_rs);
        return $code;
    }

}
