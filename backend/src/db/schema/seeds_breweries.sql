COPY breweries
(trade_name,brewer_id,logo,coordinates_x,coordinates_Y)
FROM '/home/camillo/finalProject/backend/src/db/schema/brewery.csv'
DELIMITER ',' CSV HEADER;