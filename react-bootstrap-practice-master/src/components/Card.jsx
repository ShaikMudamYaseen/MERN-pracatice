import React from "react";
import { Card, Button } from "react-bootstrap";
const Card1 = (props) => {
  return (
    <>
      <Card
        style={{
          maxWidth: "18rem",
          marginRight: "2rem",
          marginBottom: "2rem",
          borderRadius: "20px",
        }}
      >
        <Card.Img
          variant="top"
          src={props.img}
          style={{ maxWidth: "18rem", backgroundColor: "rgb(85, 84, 84)" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card1;
