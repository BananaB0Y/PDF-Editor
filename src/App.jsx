import { useState } from "react";
import { Row, Col } from "antd";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Row>
        <Col span={12}>123</Col>
        <Col span={12}>123</Col>
      </Row>
    </>
  );
}

export default App;
