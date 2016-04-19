<?php

$routers = array();
$routers['/'] = array('CoachBundle\Site', 'index');
$routers['/getdata'] = array('CoachBundle\Api', 'getdata');
$routers['/callback'] = array('CoachBundle\Api', 'callback');
$routers['/api/test'] = array('CoachBundle\Api', 'test');