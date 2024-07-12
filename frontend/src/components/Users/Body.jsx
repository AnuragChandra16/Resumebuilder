import React,{useState,useEffect,useRef} from 'react';
import ReactToPrint from 'react-to-print';
import './Body.css';
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import { MdOutlineFileDownload } from "react-icons/md";
import {ArrowDown} from 'react-feather';
import Editor from './Editor';
import Resumemain from './Resumemain';

const Body = () => {
  const colors = ["red", "#48bb78", "#0bc5ea", "#b272c4", "#ed8936","black"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  useEffect(()=>{
    console.log(resumeInformation);
  },[resumeInformation])
  return (
    <>
    <div className='container'>
      <div className='toolbar'>
        <div className='colors'>
          {colors.map((item) => (
            <div
              key={item}
              style={{ backgroundColor: item }}
              className={`color ${activeColor===item?"active":""}`}
              onClick={()=>setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return (<button >Download <ArrowDown></ArrowDown></button>);
          }}
          content={() =>resumeRef.current}
          documentTitle={resumeInformation[sections.basicInfo]?.detail?.name +" resume"|| 'resume'}

        />
        
      </div>
      <div className='main'>
        <Editor sections={sections} information={resumeInformation} setInformation={setResumeInformation}></Editor>
        <Resumemain ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}></Resumemain>
        </div>

    </div>
    
    </>
  );
};

export default Body;
