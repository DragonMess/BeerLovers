COPY products
FROM '/home/camillo/finalProject/backend/src/db/schema/Products.csv'
DELIMITER ',' CSV HEADER;