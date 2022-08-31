import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <div>Stores</div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col>
              <StoreItem key={item.id} {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Store;
