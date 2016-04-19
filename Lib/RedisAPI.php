<?php
namespace Lib;

class RedisAPI {

	private $_redis;

	public function __construct() {
		$redis = new \Redis();
   		$redis->connect(REDIS_HOST, REDIS_PORT);
   		$this->_redis = $redis;
	}

	public function islock($openid){
		if($this->_redis->get("Coach:" . $openid)){
			return true;
		}
		return false;	
	}

	public function lock($openid){
		$this->_redis->set("Coach:" . $openid, 1);
		
	}

	public function unlock($openid){
		$this->_redis->del("Coach:" . $openid);
	}

	public function setGreeting($uid, $greeting, $type) {
		$this->_redis->lPush("Coach:Greeting", $uid . '|' . $greeting . '|' . $type);
	}

	public function getGreeting($page, $row = 8) {
		
		$total = $this->_redis->lSize("Coach:Greeting");
		$totalpage = ceil( $total / $row );
		$start = ( $page - 1 ) * $row;
		$end = $start + $row;
		$arList = $this->_redis->lrange("Coach:Greeting", $start, $end);
		$returnList = array();
		for ( $i = 0; $i < count($arList); $i++ ) {
			$value = explode('|', $arList[$i]);
			$returnList[$i]['uid'] = $arList[$i][0];
			$returnList[$i]['greeting'] = $arList[$i][1];
			$returnList[$i]['type'] = $arList[$i][2];
		}		
		return array('nowpage' => $page, 'rowcount' => $row, 'totalpage' => $totalpage, 'list' => $returnList);
	}
}