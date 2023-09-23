-- MariaDB dump 10.19  Distrib 10.5.18-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: appdb
-- ------------------------------------------------------
-- Server version	5.6.51

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
-- Current Database: `appdb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `appdb` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `appdb`;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `admin_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `admin_email` varchar(255) DEFAULT NULL,
  `admin_mobile_number` varchar(255) DEFAULT NULL,
  `admin_password` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `FK8ahhk8vqegfrt6pd1p9i03aej` (`user_id`),
  CONSTRAINT `FK8ahhk8vqegfrt6pd1p9i03aej` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `login_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `product_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `available_slots` varchar(255) DEFAULT NULL,
  `date_of_purchase` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `product_model_no` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `service_center_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `service_center_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FK77hc9b3a8kyq4uj0rqkbuo6l9` (`service_center_id`),
  KEY `FK979liw4xk18ncpl87u4tygx2u` (`user_id`),
  CONSTRAINT `FK77hc9b3a8kyq4uj0rqkbuo6l9` FOREIGN KEY (`service_center_id`) REFERENCES `service_center` (`service_center_id`),
  CONSTRAINT `FK979liw4xk18ncpl87u4tygx2u` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'2023-09-19','2001-08-08','123','jnknk','po','po',NULL,NULL,NULL),(10,'2023-09-28','2023-09-01','1234567890','edit','edit2','edit2',27,2,'Chennai Vaccum Services'),(11,'2023-09-26','2021-03-05','+1 (234) 567-8901','Yearly bag cleaning service required.','NEN110A','Eureka Whirlwind Bagless',28,10,'City Service Center - Chennai'),(12,'2023-09-27','2023-02-25','+1 (345) 678-9012','HEPA filter not working.','UH72625','Hoover WindTunnel MAX',33,10,'Office Vacuum Cleaning - Mumbai'),(13,'2023-09-25','2018-02-17','+1 (456) 789-0123','Suction not working. Doesn;t turn on when plugged.','Multi Floor 2','Dyson Ball Multi Floor 2',22,8,'TechMaster Hub - Bangalore'),(14,'2023-09-23','2004-09-01','+1 (430) 890-2345','Yearly Vacuum Service + Bag Installation.','2522','Bissell Cleanview Swivel Pet',28,11,'City Service Center - Chennai'),(15,'2023-09-25','2020-06-22','+1 (234) 567-8901','Under 3 year warrenty. Service required.','SD20000RED','Dirt Devil Simpli-Stik',36,3,'Vacuum Cleaner Maintenance - Chennai'),(16,'2023-09-27','2023-09-20','1234567890','Pp','2','Details',36,10,'Vacuum Cleaner Maintenance - Chennai'),(17,'2023-09-25','2019-06-22','+1 (456) 789-0123','Yearly Warranty Service','Multi Floor 2','Dyson Ball Multi Floor 2',22,2,'TechMaster Hub - Bangalore'),(18,'2023-09-24','2023-03-04','8765456789','Yearly Warrenty Service','Complete C3','Miele Complete C3',28,31,'City Service Center - Chennai'),(20,'2023-09-27','2023-09-01','88888 88888','test description of the product','test','test product 1',39,48,'test - Chennai');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_center`
--

DROP TABLE IF EXISTS `service_center`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service_center` (
  `service_center_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `service_center_address` varchar(255) DEFAULT NULL,
  `service_center_description` varchar(255) DEFAULT NULL,
  `service_center_email_id` varchar(255) DEFAULT NULL,
  `service_center_image_url` varchar(255) DEFAULT NULL,
  `service_center_name` varchar(255) DEFAULT NULL,
  `service_center_phone` varchar(255) DEFAULT NULL,
  `service_center_price` varchar(255) DEFAULT NULL,
  `service_center_timings` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`service_center_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_center`
--

LOCK TABLES `service_center` WRITE;
/*!40000 ALTER TABLE `service_center` DISABLE KEYS */;
INSERT INTO `service_center` VALUES (22,'123 Main Street, Bangalore','Your one-stop solution for all tech repairs. We specialize in repairing vacuums, hoses and replacements. Fast and reliable service!','contact@techmasterhubny.com','https://media.istockphoto.com/id/1254852664/photo/dust-mites-dont-stand-a-chance.jpg?s=612x612&w=0&k=20&c=8-IOxKFDbYWGi0_RdvLwlESMvPeNay1w-49eo6SC4G0=','TechMaster Hub - Bangalore','+1 (555) 123-4567','9000','Mon-Fri: 9 AM - 7 PM, Sat-Sun: 10 AM - 5 PM'),(27,'567 Pine Street, Chennai','Your home technology experts. We provide installation and repair services for home devices, cleaners and more!','support@hometechsf.com','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0nCRXDX26MkQFbLUuPoza2roHIB5blInLcCtFVxIsDjR5ls2ntyhLIz4QUOEhCuEBb4&usqp=CAU','Chennai Vaccum Services','+1 (555) 234-5678','3000','Mon-Sat: 9 AM - 6 PM, Sun: Closed'),(28,'123 Main Street, Chennai','City Service Center provides expert repair services for electronic devices in Chennai City!','cityservicechennai@gmail.com','https://www.homedesigninspired.com/wp-content/uploads/2023/03/The-Comprehensive-Guide-to-Cyclone-Vacuum-Cleaners-1.jpg','City Service Center - Chennai','+1 (123) 456-7890','8000','Mon-Fri: 9:00 AM - 5:00 PM'),(29,'789 Elm Street, Pune','Your trusted vacuum repair and maintenance center in Pune. We offer services for all Vacuum types. Quality workmanship and competitive prices!','info@hometech.com','https://img.freepik.com/premium-photo/carpet-chemical-cleaning-with-professionally-disk-machine-early-spring-cleaning-regular-clean-up_130111-4404.jpg','HomeTech Solutions - Pune','+1 (555) 789-0123','9500','Mon-Fri: 9 AM - 7 PM, Sat-Sun: 10 AM - 5 PM'),(33,'657 Avenue, Mumbai','Keep your office space clean and tidy with our vacuum cleaning service. We\'ll take care of your carpets, floors, and common areas.','offivevc@info.com','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCWBlSl_fxamwCdnpXNYM4e35sC2zJbMdgjMPqBaAwWf1_69FM86-MvDyVU9LcZvHqoQ&usqp=CAU','Office Vacuum Cleaning - Mumbai','+1 (987) 654-3210','7800','Mon-Fri: 9 AM - 9 PM, Sat-Sun: 10 AM - 5 PM'),(34,'756, 12th Cross, Mumbai','Rent our professional-grade vacuum cleaning equipment for your DIY cleaning projects. High-quality vacuums available for daily or weekly rentals.','vacuumrentals@mail.com','https://www.reliancedigital.in/wp-content/uploads/2020/06/vacuum_cover.jpg','Vacuum Cleaning Equipment Rental - Mumbai','+1 (234) 567-8901','10800','Mon-Sat: 8 AM - 9 PM, Sun: Closed'),(35,'846, Block 24, Bangalore','Specialized carpet cleaning vacuum servicers for deep cleaning and stain removal. We use advanced technology to restore your vacuum cleaners.','upholder@mail.com','https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150358992.jpg?w=2000','Upholstery Vacuum Cleaner Services - Bangalore','+1 (789) 012-3456','7400','Mon-Fri: 7 AM - 5 PM, Sat-Sun: 9 AM - 3 PM'),(36,'23rd Avenue, Chennai','Preventive maintenance for your vacuum cleaner to ensure optimal performance. We clean filters, check hoses, and more.','info@cleanerschennai.com','https://4.imimg.com/data4/BS/XJ/MY-8374440/office-carpet-cleaning-services-500x500.jpg','Vacuum Cleaner Maintenance - Chennai','+1 (789) 012-3456','7000','Mon-Fri: 6 AM - 10 PM, Sat: 8 AM - 8 PM, Sun: 9 AM - 6 PM'),(37,'123rd Street, Chennai','Services available all around Chennai for any broken vacuum cleaner! Specialized in Dyson Vacuum Cleaners','greatercityche@mail.com','https://www.canadianelitecarpetcleaning.com/uploadedfiles/service/large/1473312752.jpg','Greater City Vacuum Services - Chennai','+1 (987) 654-3210','8000','Mon - Fri 8AM - 9PM'),(39,'Chennai','test description','testadmin@mail.com','https://media.istockphoto.com/id/949224810/photo/person-cleaning-carpet-with-vacuum-cleaner.webp?b=1&s=170667a&w=0&k=20&c=EygtgHUOsNco_3JdpTQ7rQvs979KHKHpyKYKQGbisSM=','test - Chennai','12345 67890','9000','test time');
/*!40000 ALTER TABLE `service_center` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'rachanaa@virtusa.com','1234567890','rachanaa','admin','rachanaa@virtusa.com'),(2,'user@gmail.com','1234567890','rachanaa','user','user@gmail.com'),(3,'rach@gmail.com','2938475609','rachanaa','user','rachanaa'),(4,'admin1@gmail.com','1234567890','rachanaa','admin','rachanaa@virtusa.com'),(5,'rachanaadmin@gmail.com','5643321287','examly','admin','rachanaa@virtusa.com'),(6,'chithra@gmail.com','8144922263','qwerty','admin','chithra'),(7,'mythiresh@gmail.com','9884143701','12345678','admin','mythiresh'),(8,'mythireshaffilate@gmail.com','1234567890','12345678','user','mythiresh'),(9,'boston@gmail.com','8765498723','boston!','admin','boston'),(10,'masset@gmail.com','7653412986','masset!','user','masset'),(11,'fries@mail.com','8409237549','fried!','user','fries'),(12,'quaint@mail.com','7654321876','quaint!','user','quaint'),(13,'archana@mail.com','9841074321','archanaa','ADMIN','archanaa'),(14,'test@gmail.com','1234567890','test@123','admin','user@gmail.com'),(15,'test123@gmail.com','1234567890','test@123','admin','user@gmail.com'),(16,'rachu.aravindan@gmail.com','1234567890','test@123','admin','test123'),(17,'user2@mail.com','5678904321','qwerty','user','user2@mail.com'),(19,'example@example.com','1234567890','your_password','user','your_username'),(20,'rachan@mail.com','9898989898','rachana','admin','rachana'),(21,'test75@gmail.com','8765493874','rachana','Admin','test75'),(23,'test76@mail.com','1234567890','asdfgh','admin','test76'),(24,'user123@123','1234567890','rachanaa','ADMIN','2123`'),(25,'ij@','1234567890','rachanaa','user','user@gmail.com'),(26,'adminadminadin@gmail','1234567890','rachanaa','ADMIN','adminadinm'),(27,'admin123@mail.com','1234567890','qwerty','admin','admin123'),(28,'admin13@mail.com','1234567890','qwerty','admin','admin123'),(29,'admin2@mail.com','1234567890','qwerty','admin','admin2'),(30,'admin9@gmail.com','1234567890','qwerty','admin','admin9'),(31,'user9@gmail.com','1234567890','qwerty','user','user9'),(32,'user@user.com','1234567890','rachanaa','user','user'),(34,'admin99@mail.com','1234567890','rachanaa','admin','admin99'),(35,'admin922@mail.com','1234567890','rachanaa','admin','admin9222'),(37,'admin80@mail.com','1234567890','rachanaa','admin','admin80'),(38,'user80@mail.com','1234567890','rachanaa','user','user80'),(39,'user81@mail.com','1234567890','qwerty','user','user81'),(40,'user99@mail.com','1234567890','rachanaa','user','user99'),(41,'user20@mail.com','1234567890','rachanaa','user','user20'),(42,'admin20@mail.com','1234567890','qwerty','admin','admin20'),(43,'test99@mail.com','1234567890','qwerty','admin','test99'),(44,'user50@mail.com','1234567890','rachanaa','user','user50'),(47,'testadmin@mail.com','00000 00000','qwerty','admin','testadmin'),(48,'testuser@mail.com','1234567890','qwerty','user','testuser');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-23  6:21:07
