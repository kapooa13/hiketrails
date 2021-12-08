
/* create `ratings` table */
CREATE TABLE `ratings` (
  `rating_id` int NOT NULL AUTO_INCREMENT,
  `trail_id` int NOT NULL,
  `user_id` int NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `review_content` varchar(255) NOT NULL,
  `rating` int NOT NULL,
  PRIMARY KEY (`rating_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/* create `trails` table */
CREATE TABLE `trails` (
  `trail_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `rating` int NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `description` varchar(255) NOT NULL DEFAULT 'No description given',
  `image_url` varchar(255) NOT NULL DEFAULT 'https://hiketrails-image-uploads.s3.us-east-2.amazonaws.com/default-hike-image.jpg',
  PRIMARY KEY (`trail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/* create `users` table */
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
