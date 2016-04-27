<?php
namespace Lib;

class DatabaseAPI extends Base {

	private $db;

	public function __construct() {
		$connect = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
		$this->db = $connect;
		$this->db->query("set names utf8");
	}

	public function insertCurio($result) {
		$sql = "INSERT INTO `curio_result` SET `result` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $result);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function insertUser($openid) {
		$user = $this->findUserByOpenid($openid);
		if ($user) {
			return $user;
		}
		$sql = "INSERT INTO `coach_info` SET `openid` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $openid);
		if ($res->execute()) {
			return $this->findUserByOpenid($openid);
		} else {
			return FALSE;
		}
	}

	public function regUser($openid, $nickname, $headimgurl) {
		if ($this->findUserByOauth($openid)) {
			return TRUE;
		}
		$sql = "INSERT INTO `coach_oauth` SET `openid` = ?, nickname = ?, headimgurl = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("sss", $openid, $nickname, $headimgurl);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function findUserByOauth($openid) {
		$sql = "SELECT id  FROM `coach_oauth` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid);
		if($res->fetch()) {
			return TRUE;
		}
		return FALSE;
	}

	public function getNicknameByOpenid($openid) {
		$sql = "SELECT nickname  FROM `coach_oauth` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($nickname);
		if($res->fetch()) {
			return $nickname;
		}
		return '';
	}

	public function findUserByOpenid($openid) {
		$sql = "SELECT `id`, `openid`, `nickname`, `image`, `greeting`, `background`, `ballot` FROM `coach_info` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($id, $openid, $nickname, $image, $greeting, $background, $ballot);
		if($res->fetch()) {
			$user = new \stdClass();
			$user->id = $id;
			$user->openid = $openid;
			$user->nickname = $nickname;
			$user->image = $image;
			$user->greeting = $greeting;
			$user->background = $background;
			$user->ballot = $ballot;
			$_SESSION['user'] = $user;
			return $user;
		}
		return NULL;
	}

	public function ballot($uid, $id) {
		$sql = "SELECT `id` FROM `coach_ballot` WHERE `uid` = ? and `pid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("ss", $uid, $id);
		$res->execute();
		$res->bind_result($id);
		if($res->fetch()) {
			return 0;
		}
		$sql = "INSERT INTO `coach_ballot` SET `uid` = ?, `pid` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("ss", $uid, $id);
		if ($res->execute()) {
			$sql = "update `coach_info` SET `ballot` = ballot + 1 where id = ?";
			$res = $this->db->prepare($sql); 
			$res->bind_param("s", $id);
			if ($res->execute()) {
				return 1;
			}
			return 0;
		} else {
			return 0;
		}
	}

	public function setGreeting($uid, $nickname, $image, $greeting, $background) {
		$sql = "update `coach_info` SET `nickname` = ?, `image` = ?, `greeting` = ?, `background` = ? where id = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("sssss", $nickname, $image, $greeting, $background, $uid);
		if ($res->execute()) {
			return 1;
		}
		return 0;
	}

	public function getTotal() {
		$sql = "SELECT count(id) from coach_info where status = 1";
		$res = $this->db->prepare($sql); 
		$res->execute();
		$res->bind_result($num);
		if ($res->fetch()) {
			return $num;
		}
		return 0;
	}

	public function getGreeting($page, $row = 8) {
		
		$total = $this->getTotal();
		$totalpage = ceil( $total / $row );
		$start = ( $page - 1 ) * $row;
		$sql="SELECT * FROM  `coach_info`  where status=1 limit $start, $row";
		$res = $this->db->query($sql);
		$data = array();
		while($rows = $res->fetch_array(MYSQLI_ASSOC))
		{
			$data[] = $rows;
		}		
		return array('nowpage' => $page, 'rowcount' => $row, 'totalpage' => $totalpage, 'list' => $data);
	}


	public function getGreetingById($id) {
		$sql = "SELECT `id`, `nickname`, `image`, `greeting`, `background`, `ballot` from coach_info where id = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $id);
		$res->execute();
		$res->bind_result($id, $nickname, $image, $greeting, $background, $ballot);
		if ($res->fetch()) {
			$return = array();
			$return['id'] = $id;
			$return['nickname'] = $nickname;
			$return['image'] = $image;
			$return['greeting'] = $greeting;
			$return['background'] = $background;
			$return['ballot'] = $ballot;
			return $return;
		}
		return NULL;
	}

	public function saveAcxiomLog($type, $data, $responseCode, $responseDesc, $result) {
		$sql = "INSERT INTO `acxiom_result` SET `type` = ?, `data` = ?, responseCode = ?, responseDesc = ?, result = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("sssss", $type, $data, $responseCode, $responseDesc, $result);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function saveScan($data, $type) {
		$sql = "INSERT INTO `coach_scan` SET `result` = ?, `type` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("ss", $data, $type);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}
}
