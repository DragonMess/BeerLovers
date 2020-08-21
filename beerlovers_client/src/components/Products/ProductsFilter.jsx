import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import styleComponents from "../../styledComponents/styleComponent";
import useApplication from "../../hooks/useApplicationData";
import { findBreweryName } from "../../helpers/selectors";
const { Styles } = styleComponents();

const ProductsFilter = (props) => {
  const { state, setState } = useApplication();
  const brewerId = localStorage.getItem("brewerId");
  const [brewer, setbrewer] = useState(brewerId);
  const [isFiltered, setFiltered] = useState(true);
  const brewerName = findBreweryName(state, brewerId);
  console.log(brewerName);
  const handleFiltered = (event) => {
    // console.log(event.target.checked);
    // set true or false
    setFiltered(!isFiltered);
    // call fct and send (true/false , id)
    setbrewer(null);
    localStorage.removeItem("brewerId");
  };

  const { filterbyType } = props;

  return (
    <Styles>
      {brewer ? (
        <form>
          <label>Filtered by Selected Brewer in Map</label>
          <input
            className="checkbox"
            type="checkbox"
            checked={isFiltered}
            onChange={handleFiltered}
            name="task-chk"
          />
        </form>
      ) : (
        <h6></h6>
        // <h6>To Filter by Brewer go to the Map</h6>
      )}
      <div>
        <Col>
          {brewer ? (
            <div>
              <h3>Brewer name :</h3> <h2>{brewerName}</h2>{" "}
            </div>
          ) : (
            <h2>Traditional Beers</h2>
          )}

          {/* <h3>Traditional Beers</h3> */}
          {/* <h3> Brewery: Traditional Beers</h3> */}
        </Col>
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
