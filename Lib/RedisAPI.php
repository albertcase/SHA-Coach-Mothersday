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

	public function incrkey($table) {
		return $this->_redis->Incr($table, 1);
	}

	public function getkey($table) {
		return $this->_redis->hGet($table);
	}

	public function regUser($openid, $nickname, $headimgurl) {
		// if ($this->_redis->hGet("userid", $openid)) {
		// 	$id = $this->_redis->hGet("userid", $openid);
		// 	$userTableKey = "user:" . $id;
		// 	return $this->_redis->hmGet($userTableKey, array('id', 'openid', 'nickname', 'headimgurl', 'greeting', 'background', 'ballot'));
		// }
		$id = $this->_redis->hGet("userid", $openid);
		if (!$id) {
			$id = $this->incrkey('user');
			$this->_redis->hSet("userid", $openid, $id);
		}
		$userTableKey = "user:" . $id;
		$user = array('id' => $id, 'openid' => $openid, 'nickname' => $nickname, 'headimgurl' => $headimgurl);
		$this->_redis->hMset($userTableKey, $user);
		return $user;
	}

	public function loginUser($openid) {
		if ($this->_redis->hGet("userid", $openid)) {
			$id = $this->_redis->hGet("userid", $openid);
			return $id;
		}
		$id = $this->incrkey('user');
		$this->_redis->hSet("userid", $openid, $id);
		return $id;
	}

	public function loadUser($id) {
		$userTableKey = "user:" . $id;
		return $this->_redis->hmGet($userTableKey, array('id', 'openid', 'nickname', 'headimgurl', 'greeting', 'background', 'ballot'));
	}

	public function ballot($uid, $gid) {
		$ballotTableKey = "ballot:" . $gid;
		if ($this->_redis->hGet($ballotTableKey, $uid)) {
			return 0;
		}
		$this->_redis->hSet($ballotTableKey, $uid, '1');
		$userTableKey = "user:" . $gid;
		$this->_redis->hIncrBy($userTableKey, 'ballot', 1);
		return 1;
	}

	public function flushAll() {
		return $this->_redis->flushAll();
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