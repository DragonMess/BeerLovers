import React from "react";
import { Button } from "react-bootstrap";
import styleComponents from "../styledComponents/styleComponent";
const { Styles } = styleComponents();

const ProductsFilter = (props) => {
  const { filterbyType } = props;
  return (
    <Styles>
      <div>
        <h2> Traditional Beers</h2>
      </div>
      <section className="traditionalBeers">
        <Button className="Beers-btn" onClick={(e) => filterbyType("Blonde")}>
          Blonde Beer
        </Button>
        <Button className="Beers-btn" onClick={(e) => filterbyType("White")}>
          White Beer
        </Button>
        <Button className="Beers-btn" onClick={(e) => filterbyType("Brown")}>
          Brown Beer
        </Button>
        <Button className="Beers-btn" onClick={(e) => filterbyType("IPA")}>
          IPA Beer
        </Button>
        <Button className="Beers-btn" onClick={(e) => filterbyType("Amber")}>
          Amber Beer
        </Button>
      </section>
      <div>
        <h2> Special Beers</h2>
      </div>
      <section className="specialBeers">
        <Button className="Beers-btn" onClick={(e) => filterbyType("Alambra")}>
          Alambra Beer
        </Button>
        <Button className="Beers-btn" onClick={(e) => filterbyType("Siracoli")}>
          Siracoli Beer
        </Button>
      </section>
    </Styles>
  );
};
export default ProductsFilter;
