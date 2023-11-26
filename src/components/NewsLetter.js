import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="newsLetter">
      <Container>
        <Row>
          <Col>
            <p>Subscribe to our Newsletter & Never miss later update</p>
          </Col>
          <Col>
            <form>
              <div className="form-div">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
