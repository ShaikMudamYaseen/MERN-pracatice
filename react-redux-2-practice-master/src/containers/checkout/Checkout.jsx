import React from "react";
import "./Checkout.css";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkout } from "../../redux/actions";
import { getTotalPrice } from "../../redux/reducers";
import { getAllProductsId } from "../../redux/reducers/products";

import Button from "../../components/shared/button/Button";

class Checkout extends React.Component {
  componentWillUnmount() {
    this.props.checkout(this.props.allProductsId);
  }

  render() {
    const { totalPrice } = this.props;

    return (
      <Container style={{ marginTop: "2.8rem" }}>
        <Row>
          <Col md="8" className="m-auto text-center">
            <h4 className="lead text-muted font-italic">
              You shop like a Pro! Thankyou.
            </h4>
            <h2 className="font-weight-bold">You spent &#x20b9;{totalPrice}</h2>
            <img
              src="https://cdni.iconscout.com/illustration/free/thumb/shopping-fun-1567066-1322717.png"
              alt="shopping"
              className="checkout-img"
            />

            <Link to="/">
              <Button>Shop More</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  totalPrice: getTotalPrice(state),
  allProductsId: getAllProductsId(state.products),
});

const mapDispatchToProps = (dispatch) => ({
  checkout: (allProductsId) => dispatch(checkout(allProductsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
