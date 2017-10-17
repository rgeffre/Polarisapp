import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import "./Blog.css";


const Blog = () =>
  <div>
    <Container fluid>
      <Row>
        <Col size="md-1" />
        <Col size="md-4">
          <h1 className="pageHeader">Emergency Prep Blog</h1>
        </Col>
        <Col size="md-7" />
      </Row>
      <Row>
        <Col size="md-4">
          <div className="wrapper blogWrapper">
            <a className="whiteText" href="/hurricane">
              <img className="blogImg" src="./images/hurricane.jpg" alt="Hurricane" />
              <br />
              <h3>Hurricane</h3>
            </a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper blogWrapper">
            <a className="whiteText" href="/tornado">
              <img className="blogImg" src="./images/tornado.jpg" alt="Tornado" />
              <br />
              <h3>Tornado</h3>
            </a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper blogWrapper">
            <a className="whiteText" href="/blizzard">
              <img className="blogImg" src="./images/blizzard.jpg" alt="blizzard" />
              <br />
              <h3>Blizzard</h3>
            </a>
          </div>
        </Col>

      </Row>
      <Row>
        <Col size="md-4">
          <div className="wrapper blogWrapper">
            <a className="whiteText" href="/tsunami">
              <img className="blogImg" src="./images/tsunami.jpg" alt="tsunami" />
              <br />
              <h3>Tsunami</h3>
            </a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper blogWrapper">
            <a className="whiteText" href="/fire">
              <img className="blogImg" src="./images/fire.jpg" alt="wild fire" />
              <br />
              <h3>Wild Fire</h3>
            </a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper blogWrapper">
            <a className="whiteText" href="/volcano">
              <img className="blogImg" src="./images/volcano.jpg" alt="volcano" />
              <br />
              <h3>Volcanic Eruption</h3>
            </a>
          </div>
        </Col>

      </Row>
      <br /> <br />
    </Container>
  </div>
export default Blog;
