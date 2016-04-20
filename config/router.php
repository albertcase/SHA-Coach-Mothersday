<?php

$routers = array();
$routers['/'] = array('CoachBundle\Site', 'index');
$routers['/getdata'] = array('CoachBundle\Api', 'getdata');
$routers['/callback'] = array('CoachBundle\Api', 'callback');
$routers['/api/test'] = array('CoachBundle\Api', 'test');
$routers['/api/flush'] = array('CoachBundle\Api', 'flush');
$routers['/api/islogin'] = array('CoachBundle\Api', 'islogin');