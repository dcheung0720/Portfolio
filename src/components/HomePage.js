import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';
import "./HomePage.css"
import { useEffect, useState } from 'react';

const HomePage = () =>{

    const [displayInterest, setDisplayInterest] = useState(false);

    return (<Container>
            <Row>
                <Col style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style = {{fontSize: "30px"}}>
                        {displayInterest? <>
                            <span>Welcome! I am David Cheung.</span>
                            <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .typeString('<span>I am into creating <span class = "popOut"> Web </span> and <span class = "popOut"> Mobile Apps </span> that solve people\'s problems.</span>')
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
                <Col><img style={{borderRadius: "50%", width: "300px", height: "300px"}} src={"/Portfolio/img/pfp.jpg"} alt="Profile Picture" /></Col>
            </Row>
      </Container>)
}




export default HomePage;