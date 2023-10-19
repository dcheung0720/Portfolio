import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';
import "./HomePage.css"
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

const HomePage = () =>{

    const [displayInterest, setDisplayInterest] = useState(false);

    return (<Container>
            <Row>
                <Col style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Container>
                        <Row style={{height: "150px"}}>
                            <Col>
                                <div style = {{fontSize: "30px"}}>
                                    {displayInterest? <>
                                        <span>Welcome! I am David Cheung.</span>
                                        <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                            .typeString('<span>I create <span class = "popOut"> Web </span> and <span class = "popOut"> Mobile Apps </span> that solve people\'s problems.</span>')
                                            .start();
                                        }}
                                        />
                                    </>
                                    :
                                        <Typewriter
                                            style = {{fontSize: "40px"}}
                                            onInit={(typewriter) => {
                                                typewriter.typeString('<span>Welcome! I am David Cheung.</span>')
                                                .callFunction(() => {
                                                    setDisplayInterest(true);
                                                })
                                                .start();
                                            }}
                                        />
                                    }
                                </div>
                            </Col>
                        </Row>
                        <Row style = {{marginTop: "20px"}}>
                            <Col>
                                <Button
                                    style={{
                                        borderRadius: "15px",
                                        marginRight: "10px",
                                        color: "white",
                                        boxShadow: "2px 2px 4px rgba(255, 255, 255, 0.2)",
                                        border: "2px solid white"
                                    }}
                                    variant="primary">
                                    About Me
                                </Button>
                                <a target = "_blank" href = "https://www.linkedin.com/in/david-cheung-473434226/">
                                    <img className = "social-icon"  src = "/Portfolio/img/Linkedin.png"></img>
                                </a>
                                <a target='_blank' href='https://github.com/dcheung0720'>
                                    <img className = "social-icon" style={{width: "70px"}}  src = "/Portfolio/img/github.jpg"></img>  
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col><img style={{border: 'px solid rgb(255, 255, 255)' ,borderRadius: "50%", width: "300px", height: "300px"}} src={"/Portfolio/img/pfp.jpg"} alt="Profile Picture" /></Col>
            </Row>
      </Container>)
}




export default HomePage;