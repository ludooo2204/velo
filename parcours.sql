-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 08 sep. 2020 à 14:25
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `velo`
--

-- --------------------------------------------------------

--
-- Structure de la table `parcours`
--

DROP TABLE IF EXISTS `parcours`;
CREATE TABLE IF NOT EXISTS `parcours` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `trajet` text,
  `distance` float NOT NULL,
  `temps` int(11) DEFAULT NULL,
  `vitesseMoyenne` float DEFAULT NULL,
  `url` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `parcours`
--

INSERT INTO `parcours` (`id`, `date`, `trajet`, `distance`, `temps`, `vitesseMoyenne`, `url`) VALUES
(44, '2020-09-06', NULL, 15.965, NULL, NULL, 'velo18.txt'),
(43, '2020-09-04', NULL, 29.3487, NULL, NULL, 'velo17.txt'),
(42, '2020-09-01', NULL, 15.9195, NULL, NULL, 'velo16.txt'),
(41, '2020-08-30', NULL, 16.0213, NULL, NULL, 'velo15.txt'),
(40, '2020-08-28', NULL, 19.5018, NULL, NULL, 'velo14.txt'),
(39, '2020-08-26', NULL, 4.82585, NULL, NULL, 'velo13.txt'),
(38, '2020-08-24', NULL, 9.50033, NULL, NULL, 'velo12.txt'),
(37, '2020-08-22', NULL, 5.93851, NULL, NULL, 'velo11.txt'),
(36, '2020-08-18', NULL, 11.655, NULL, NULL, 'velo10.txt');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
