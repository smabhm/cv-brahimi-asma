-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : sam. 24 fév. 2024 à 14:03
-- Version du serveur : 5.7.39
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `contact`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages_contact`
--

CREATE TABLE `messages_contact` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `messages_contact`
--

INSERT INTO `messages_contact` (`id`, `nom`, `email`, `message`) VALUES
(1, 'qsdqsd', 'qsdqdSDDQSD@DSKJC.FR', 'qsdqsD'),
(2, 'asma ', 'asma@gmail.fr', 'dzhlDAZ'),
(3, 'asma ', 'asma@gmail.fr', 'dzhlDAZ'),
(4, 'nds;', 'snn@domf.fr', 'dlnkzq');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `messages_contact`
--
ALTER TABLE `messages_contact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `messages_contact`
--
ALTER TABLE `messages_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
