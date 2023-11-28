import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import File from './File';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faList, faUpRightFromSquare, faCode, faFlask, faGear, faGears, faEyeLowVision, faChartSimple, faSchool, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact, faUnity, faJs, faCss3, faHtml5, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const Projects = () =>{

    const categories = [{"name": "ReactJS", "icon": faReact},
                        {"name": "React Native", "icon": faReact}, 
                        {"name": "Unity", "icon": faUnity}, 
                        {"name": "Javascript", "icon": faJs}, 
                        {"name": "SQL", "icon": faDatabase}, 
                        {"name": "C#", "icon": faCode}, 
                        {"name": "HTML5", "icon":  faHtml5}, 
                        {"name": "CSS", "icon": faCss3}, 
                        {"name": "Boostrap", "icon": faBootstrap}, 
                        {"name": "Flask", "icon": faFlask}, 
                        {"name": "Machine Learning", "icon": faGear}, 
                        {"name": "Deep Learning", "icon": faGears}, 
                        {"name": "Computer Vision", "icon": faEyeLowVision}, 
                        {"name": "Data Visualization", "icon": faChartSimple}, 
                        {"name": "Education", "icon": faSchool}, 
                        {"name": "Law", "icon": faScaleBalanced}, 
                        ]

    const projects  = {
        "MotivCookies": {
            "Name": "MotivCookies",
            "Icon": "/Portfolio/img/cookies.png",
            "Date": "10-24-2023",
            "Image": "",
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/MotivCookies",
            "LinkToSite": "",
            "Categories": ["Data Visualization", "React Native", "Javascript", "SQL", "Flask"],
            "Descriptions": ["MotivCookies is a mobile app created with React Native that generates a motivational quote using Tensorflow's Universal Senetence Encoder and suggests productive activities to the user"] 
        },
        "TurboMath": {
            "Name": "Turbo Math",
            "Icon": "/Portfolio/img/Turbo.png",
            "Date": "06-24-2023",
            "Image": "/Portfolio/img/TurboMath.png",
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/TurboMath",
            "LinkToSite": "https://turbomath-a0c94.web.app/",
            "Categories": ["Data Visualization", "ReactJS", "HTML5", "Javascript", "CSS", "Boostrap", "Education"],
            "Descriptions": ["Turbo Math is a responsive solo/multiplayer website game in React JS with Firebase Real-Time Database, helping students improve mental arithmetic and track their progress. It also has personalized, real-time data-driven visualizations using D3 JS to help students monitor and assess their learning progress."] 
        },
        "HateSpeechClassifier":{
            "Name": "Hate Speech Trinary Classification",
            "Icon": "/Portfolio/img/twitter.png",
            "Date": "03-03-2023",
            "Image": "",
            "File": "/Portfolio/files/ClassifierReport.pdf",
            "GitRepository": "https://github.com/cs449w23/project-stop-sign",
            "LinkToSite": "",
            "Categories": ["Machine Learning", "Deep Learning", "Python3"],
            "Descriptions": ["Used Pytorch to train several deep learning models, including Vanilla RNNs, LSTMs, GRUs, and Transformers, on Twitter tweets to classify whether a tweet is hateful, offensive, or neither.",
                            "Tuned the models\' parameters, such as Embeddings, Epochs, Dropout, Weight Decays, Weight Constraints, to reduce overfitting and compared the performance of the models using cross entropy and validation accuracy."]
        },
        "ResponseGenie":{
            "Name": "Response Genie",
            "Icon": "/Portfolio/img/genie.png",
            "Date": "01-03-2023",
            "Image": "/Portfolio/img/ResponseGenie.png",
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/LCBH-Help-Desk",
            "LinkToSite": "",
            "Categories": ["Machine Learning", "ReactJS", "Javascript", "HTML5", "CSS", "Boostrap", "Law", "Python3", "Flask"],
            "Descriptions": ["Developed a complementary web application using ReactJS with MongoDB in the Help Scout platform to decrease turnaround response times for housing inquiries.",
                            "Built a backend API in Flask that fetches data from Help Scout and compute classification predictions.",
                            "Applied machine learning (KNN) classification to automatically classify the type of the inquiry and select a canned response that a paralegal can use to quickly reply to a tenant’s inquiry." ]
        },
        "LastStand":{
            "Name": "Last Stand",
            "Icon": "",
            "Date": "01-03-2023",
            "Image": "",
            "File": "",
            "GitRepository": "https://github.com/sell488/Last-Stand",
            "LinkToSite": "",
            "Categories": ["Unity", "C#"],
            "Descriptions": ["A 3D FPS tower defense game using Unity."]
        },
        "Gesic":{
            "Name": "Gesic",
            "Icon": "/Portfolio/img/music.png",
            "Date": "11-25-2023",
            "Image": "",
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/EE332-Gesic",
            "LinkToSite": "",
            "Categories": ["Computer Vision", "Python3"],
            "Descriptions": ["A Python3 program that allows users to create music with gestures either by the finger collisions or gesture recognition."]
        },
        "ISeekNu":{
            "Name": "ISeekNu",
            "Icon": "",
            "Date": "11-01-2022",
            "Image": "",
            "File": "",
            "GitRepository": "https://github.com/397-f22/iSeekNU",
            "LinkToSite": "",
            "Categories": ["ReactJS", "Javascript", "HTML5", "CSS"],
            "Descriptions": ["A large scale hide and seek game where the seeker has access to approximate locations of hiders."]
        },
        "StayHydrated":{
            "Name": "StayHydrated",
            "Icon": "",
            "Date": "10-01-2022",
            "Image": "",
            "File": "",
            "GitRepository": "https://github.com/397-f22/iSeekNU",
            "LinkToSite": "http://www.responsinator.com/?url=https%3A%2F%2Fstayhydrated-41d70.firebaseapp.com%2F",
            "Categories": ["ReactJS", "Javascript", "HTML5", "CSS"],
            "Descriptions": ["A react app with Firebase backend support created by my team and I to help people keep track of their water hydration intake."]
        },
        "Holler":{
            "Name": "Holler",
            "Icon": "",
            "Date": "03-01-2022",
            "Image": "",
            "File": "",
            "GitRepository": "https://github.com/394-s22/Holler",
            "LinkToSite": "",
            "Categories": ["ReactJS", "Javascript", "HTML5", "CSS"],
            "Descriptions": ["A PDF parser for legal documents such as contracts such that users can easily see the important information, add dates to calendar, and make payments."]
        }
    }

    const [selected, setSelected] = useState([]);

    const handleFilter = (e) =>{
        const regex = /(.*?)(?=<svg)/;
    
        const match = e.target.innerHTML.match(regex);
        if(selected.includes(match[0].trim())){
            setSelected((prev) => prev.filter(item => item !== match[0].trim()))
        }
        else{
            setSelected((prev) => [...prev, match[0].trim()])
        }
    };

    return (<Container  style = {{position: "absolute", top: 100, left: "50%", transform: "translate(-50%, 0)", width: "100%"}}>
        <Row style = {{display: "flex", justifyContent: "left", alignItems:"center", margin: 10}}>
            <span style = {{fontSize: "25px", }}> <b>Filter (OR): </b> </span> 
            {
                categories.map(cat => 
                <Button onClick={(e) => handleFilter(e)} style = {{margin: "5px", opacity: selected.length === 0? 1: !selected.includes(cat["name"])? 0.5: 1}} variant="primary">
                    {cat["name"]} <FontAwesomeIcon icon ={cat["icon"]}></FontAwesomeIcon>
                </Button>)
            }
        </Row>
        <Row>
            <Col style = {{display: "flex", justifyContent:"center", flexWrap: "wrap", width: "100%"}}>{
            Object.values(projects).filter(
                item => item["Categories"].some(
                item  => {
                    if(selected.length != 0){
                        return selected.includes(item)
                    }
                    return true;
                }))
                .map(item => {
                return(
                    <Card md = {12} xs = {12} lg = {12} style={{width: "500px",height: "500px", border: "3px solid white", borderRadius: "5%", backgroundColor: "black", margin: "10px", overflowY: "scroll" }}>
                        <h1 style = {{marginTop: "10px", display: "flex", justifyContent: "center"}}>
                            {item["Name"]} 
                            {item["Icon"] !== "" && <img src = {item["Icon"]} style = {{borderRadius: "50%", width: "50px", height: "50px"}}></img>}
                        </h1>
                        <Card.Title> 
                            {item["Image"] !== "" && <Card.Img  src= {item["Image"]}  style = {{padding: "10px", height: "auto", width: "80%"}} />}
                        </Card.Title>
                        <Card.Body style = {{textAlign: "left"}}>
                            {item["LinkToSite"] !== "" && <div>
                                <h4>Link to site <FontAwesomeIcon icon={faUpRightFromSquare} /></h4>
                                <a target='_blank' href = {item["LinkToSite"]}>{item["Name"]} <FontAwesomeIcon icon={faUpRightFromSquare} /></a>
                            </div>}
                            {item["GitRepository"] !== "" && <div>
                                <h4>Git Repository <FontAwesomeIcon icon={faGithub} /></h4>
                                <a target='_blank' href = {item["GitRepository"]}>{item["GitRepository"]}</a>
                            </div>}
                            <div>
                                <h4>Description <FontAwesomeIcon icon={faList} /></h4>
                                <ul>
                                    {item.Descriptions.map(x => <li style = {{fontSize: "15px"}}>
                                        {x}
                                    </li>)}
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}</Col>
        </Row>
    </Container>)
}

export default Projects;