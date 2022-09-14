import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Contact = () => {
  const parms = useParams();

  const storeData = useSelector((state) => state.productStore.products);

  let singleuser = storeData.find((obj) => obj.id == parms.id);

  let singleU = [singleuser];

  //console.log(singleuser);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {singleU.map((item, index) => (
            <div className="col-lg-8 m-auto mt-4" key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>Company Name: {item.company.bs}</Card.Title>
                  <Card.Text>Desciption: {item.company.catchPhrase}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Email: {item.email}</ListGroup.Item>
                  <ListGroup.Item>Website: {item.website}</ListGroup.Item>
                  <ListGroup.Item>
                    Zip Adreess: {item.address.zipcode}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
