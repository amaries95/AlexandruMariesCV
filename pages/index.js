import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import Home from "./../components/Home/Home";
import MobileHeaderMenu from "./../components/MobileHeaderMenu/MobileHeaderMenu";
import HeaderMenu from "./../components/HeaderMenu/HeaderMenu";
import store from "./../components/Store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Experience} from "./../components/Experience/Experience";
import {Projects} from "./../components/Projects/Projects"
import {Skills} from "./../components/Skills/Skills";
import {References} from "./../components/References/References";
import {Login} from "./../components/Login/Login";

export default function Index(props) {
  return (
    <Provider store={store}>
      <Router>
        <Container fluid={true} className="container-padding">
          <Row className="vh-100 vw-100 gx-0">
            <MobileHeaderMenu></MobileHeaderMenu>
            <Col xs={3} className="col-divider">
              <HeaderMenu />
            </Col>
            <Col className="content-container">
              <Routes>
                <Link path="" element={<Home />}></Link>
                <Link path="/experience" element={<Experience />}></Link>
                <Link path="/projects" element={<Projects></Projects>}></Link>
                <Link path="/skills" element={<Skills></Skills>}></Link>
                <Link path="/references" element={<References />}></Link>
                <Link path="/login" element={<Login />}></Link>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </Provider>
  );
}
