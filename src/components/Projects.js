import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () =>{

    const categories = [];

    const projects  = {
        "TurboMath": {
            "Name": "Turbo Math",
            "Date": "06-24-2023",
            "Image": "/Portfolio/img/TurboMath.png",
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/TurboMath",
            "LinkToSite": "https://turbomath-a0c94.web.app/",
            "Categories": ["Data", "Visualization", "React", "HTML5", "Javascript", "CSS", "Boostrap", "Education"],
            "Descriptions": ["Turbo Math is a responsive solo/multiplayer website game in React JS with Firebase Real-Time Database, helping students improve mental arithmetic and track their progress. It also has personalized, real-time data-driven visualizations using D3 JS to help students monitor and assess their learning progress."] 
        },
        "HateSpeechClassifier":{
            "Name": "Hate Speech Trinary Classification",
            "Date": "03-03-2023",
            "Image": "",
            "File": "/Portfolio/files/ClassifierReport.pdf",
            "GitRepository": "https://github.com/cs449w23/project-stop-sign",
            "LinkToSite": "",
            "Categories": ["Machine Learning", "Deep Learning"],
            "Descriptions": ["Used Pytorch to train several deep learning models, including Vanilla RNNs, LSTMs, GRUs, and Transformers, on Twitter tweets to classify whether a tweet is hateful, offensive, or neither.",
                            "Tuned the models\' parameters, such as Embeddings, Epochs, Dropout, Weight Decays, Weight Constraints, to reduce overfitting and compared the performance of the models using cross entropy and validation accuracy."]
        },
        "ResponseGenie":{
            "Name": "Response Genie",
            "Date": "01-03-2023",
            "Image": "/Portfolio/img/ResponseGenie.png",
            "File": "",
            "GitRepository": "https://github.com/dcheung0720/LCBH-Help-Desk",
            "LinkToSite": "",
            "Categories": ["Machine Learning", "React", "Javascript", "HTML5", "CSS", "Boostrap", "Law"],
            "Descriptions": ["Developed a complementary web application using ReactJS with MongoDB in the Help Scout platform to decrease turnaround response times for housing inquiries.",
                            "Built a backend API in Flask that fetches data from Help Scout and compute classification predictions.",
                            "Applied machine learning (KNN) classification to automatically classify the type of the inquiry and select a canned response that a paralegal can use to quickly reply to a tenant’s inquiry." ]
        },
        "LastStand":{
            "Name": "Last Stand",
            "Date": "01-03-2023",
            "Image": "",
            "File": "",
            "GitRepository": "https://github.com/sell488/Last-Stand",
            "LinkToSite": "",
            "Categories": ["Unity", "C#"],
            "Descriptions": ["A 3D FPS tower defense game using Unity."]
        },
        "ISeekNu":{
            "Name": "ISeekNu",
            "Date": "11-01-2022",
            "Image": "",
            "File": "",
            "GitRepository": "https://github.com/397-f22/iSeekNU",
            "LinkToSite": "",
            "Categories": ["React", "HTML5", "CSS"],
            "Descriptions": ["A large scale hide and seek game where the seeker has access to approximate locations of hiders."]
        },
        "Holler":{
            "Name": "Holler",
            "Date": "03-01-2022",
            "Image": "",
            "File": "",
            "GitRepository": "https://github.com/394-s22/Holler",
            "LinkToSite": "",
            "Categories": ["React", "HTML5", "CSS"],
            "Descriptions": ["A PDF parser for legal documents such as contracts such that users can easily see the important information, add dates to calendar, and make payments."]
        }
    }


    return (<Container style = {{position: "absolute", top: 100, left: 100, right: 100}}>
        <Row>
            <Col style = {{display: "flex", justifyContent:"center", flexWrap: "wrap"}}>{Object.values(projects).map(item => {
                return(
                    <Card md = {6} xs = {12} lg = {4} style={{ width: "40%", border: "3px solid white", backgroundColor: "black", margin: "10px" }}>
                        <Card.Title style = {{fontSize: "30px"}}>{item["Name"]}</Card.Title>
                        <Card.Title> 
                            <Card.Img   src= {item["Image"]}  style = {{padding: "10px", height: "auto", width: "50%"}} />
                        </Card.Title>
                        <Card.Body style = {{textAlign: "left"}}>
                            {item["LinkToSite"] !== "" && <div>
                                <h3>Link to site</h3>
                                <a target='_blank' href = {item["LinkToSite"]}>{item["LinkToSite"]}</a>
                            </div>}
                            {item["GitRepository"] !== "" && <div>
                                <h3>Git Repository</h3>
                                <a target='_blank' href = {item["GitRepository"]}>{item["GitRepository"]}</a>
                            </div>}
                            <div>
                                <h3>Description</h3>
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