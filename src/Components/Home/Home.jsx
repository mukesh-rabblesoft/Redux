import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const product = useSelector((state) => {
    if (!state.productStore.products) {
      return [];
    }
    return state.productStore.products;
  });

  console.log("hello home", product);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {product.map((item, index) => (
            <div className="col-lg-3 mb-4 mt-4" key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Name: {item.name}</Card.Title>
                  <Card.Title>Phone: {item.phone}</Card.Title>
                  <Card.Text>Email: {item.email}</Card.Text>
                  <Link to={`/contact/${item.id}`} className="btn btn-primary">
                    More info
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
