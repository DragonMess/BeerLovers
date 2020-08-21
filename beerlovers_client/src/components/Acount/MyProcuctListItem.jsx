import React from "react";
import { Card, Button } from "react-bootstrap";
export default function MyProcuctListItem(props) {
  const { showProductDescription, name, product } = props;
  const productDescription = (e) => {
    e.preventDefault();
    showProductDescription(product);
  };
  // console.log(name);
  return (
    <div>
      <Card className="bg-dark border border-white">
        <Card.Header
          as="h5"
          className="bg-secondary border border-white"
          onClick={productDescription}
        >
          {name}
        </Card.Header>
      </Card>
      <br />
    </div>
  );
}
