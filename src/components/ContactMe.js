import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faShareNodes, faEnvelope} from '@fortawesome/free-solid-svg-icons'


const ContactMe = () =>{

    return(  <Container>
        <Row>
          <Col>
            <Row style = {{display: "flex", justifyContent: "center"}}>
                <h1>Contact Me <FontAwesomeIcon icon={faPhone} /></h1>
            </Row>
            <Row style = {{display: "flex", justifyContent: "center"}}>
                <img src = "/Portfolio/img/ContactMe.jfif" style = {{width: "300px", height: "300px"}}></img>
            </Row>
          </Col>
          <Col style = {{display: "flex", flexDirection:"column", justifyContent: "center", justifyContent: 'space-evenly'}}>
                <Row>
                    <Col>
                        <Row><h2>Phone <FontAwesomeIcon icon={faPhone}/></h2></Row>
                        <Row><a href = "tel:224-310-8454"> 224-310-8454 </a></Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row><h2>Email <FontAwesomeIcon icon={faEnvelope} /></h2></Row>
                        <Row>
                            <a href = "mailto:&#x64;&#x61;&#x76;&#x69;&#x64;&#x63;&#x68;&#x65;&#x75;&#x6e;&#x67;&#x32;&#x33;&#x31;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;"> 
                                    davidcheung231[AT]gmail[DOT]com
                            </a>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row><h2>Socials <FontAwesomeIcon icon={faShareNodes} /></h2></Row>
                        <Row>
                            <a target = "_blank" href = "https://www.linkedin.com/in/david-cheung-473434226/">
                                <img className = "social-icon"  src = "/Portfolio/img/Linkedin.png"></img>
                            </a>
                            <a target='_blank' href='https://github.com/dcheung0720'>
                                <img className = "social-icon" style={{width: "60px"}}  src = "/Portfolio/img/github.jpg"></img>  
                            </a>
                        </Row>
                    </Col>
                </Row>
          </Col>
        </Row>
      </Container>)


};

export default ContactMe;