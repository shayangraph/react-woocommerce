import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, CardImg, CardFooter, CardBody } from "reactstrap";
import { AXIOS_API_NODE_BACKEND } from "../../config";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length < 1) {
      axios
        .get(`${AXIOS_API_NODE_BACKEND}/products`)
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.log(err));
    }
  });

  return (
    <div>
      <p>صفحه اصلی</p>
      {products.length > 0 ? (
        <Row>
          {products.map((prod) => (
            <Col key={prod.id} xl={3} lg={3} md={4} sm={6} xs={12}>
              <Card key={prod.id}>
                <CardImg
                  alt={prod.images[0].alt && prod.images[0].name}
                  src={prod.images[0].src}
                ></CardImg>
                <CardBody>{prod.short_description}</CardBody>
                <CardFooter>
                  <Link to={`/products/${prod.id}`}>{prod.name}</Link>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>در حال بارگذری</p>
      )}
    </div>
  );
};

export default HomePage;
