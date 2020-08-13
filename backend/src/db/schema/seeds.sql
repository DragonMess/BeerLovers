COPY users
(name,email,password)
FROM '/home/camillo/finalProject/backend/src/db/schema/Users.csv'
DELIMITER ',' CSV HEADER;

COPY breweries
(trade_name,brewer_id,logo,coordinates_x,coordinates_Y)
FROM '/home/camillo/finalProject/backend/src/db/schema/brewery.csv'
DELIMITER ',' CSV HEADER;

COPY products
(product_name,product_type,unit_price,alcohol,ibu,ebc,stock_quantity,brewery_id,rate,img)
FROM '/home/camillo/finalProject/backend/src/db/schema/Products.csv'
DELIMITER ',' CSV HEADER;

COPY favourites
(product_id,user_id)
FROM '/home/camillo/finalProject/backend/src/db/schema/favourites.csv'
DELIMITER ',' CSV HEADER;