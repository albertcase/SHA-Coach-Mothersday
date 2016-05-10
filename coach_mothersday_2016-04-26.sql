# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 10.10.59.131 (MySQL 5.6.20-ucloudrel1-log)
# Database: coach_mothersday
# Generation Time: 2016-04-26 09:04:58 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table acxiom_result
# ------------------------------------------------------------

DROP TABLE IF EXISTS `acxiom_result`;

CREATE TABLE `acxiom_result` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL DEFAULT '',
  `data` text NOT NULL,
  `responseCode` varchar(255) NOT NULL DEFAULT '',
  `responseDesc` varchar(255) NOT NULL DEFAULT '',
  `result` text NOT NULL,
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table coach_ballot
# ------------------------------------------------------------

DROP TABLE IF EXISTS `coach_ballot`;

CREATE TABLE `coach_ballot` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `coach_ballot` WRITE;
/*!40000 ALTER TABLE `coach_ballot` DISABLE KEYS */;

INSERT INTO `coach_ballot` (`id`, `uid`, `pid`, `createtime`)
VALUES
	(1,2,0,'2016-04-26 10:55:16'),
	(2,2,2,'2016-04-26 11:10:28');

/*!40000 ALTER TABLE `coach_ballot` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table coach_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `coach_info`;

CREATE TABLE `coach_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) NOT NULL DEFAULT '',
  `nickname` blob NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '',
  `greeting` varchar(255) NOT NULL DEFAULT '',
  `background` int(11) NOT NULL,
  `ballot` int(11) NOT NULL DEFAULT '0',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `openid` (`openid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `coach_info` WRITE;
/*!40000 ALTER TABLE `coach_info` DISABLE KEYS */;

INSERT INTO `coach_info` (`id`, `openid`, `nickname`, `image`, `greeting`, `background`, `ballot`, `createtime`)
VALUES
	(1,'oKCDxjivJ92ky4dxLT8dt1jcXtn4',X'44656D6F6EF09F9884','upload/img/20160425/174311298.png','世界上最好的妈妈\n值得世界上最好的礼物\n妈妈，祝你母亲节快乐\n我爱你\n                ',3,0,'2016-04-25 17:43:11'),
	(2,'oKCDxjoqrkXCJ-AyxIGaEP93LRU4',X'4576656C796E','upload/img/20160425/182301241.png','世界上最好的妈妈\n值得世界上最好的礼物\n妈妈，祝你母亲节快乐\n我爱你\n                ',3,2,'2016-04-26 11:10:28'),
	(3,'oKCDxjotE3w3GNbzBcCqTeobUy2c','','','',0,0,'2016-04-26 14:38:43'),
	(4,'oKCDxjtNY00YGPBhG5nTz3Rbq6Z4','','','',0,0,'2016-04-26 15:03:39'),
	(5,'oKCDxjtmqbu5YSOq4J2a_S3sKqDM','','','',0,0,'2016-04-26 16:13:15');

/*!40000 ALTER TABLE `coach_info` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table coach_oauth
# ------------------------------------------------------------

DROP TABLE IF EXISTS `coach_oauth`;

CREATE TABLE `coach_oauth` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) NOT NULL DEFAULT '',
  `nickname` blob NOT NULL,
  `headimgurl` varchar(255) NOT NULL DEFAULT '',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `openid` (`openid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `coach_oauth` WRITE;
/*!40000 ALTER TABLE `coach_oauth` DISABLE KEYS */;

INSERT INTO `coach_oauth` (`id`, `openid`, `nickname`, `headimgurl`, `createtime`)
VALUES
	(1,'oKCDxjivJ92ky4dxLT8dt1jcXtn4',X'44656D6F6EF09F9884','http://wx.qlogo.cn/mmopen/ajNVdqHZLLBj4q9wtODTBtia5icgFxOeWvlmuOvKSiayvDnmzibqQd8TLF52c7XBEccwvPhnTBUNThKpyEZaNuFUQA/0','2016-04-25 14:22:55'),
	(2,'oKCDxjoqrkXCJ-AyxIGaEP93LRU4',X'4576656C796E','http://wx.qlogo.cn/mmopen/ZV1DuGicHvGh92eicAL1iaMicnKGAlUzoA6ourRv7at8waibkJfuTtoXBNUA5ogdEic09AODTjyWCFOAdFWhaBEnicmNWBUkNRYUEwg/0','2016-04-25 16:00:47'),
	(3,'oKCDxjotE3w3GNbzBcCqTeobUy2c',X'4A6F6B65722E','http://wx.qlogo.cn/mmopen/ZV1DuGicHvGh92eicAL1iaMicmfq75iaQicBnke3ictdaZB6VabSQYlC2JoHfOGV3KHcZsrG33y7xvw7soVoTibxE4RaopxKSFGjnYBK/0','2016-04-26 14:38:43'),
	(4,'oKCDxjtNY00YGPBhG5nTz3Rbq6Z4',X'E28A822828E383BB4CE383BB2929E28A83','http://wx.qlogo.cn/mmopen/CVZCn1ukTxqMOkpKr3ibzHRsmic4tAem5PODaKyBt2ZeYzHejVPT08efrVP9U2qVGKs7FSKibH9pPNP9Un58TQVCNjIAQtcFib2U/0','2016-04-26 15:03:39'),
	(5,'oKCDxjtmqbu5YSOq4J2a_S3sKqDM',X'E992B1E699B6','http://wx.qlogo.cn/mmopen/PiajxSqBRaELElwRQf3wxcFIPZUpyeGkdTc2IsVOhcibywTmU2VqOaUM3AvegjlFflY3qDMtWbr2QQl7CAvzAzDA/0','2016-04-26 16:13:14');

/*!40000 ALTER TABLE `coach_oauth` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
