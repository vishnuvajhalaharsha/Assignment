import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { sqlQuery } from "./sqlquery.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import diagram from "../../public/diagram.png"

const SQL = () => {
  return (
    <Container className="m-4">
      <Row>
        <Col>
          <h2>Task 1</h2>

          <pre className="pre">
            <SyntaxHighlighter language="sql" style={darcula}>
              {sqlQuery}
            </SyntaxHighlighter>
          </pre>
        </Col>
        <Col>
        <img width={600} height={500} src={diagram}/>
        </Col>
      </Row>
    </Container>
  );
};

export default SQL;
