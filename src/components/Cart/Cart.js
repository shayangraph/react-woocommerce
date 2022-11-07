import React from "react";
import { Card, Row, Col } from "reactstrap";

const CardPage = () => {
  return (
    <div>
      <p>لیست خرید ها</p>
      <Row>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <Card>سفارش شماره 1</Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardPage;
