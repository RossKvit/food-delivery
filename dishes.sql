-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3313
-- Время создания: Сен 16 2020 г., 04:10
-- Версия сервера: 5.6.41
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `food_delivery`
--

--
-- Дамп данных таблицы `dishes`
--

INSERT INTO `dishes` (`id`, `name`, `description`, `image`, `restaurant_id`, `price`, `weight`, `type_id`) VALUES
(1, 'Beef tenderloin with potato spices', 'Tender beef tenderloin with demiglas sauce (sauce based on spruce bones, red wine, vegetables, black and allspice) with potato specialties (dumplings of potatoes, flour', '/img/beef.png', 1, 102, 315, 0),
(2, 'Nutritious afternoon', 'Veal burger with bacon and scrambled eggs.\r\n', '/img/afternoon.png', 1, 140, 350, 0),
(3, 'Schnitzel with potatoes and bacon', 'Pork, potatoes, bacon', '/img/schnitzel.png', 1, 140, 300, 1),
(4, 'Meat mix XXL\r\n', 'Pork, veal and chicken skewers in a branded marinade (tomatoes and spices) with home-made pickles and 2 types of hot sauce based on chili peppers and garlic.', '/img/meet-xxl.png', 1, 850, 1600, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
