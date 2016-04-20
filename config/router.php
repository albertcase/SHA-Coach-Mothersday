<?php

$routers = array();
$routers['/'] = array('CoachBundle\Site', 'index');
$routers['/getdata'] = array('CoachBundle\Api', 'getdata');
$routers['/callback'] = array('CoachBundle\Api', 'callback');
$routers['/api/test'] = array('CoachBundle\Api', 'test');
$routers['/api/flush'] = array('CoachBundle\Api', 'flush');
$routers['/api/status'] = array('CoachBundle\Api', 'status');
$routers['/api/islogin'] = array('CoachBundle\Api', 'islogin');
$routers['/api/greeting'] = array('CoachBundle\Api', 'greeting');
$routers['/api/ballot'] = array('CoachBundle\Api', 'ballot');
$routers['/api/sendverifycode'] = array('CoachBundle\Api', 'sendverifycode');
$routers['/api/customerbind'] = array('CoachBundle\Api', 'customerbind');
$routers['/api/customerregister'] = array('CoachBundle\Api', 'customerregister');