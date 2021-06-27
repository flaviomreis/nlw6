-- MariaDB dump 10.19  Distrib 10.5.10-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: nlw6
-- ------------------------------------------------------
-- Server version	10.5.10-MariaDB-2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `compliments`
--

DROP TABLE IF EXISTS `compliments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compliments` (
  `id` varchar(255) NOT NULL,
  `user_sender_id` varchar(255) NOT NULL,
  `user_receiver_id` varchar(255) NOT NULL,
  `tag_id` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FKUserSenderCompliments` (`user_sender_id`),
  KEY `FKUserReceiverCompliments` (`user_receiver_id`),
  CONSTRAINT `FKUserReceiverCompliments` FOREIGN KEY (`user_receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKUserSenderCompliments` FOREIGN KEY (`user_sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compliments`
--

LOCK TABLES `compliments` WRITE;
/*!40000 ALTER TABLE `compliments` DISABLE KEYS */;
INSERT INTO `compliments` VALUES ('6ae39bb5-e170-40ec-b91f-e22873e82a22','94fbf3e3-15d2-45a8-be20-387c06696018','d2cf022d-64c1-4fcb-a9d9-1db2a8681681','270973df-9898-465a-af53-838a11aa8f2c','Usuário0 é um cara muito feliz.','2021-06-27 01:13:58'),('6b7e7a62-6a29-4070-9ccd-c69961d7beb5','d2cf022d-64c1-4fcb-a9d9-1db2a8681681','d355ecb9-7a61-474e-ab52-c6dc6880a1e8','6ffdff5d-444a-453c-8c5d-34db60b59303','Flávio é um cara calmo.','2021-06-27 02:28:20');
/*!40000 ALTER TABLE `compliments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1624394479366,'CreateUsers1624394479366'),(2,1624461328974,'CreateTags1624461328974'),(3,1624546740418,'AlterUserAddPassword1624546740418'),(4,1624562068295,'CreateCompriments1624562068295');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES ('270973df-9898-465a-af53-838a11aa8f2c','happy','2021-06-27 01:12:36','2021-06-27 01:12:36'),('6ffdff5d-444a-453c-8c5d-34db60b59303','calm','2021-06-27 02:17:56','2021-06-27 02:17:56');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('8402aaae-2826-4e99-81a7-bee734ecc10d','usuario3','usuario3@f18s.f9s',1,'2021-06-27 04:26:26','2021-06-27 04:26:26','$2a$08$8FPtr8tS44mFzQ1xNCf7z.af07HwTy2jQPwaB2VLvkFRcqQR5LUwW'),('94fbf3e3-15d2-45a8-be20-387c06696018','usuario2','usuario2@f18s.f9s',0,'2021-06-27 01:12:24','2021-06-27 01:12:24','$2a$08$qyJLzzsG6VlzaFSrj/Jo1.pQH0Yrpf/X6CnDSj3ajGUAAGbP6KBYa'),('d2cf022d-64c1-4fcb-a9d9-1db2a8681681','usuario0','usuario0@f18s.f9s',0,'2021-06-27 01:12:13','2021-06-27 01:12:13','$2a$08$TMN19tNc70vnkAlkk1uWe.KZnaUqkK/dNZIJpr1jlhF1E5.rPWcL6'),('d355ecb9-7a61-474e-ab52-c6dc6880a1e8','Flávio Menezes dos Reis','flavio-reis@pge.rs.gov.br',1,'2021-06-27 01:12:21','2021-06-27 01:12:21','$2a$08$byNQb9w1lgx4AZITgNK97ugnmE7BLaRl6GQiLdKrI6aNAJbBZ1V3K'),('d815b947-0c4e-4844-998b-d60772cb127d','usuario1','usuario1@f18s.f9s',0,'2021-06-27 01:12:16','2021-06-27 01:12:16','$2a$08$7gNX.xhTaA0U4/coD8PtBe8Dg4rzfSAO296CVAuTHQkC02j22729W'),('e98a727e-9249-4716-8ecf-b5a8009fe4c9','admin','admin@f18s.f9s',1,'2021-06-27 01:12:19','2021-06-27 01:12:19','$2a$08$MFxlChkAOYJZ3QwqN8sAqOyEOx4oin/LRZTEU0c1vGMYciWAtUzTS');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-27  1:53:39
