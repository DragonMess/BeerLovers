DROP TABLE IF EXISTS users CASCADE;


DROP TABLE IF EXISTS breweries CASCADE;


DROP TABLE IF EXISTS products CASCADE;


DROP TABLE IF EXISTS orders_details CASCADE;


DROP TABLE IF EXISTS orders CASCADE;


CREATE TABLE users (id SERIAL PRIMARY KEY NOT NULL,
                                          name VARCHAR(255) NOT NULL,
                                                            email VARCHAR(255) NOT NULL,
                                                                               password VARCHAR(255) NOT NULL);


CREATE TABLE breweries
  (id SERIAL PRIMARY KEY NOT NULL,
                         trade_name VARCHAR(255) NOT NULL,
                                                 brewer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                                                                                                  logo VARCHAR(255),
                                                                                                       coordinates_x numeric NOT NULL,
                                                                                                                             coordinates_Y numeric NOT NULL);


CREATE TABLE products
  (id SERIAL PRIMARY KEY NOT NULL,
                         product_name VARCHAR(255) NOT NULL,
                                                   product_type VARCHAR(255) NOT NULL,
                                                                             unit_price MONEY NOT NULL,
                                                                                              alcohol numeric NOT NULL,
                                                                                                              IBU numeric NOT NULL,
                                                                                                                          EBC numeric NOT NULL,
                                                                                                                                      stock_quantity INTEGER NOT NULL DEFAULT 0,
                                                                                                                                                                              brewery_ID INTEGER REFERENCES breweries(id) ON DELETE CASCADE);


CREATE TABLE orders_details
  (id SERIAL PRIMARY KEY NOT NULL,
                         product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
                                                                              order_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
                                                                                                                                 quantity INTEGER NOT NULL,
                                                                                                                                                  unit_price MONEY NOT NULL);


CREATE TABLE orders
  (id SERIAL PRIMARY KEY NOT NULL,
                         order_detail_id INTEGER REFERENCES orders_details(id) ON DELETE CASCADE,
                                                                                         buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                                                                                                                                         order_date DATE NOT NULL,
                                                                                                                                                         status VARCHAR(255) NOT NULL,
                                                                                                                                                                             shipped_date DATE, address VARCHAR(255) NOT NULL);