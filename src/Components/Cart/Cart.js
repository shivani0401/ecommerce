import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import './style.css';

const items = [
  { id: 1, name: "Item 1", price: 9.99, quantity: 1 },
  { id: 2, name: "Item 2", price: 14.99, quantity: 2 },
  { id: 3, name: "Item 3", price: 19.99, quantity: 3 },
];

const Cart = () => {
  const renderCartItems = () => {
    return items.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>${item.price.toFixed(2)}</td>
          <td>${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
      );
    });
  };

  const renderTotal = () => {
    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return <h3 className="text-right">Total: ${totalPrice.toFixed(2)}</h3>;
  };

  return (
    <div className="cart">
        <h4>Shopping cart</h4>
         <Container className="mt-5">
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>{renderCartItems()}</tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>{renderTotal()}</Col>
      </Row>
    </Container>
    </div>
   
  );
};

export default Cart;
