COPY breweries
FROM '/home/camillo/finalProject/backend/src/db/schema/brewery.csv'
DELIMITER ',' CSV HEADER;