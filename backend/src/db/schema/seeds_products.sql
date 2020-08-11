COPY products
(product_name,product_type,unit_price,alcohol,ibu,ebc,stock_quantity,brewery_id,rate,img)
FROM '/home/camillo/finalProject/backend/src/db/schema/Products.csv'
DELIMITER ',' CSV HEADER;