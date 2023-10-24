import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Resume from './Resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faFile } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const About = () =>{
        const [resumeModal, setResumeModal] = useState(false);

        const handleModalView = () =>{
          setResumeModal((prev) => !prev);
        }

        return(<Container>
            {resumeModal && <Resume handleModalView = {handleModalView}/>}
            <Row>
              <Col xs={12} md={6}>
                <Row style = {{display: "flex", justifyContent: "center"}}><img src = "/Portfolio/img/pfp2.png" style = {{borderRadius: "10%"}}></img></Row>
                <Row style = {{display: "flex", justifyContent: "center", marginTop: "20px"}}><Button variant="outline-primary" onClick={handleModalView}>Resume <FontAwesomeIcon icon={faFile} /></Button></Row>   
              </Col>
              <Col xs={12} md={6}>
                <Row> 
                    <h1 style = {{textShadow: "2px 7px 2px rgba(255,255,255,0.3)" }}>About</h1>
                    <p style = {{textAlign: "left"}}>I am a recent graduate with both a Bachelor's and Master's degree in Computer Science from Northwestern University. 
                      As an aspiring software engineer, I specialize in creating web and mobile applications that address people's needs, wants, and inconveniences. 
                      My experience spans various domains, including education, law, and software, and each project involves a user-centric approach, wherein I connect with users, understand their problems,
                      develop solutions, and continually iterate to address new challenges and requirements.
                    </p>

                    <p>In my free time, I also have a passion for teaching and work as a part-time tutor.</p>
                </Row>
                <Row> 
                    <Button variant="outline-success" href='#/ContactMe'>Contact Me <FontAwesomeIcon icon={faPhone} /></Button>
                </Row>
              </Col>
            </Row>
          </Container>
        )
}


export default About;