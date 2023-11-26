import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import File from './File';
import './Projects.css'

const Projects = () =>{

    const categories = ["ReactJS", "React Native", "Unity", "Javascript", "Python3", "SQL", "C#",
                        "HTML5", "CSS", "Boostrap", "Flask",
                        "Machine Learning", "Deep Learning", "Computer Vision", "Data Visualization",
                        "Education", "Law"];

    const projects  = {
        "MotivCookies": {
            "Name": "MotivCookies",
            "Icon": "",
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
            "Icon": "",
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
            "Icon": "",
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
            "Icon": "",
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

        const targetValue = e.target.innerHTML;
        if(selected.includes(targetValue)){
            setSelected((prev) => prev.filter(item => item !== targetValue))
        }
        else{
            setSelected((prev) => [...prev, targetValue ])
        }
    };

    return (<Container  style = {{position: "absolute", top: 100, left: "50%", transform: "translate(-50%, 0)", width: "100%"}}>
        <Row style = {{display: "flex", justifyContent: "left", alignItems:"center", margin: 10}}>
            <span style = {{fontSize: "25px", }}> <b>Filter (OR): </b> </span> 
            {
                categories.map(cat => 
                <Button onClick={(e) => handleFilter(e)} style = {{margin: "5px", opacity: selected.length === 0? 1: !selected.includes(cat)? 0.5: 1}} variant="primary">
                    {cat}
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
                                <h4>Link to site</h4>
                                <a target='_blank' href = {item["LinkToSite"]}>{item["LinkToSite"]}</a>
                            </div>}
                            {item["GitRepository"] !== "" && <div>
                                <h4>Git Repository</h4>
                                <a target='_blank' href = {item["GitRepository"]}>{item["GitRepository"]}</a>
                            </div>}
                            <div>
                                <h4>Description</h4>
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