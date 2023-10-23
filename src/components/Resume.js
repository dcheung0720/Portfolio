const Resume = ({handleModalView}) =>{
    return <div style = {{position: "absolute", top: 0, left: 0, right: 0,bottom: 0, 
    width: "100vw", height: "99vh", zIndex: 100, backgroundColor: "rgba(255,255,255,0.3)"}}
    onClick={handleModalView}>
         <embed style = {{width: "70vw", marginTop: "10px"}} scale="tofit" src="/Portfolio/files/resume.pdf" type="application/pdf" width="100%" height="100%"></embed>
    </div>
};


export default Resume;