COPY favourites
(product_id,user_id)
FROM '/home/camillo/finalProject/backend/src/db/schema/favourites.csv'
DELIMITER ',' CSV HEADER;