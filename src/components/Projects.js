import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import File from './File';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faList, faUpRightFromSquare, faCode, faFlask, faGear, faGears, faEyeLowVision, faChartSimple, faSchool, faScaleBalanced, faStar, faPaintbrush} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact, faUnity, faJs, faCss3, faHtml5, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons';
import ImageCarousel from './ImageCarousel';

const Projects = () =>{

    const categories = [
                        {"name": "Favorite", "icon": faStar, "color": "#fff700"},
                        {"name": "ReactJS", "icon": faReact},
                        {"name": "React Native", "icon": faReact}, 
                        {"name": "Unity", "icon": faUnity}, 
                        {"name": "Javascript", "icon": faJs},
                        {"name": "Python3", "icon": faPython}, 
                        {"name": "SQL", "icon": faDatabase}, 
                        {"name": "C#", "icon": faCode}, 
                        {"name": "HTML5", "icon":  faHtml5}, 
                        {"name": "CSS", "icon": faCss3}, 
                        {"name": "Bootstrap", "icon": faBootstrap}, 
                        {"name": "Flask", "icon": faFlask},
                        {"name": "Data Visualization", "icon": faChartSimple},  
                        {"name": "Machine Learning", "icon": faGear}, 
                        {"name": "Deep Learning", "icon": faGears}, 
                        {"name": "Computer Vision", "icon": faEyeLowVision}, 
                        {"name": "Education", "icon": faSchool}, 
                        {"name": "Law", "icon": faScaleBalanced}, 
                        ]

    const projects  = {

        "UFC Meta": {
            "Name": "UFC Meta",
            "Icon": "/Portfolio/img/UFC Meta/logo.png",
            "Date": "5-14-2024",
            "Images": ["/Portfolio/img/UFC Meta/1.png"],
            "File": "",
            "GitRepository": "",
            "LinkToSite": "https://ufc-meta.web.app/",
            "Categories": ["ReactJS", "Javascript", "HTML5", "Machine Learning", "Deep Learning", "Favorite", "Python3"],
            "Descriptions": ["The React App uses a Deep Learning model to predict the outcomes of the upcoming UFC fights using Tensorflow JS.",
                             "Conduct proportions statistical tests on fighter's historical Data."
                            ]
        },

        "Chicago Crime Rate Analysis": {
            "Name": "Chi. Crime Analysis",
            "Icon": "/Portfolio/img/Crash Fatality Analysis/Analysis.jpg",
            "Date": "4-14-2024",
            "Images": ["/Portfolio/img/Chicago Crime/1.png", "/Portfolio/img/Chicago Crime/2.png","/Portfolio/img/Chicago Crime/3.png"],
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/Quantum-Queries",
            "LinkToSite": "https://chicagocrimeanalysis-a24e2.web.app/",
            "Categories": ["ReactJS", "Javascript", "HTML5", "Data Visualization", "Favorite", "Python3", "Data Visualization"],
            "Descriptions": ["My Team and I analyzed the crimes in Chicago from 2017 - 2023 aiming to answer the question of whether Chicago is becoming more dangerous."
                            ,"The analysis and visualizations were done using Python libraries, React d3, and React Leaflet."
                            ]
        }, 

        "Crash Fatality Analysis": {
            "Name": "Crash Fatality Analysis",
            "Icon": "/Portfolio/img/Crash Fatality Analysis/Analysis.jpg",
            "Date": "2-14-2024",
            "Images": ["/Portfolio/img/Crash Fatality Analysis/Fatality_Per_Capita.png", "/Portfolio/img/Crash Fatality Analysis/Pairwise.png", "/Portfolio/img/Crash Fatality Analysis/Logistic Regression.png"],
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/Data-Wizards-1",
            "LinkToSite": "",
            "Categories": ["Data Visualization", "Favorite", "Python3"],
            "Descriptions": ["My Team and I analyzed the fatal crashes using the data from the National Highway Traffic Association's API. We performed exploratory data analysis and visualizations using analytic tools like Python, pandas, hvplots, and matplotlib.",
                                "Our goal is to discern how certain factors correlate with fatalities, identifying potential risk factors to inform strategies for reducing future fatalities."
                            ] 
        },
        "OPGG": {
            "Name": "OP.GG Dupe (WIP)",
            "Icon": "/Portfolio/img/OPGG/opgg1.png",
            "Date": "12-24-2023",
            "Images": [ "/Portfolio/img/OPGG/opgg3.png", "/Portfolio/img/OPGG/opgg2.png"],
            "File": "",
            "GitRepository": "https://github.com/bli698/op.gg_dupe",
            "LinkToSite": "",
            "Categories": [ "ReactJS","HTML5", "Javascript", "CSS", "Bootstrap", "Data Visualization", "Favorite"],
            "Descriptions": ["OPGG Dupe is remake of the popular website OP.GG where League of Legends players reference it for Champion builds, game statistics, game history, etc. This application is made using ReactJS and Firebase using data from the RIOT API."] 
        },
        "HweiTrainer": {
            "Name": "Hwei Trainer",
            "Icon": "/Portfolio/img/Hwei/Hwei3.png",
            "Date": "12-01-2023",
            "Images": ["/Portfolio/img/Hwei/Hwei1.png", "/Portfolio/img/Hwei/Hwei2.png"],
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/Hwei-Trainer",
            "LinkToSite": "https://dcheung0720.github.io/Hwei-Trainer/",
            "Categories": [ "ReactJS","HTML5", "Javascript", "CSS", "Bootstrap", "Local Storage"],
            "Descriptions": ["Hwei Trainer is a quick and straightforward online game that provides players with an opportunity to enhance their skills with the versatile champion Hwei from League of Legends."] 
        },
        "MotivCookies": {
            "Name": "MotivCookies",
            "Icon": "/Portfolio/img/Cookies/cookies.png",
            "Date": "10-24-2023",
            "Images": [],
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/MotivCookies",
            "LinkToSite": "",
            "Categories": ["Data Visualization", "React Native", "Javascript", "SQL", "Flask"],
            "Descriptions": ["MotivCookies is a mobile app created with React Native that generates a motivational quote using Tensorflow's Universal Senetence Encoder and suggests productive activities to the user"] 
        },
        "TurboMath": {
            "Name": "Turbo Math",
            "Icon": "/Portfolio/img/TurboMath/Turbo.png",
            "Date": "06-24-2023",
            "Images": ["/Portfolio/img/TurboMath/TurboMath.png", "/Portfolio/img/TurboMath/TurboMath6.png", "/Portfolio/img/TurboMath/TurboMath3.png", "/Portfolio/img/TurboMath/TurboMath2.png","/Portfolio/img/TurboMath/TurboMath4.png","/Portfolio/img/TurboMath/TurboMath5.png"],
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/TurboMath",
            "LinkToSite": "https://turbomath-a0c94.web.app/",
            "Categories": ["Data Visualization", "ReactJS", "HTML5", "Javascript", "CSS", "Bootstrap", "Education", "Favorite"],
            "Descriptions": ["Turbo Math is a responsive solo/multiplayer website game in React JS with Firebase Real-Time Database, helping students improve mental arithmetic and track their progress. It also has personalized, real-time data-driven visualizations using D3 JS to help students monitor and assess their learning progress."] 
        },
        "SpaceInvaders":{
            "Name": "Clumsy Invaders",
            "Icon": "/Portfolio/img/SI/SI.png",
            "Date": "06-01-2023",
            "Images": ["/Portfolio/img/SI/SI1.png", "/Portfolio/img/SI/SI2.png", "/Portfolio/img/SI/SI3.png"],
            "File": "",
            "GitRepository": "",
            "LinkToSite": "",
            "Categories": ["Unity", "C#"],
            "Descriptions": ["Remixing on Space Invaders where the Space Invaders (Humans in space ships) are invading the luxurious Clumsy Ghost Town and the Clumsy Ghosts (Fireball, Reaper, etc.) are determined to defend it.",
            "Unleash ghostly abilities and rewrite arcade history in Clumsy Ghosts: Galactic Invasion, the ultimate fusion of Space Invaders and adorable yet tricky specters!"]
        },
        "HateSpeechClassifier":{
            "Name": "Hate Speech Classifier",
            "Icon": "/Portfolio/img/Hate Speech Classifier/twitter.png",
            "Date": "03-03-2023",
            "Images": ["/Portfolio/img/Hate Speech Classifier/classification1.png","/Portfolio/img/Hate Speech Classifier/classification2.png","/Portfolio/img/Hate Speech Classifier/classification3.png","/Portfolio/img/classification4.png",],
            "File": "/Portfolio/files/ClassifierReport.pdf",
            "GitRepository": "https://github.com/cs449w23/project-stop-sign",
            "LinkToSite": "",
            "Categories": ["Machine Learning", "Deep Learning", "Python3"],
            "Descriptions": ["Used Pytorch to train several deep learning models, including Vanilla RNNs, LSTMs, GRUs, and Transformers, on Twitter tweets to classify whether a tweet is hateful, offensive, or neither.",
                            "Tuned the models\' parameters, such as Embeddings, Epochs, Dropout, Weight Decays, Weight Constraints, to reduce overfitting and compared the performance of the models using cross entropy and validation accuracy."]
        },
        "ResponseGenie":{
            "Name": "Response Genie",
            "Icon": "/Portfolio/img/Response Genie/genie.png",
            "Date": "01-03-2023",
            "Images": ["/Portfolio/img/Response Genie/ResponseGenie.png"],
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/LCBH-Help-Desk",
            "LinkToSite": "",
            "Categories": ["Machine Learning", "ReactJS", "Javascript", "HTML5", "CSS", "Bootstrap", "Law", "Python3", "Flask", "Favorite"],
            "Descriptions": ["Developed a complementary web application using ReactJS with MongoDB in the Help Scout platform to decrease turnaround response times for housing inquiries.",
                            "Built a backend API in Flask that fetches data from Help Scout and compute classification predictions.",
                            "Applied machine learning (KNN) classification to automatically classify the type of the inquiry and select a canned response that a paralegal can use to quickly reply to a tenant’s inquiry." ]
        },
        "LastStand":{
            "Name": "Last Stand",
            "Icon": "",
            "Date": "01-03-2023",
            "Images": ["/Portfolio/img/Last Stand/last_stand.png", "/Portfolio/img/Last Stand/last_stand2.png"],
            "File": "",
            "GitRepository": "https://github.com/sell488/Last-Stand",
            "LinkToSite": "",
            "Categories": ["Unity", "C#"],
            "Descriptions": ["A 3D FPS tower defense game using Unity."]
        },
        "Gesic":{
            "Name": "Gesic",
            "Icon": "/Portfolio/img/Gesic/music.png",
            "Date": "11-25-2023",
            "Images": ["/Portfolio/img/Gesic/Gesic.png", "/Portfolio/img/Gesic/Gesic2.png", "/Portfolio/img/Gesic/Gesic3.png"],
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
            "Images": [],
            "File": "",
            "GitRepository": "https://github.com/397-f22/iSeekNU",
            "LinkToSite": "",
            "Categories": ["ReactJS", "Javascript", "HTML5", "CSS"],
            "Descriptions": ["A large scale hide and seek game where the seeker has access to approximate locations of hiders."]
        },
        "StayHydrated":{
            "Name": "StayHydrated",
            "Icon": "/Portfolio/img/Hydration/hydrated.png",
            "Date": "10-01-2022",
            "Images": ["/Portfolio/img/Hydration/hydration.png",],
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
            "Images": [],
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
        const match = e.currentTarget.innerHTML.match(regex);
        if(selected.includes(match[0].trim())){
            setSelected((prev) => prev.filter(item => item !== match[0].trim()))
        }
        else{
            setSelected((prev) => [...prev, match[0].trim()])
        }
    };

    return (<Container  style = {{position: "absolute", top: 100, left: "50%", transform: "translate(-50%, 0)", width: "1900px"}}>
        <Row style = {{display: "flex", justifyContent: "left", alignItems:"center", margin: 10}}>
            <span style = {{fontSize: "25px", }}> <b>Filter (AND): </b> </span> 
            {
                categories.map(cat => 
                <Button onClick={(e) => handleFilter(e)} style = {{ margin: "5px", opacity: selected.length === 0? 1: !selected.includes(cat["name"])? 0.5: 1}} variant="primary">             
                        {cat["name"]} <FontAwesomeIcon  icon={cat["icon"]} color = {cat["color"]? cat["color"]: ""}/>
                </Button>)
            }
        </Row>
        <Row>
            <Col style = {{display: "flex", justifyContent:"center", flexWrap: "wrap", width: "100%"}}>{
                Object.values(projects).filter(
                    item => selected.every(
                        category => item["Categories"].includes(category)
                    )
                ).map(item => {
                return(
                    <Card md = {12} xs = {12} lg = {12} style={{width: "500px",height: "500px", border: "3px solid white", borderRadius: "5%", backgroundColor: "black", margin: "10px", overflowY: "scroll"}}>
                        <h1 style = {{marginTop: "10px", display: "flex", justifyContent: "center"}}>
                            {item["Name"]} 
                            &nbsp;
                            {item["Icon"] !== "" && <img src = {item["Icon"]} style = {{borderRadius: "50%", width: "50px", height: "50px"}}></img>}
                        </h1>
                        <Card.Title>
                            {item["Images"].length === 1? 
                                <Card.Img  src= {item["Images"][0]}  style = {{padding: "10px", height: "auto", width: "100%"}} /> 
                            : item["Images"].length > 1?  <ImageCarousel images = {item["Images"]}></ImageCarousel>: <></>} 
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
                                    {item.Descriptions.map(x => <li style = {{fontSize: "15px", paddingBottom: "15px"}}>
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