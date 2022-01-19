-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-01-2022 a las 20:17:54
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `davidionic`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localizaciones`
--

CREATE TABLE `localizaciones` (
  `idLoc` int(128) NOT NULL,
  `sitio` varchar(128) NOT NULL,
  `tiposSitio` varchar(128) NOT NULL,
  `latitud` varchar(128) NOT NULL,
  `longitud` varchar(128) NOT NULL,
  `image` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `localizaciones`
--

INSERT INTO `localizaciones` (`idLoc`, `sitio`, `tiposSitio`, `latitud`, `longitud`, `image`) VALUES
(13, 'Viva Gym', 'GIMNASIO', '2333', '1244', ''),
(14, 'Glories', 'CENTRO COMERCIAL', '-134', '-66', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `localizaciones`
--
ALTER TABLE `localizaciones`
  ADD PRIMARY KEY (`idLoc`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `localizaciones`
--
ALTER TABLE `localizaciones`
  MODIFY `idLoc` int(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
