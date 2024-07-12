/*import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";
import './Resumemain.css'
const Resumemain = forwardRef((props,ref) => {
    const information=props.information;
    const sections=props.sections;
    const [selectedTemplate, setSelectedTemplate] = useState('template1');
    const containerRef=useRef();
    const [columns,setColumns]=useState([[],[]]);
    const [source, setSource] = useState("");
  const [target, seTarget] = useState("");
    const info = {
        workExp: information[sections.workExp],
        project: information[sections.project],
        achievement: information[sections.achievement],
        education: information[sections.education],
        basicInfo: information[sections.basicInfo],
        summary: information[sections.summary],
        other: information[sections.other],
      };
      const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
        const today = new Date();
        // Check if the date is today's date
        if (date.toDateString() === today.toDateString()) return "Present";
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };
    
    
    
    const sectionDiv={
        [sections.workExp]:(
            <div 
            key={"workexp"}
            draggable
            onDragOver={() => seTarget(info.workExp?.id)}
            onDragEnd={() => setSource(info.workExp?.id)}
            className={`section ${info.workExp?.sectionTitle?"":"hidden"}`}> 


        <div className="sectionTitle">{info.workExp.sectionTitle}</div>
        <div className="content">
          {info.workExp?.details?.map((item) => (
            <div className="item" key={item.title}>
              {item.title ? (
                <p className="title">{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className="subTitle">{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className="link" href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className="date">
                  <Calendar /> {getFormattedDate(item.startDate)}- {" "}
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className="date">
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className="points">
                  {item.points?.map((elem, index) => (
                    <li className="point" key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
        </div>
        

        ),
        [sections.project]:( <div 
            key={"project"}
            draggable
            onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`section ${info.project?.sectionTitle?"":"hidden"}`}>

            <div className="sectionTitle">{info.project.sectionTitle}</div>
            <div className="content">
          {info.project?.details?.map((item) => (
            <div className="item">
              {item.title ? (
                <p className="title">{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className="link" href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className="link" href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className="overview">{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className="points">
                  {item.points?.map((elem, index) => (
                    <li className="point" key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
        </div>),
        [sections.education]:(
            <div 
            key={"education"}
            draggable
            onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
            className={`section ${info.education?.sectionTitle?"":"hidden"}`}>
    
            <div className="sectionTitle">{info.education.sectionTitle}</div>
            <div className="content">
          {info.education?.details?.map((item) => (
            <div className="item">
              {item.title ? (
                <p className="title">{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className="subTitle">{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className="date">
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        </div>
        ),
        [sections.achievement]:(
            <div 
            key={"achievement"}
            draggable
            onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
            className={`section ${info.achievement?.sectionTitle?"":"hidden"}`}>

        <div className="sectionTitle">{info.achievement.sectionTitle}</div>
        <div className="content">
          {info.achievement?.points?.length > 0 ? (
            <ul className="numbered">
              {info.achievement?.points?.map((elem, index) => (
                <li className="point" key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
        </div>
        ),
        [sections.summary]:(
            <div 
            key={"summary"}
        draggable
        onDragOver={() => seTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
            className={`section ${info.summary?.sectionTitle?"":"hidden"}`}>

        <div className="sectionTitle">{info.summary.sectionTitle}</div>
        <div className="content">
          <p className="overview">{info.summary?.detail}</p>
        </div>
    </div>
        ),
        [sections.other]:(
            <div 
            key={"other"}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
            className={`section ${info.other?.sectionTitle?"":"hidden"}`}>

        <div className="sectionTitle">{info.other.sectionTitle}</div>
        <div className="content">
          <p className="overview">{info?.other?.detail}</p>
        </div>
    </div>
        )
    }
    
    const swapSourceTarget = (source, target) => {
        if (!source || !target) return;
        const tempColumns = [[...columns[0]], [...columns[1]]];
    
        let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
        let sourceColumnIndex = 0;
        if (sourceRowIndex < 0) {
          sourceColumnIndex = 1;
          sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
        }
    
        let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
        let targetColumnIndex = 0;
        if (targetRowIndex < 0) {
          targetColumnIndex = 1;
          targetRowIndex = tempColumns[1].findIndex((item) => item === target);
        }
    
        const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
        tempColumns[sourceColumnIndex][sourceRowIndex] =
          tempColumns[targetColumnIndex][targetRowIndex];
    
        tempColumns[targetColumnIndex][targetRowIndex] = tempSource;
    
        setColumns(tempColumns);
      }; 
  
    useEffect(()=>{
        setColumns([
            [sections.project,sections.education,sections.summary],
            [sections.workExp,sections.achievement,sections.other],
            
        ]);
    },[]);
    useEffect(() => {
        swapSourceTarget(source, target);
      }, [source]);
      useEffect(() => {
        const container = containerRef.current;
        if (!props.activeColor || !container) return;
    
        container.style.setProperty("--color", props.activeColor);
      }, [props.activeColor]);
      const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
        documentTitle: info.basicInfo?.detail?.name || 'resume',
      });
      const handleTemplateSelect = (template) => {
        setSelectedTemplate(template);
      };
  return (
    <div ref={ref}>
       <div className="template-buttons">
        <button 
          className={selectedTemplate === 'template1' ? 'active' : ''} 
          onClick={() => handleTemplateSelect('template1')}
        >
          Template 1
        </button>
        <button 
          className={selectedTemplate === 'template2' ? 'active' : ''} 
          onClick={() => handleTemplateSelect('template2')}
        >
          Template 2
        </button>
        <button 
          className={selectedTemplate === 'template3' ? 'active' : ''} 
          onClick={() => handleTemplateSelect('template3')}
        >
          Template 3
        </button>
      </div>
    <div ref={containerRef} className='container3'>
        <div className="header3">
        <p className="heading">{info.basicInfo?.detail?.name || "Name"}</p>
            <p className="subHeading">{info.basicInfo?.detail?.title || "Title"}</p>
            <div className="links">
              {info.basicInfo?.detail?.email ? (
                <a className="link">
                  <AtSign /> {info.basicInfo?.detail?.email}
                </a>
              ) : (
                <a className="link">
                  <AtSign /> Email
                </a>
              )}
              {info.basicInfo?.detail?.phone ? (
                <a className="link">
                  <Phone /> {info.basicInfo?.detail?.phone}
                </a>
              ) : (
                <a className="link">
                  <Phone /> Phone
                </a>
              )}
              {info.basicInfo?.detail?.linkedin ? (
                <a className="link">
                  <Linkedin /> {info.basicInfo?.detail?.linkedin}
                </a>
              ) : (
                <a className="link">
                  <Linkedin /> LinkedIn
                </a>
              )}
              {info.basicInfo?.detail?.github ? (
                <a className="link">
                  <GitHub /> {info.basicInfo?.detail?.github}
                </a>
              ) : (
                <a className="link">
                  <GitHub /> GitHub
                </a>
              )}
            </div>
                
               

        </div>
        <div className="main2">
            <div className="col1">{columns[0].map(item=>sectionDiv[item])}</div>
            <div className="col2">{columns[1].map(item=>sectionDiv[item])}</div>
        </div>
    </div>
    </div>
  )
});

export default Resumemain*/


import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";
import './Resumemain.css';

const Resumemain = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const containerRef = useRef();
  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const today = new Date();
    if (date.toDateString() === today.toDateString()) return "Present";
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div 
        key={"workexp"}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`section ${info.workExp?.sectionTitle ? "" : "hidden"}`}>
        <div className="sectionTitle">{info.workExp.sectionTitle}</div>
        <div className="content">
          {info.workExp?.details?.map((item) => (
            <div className="item" key={item.title}>
              {item.title ? <p className="title">{item.title}</p> : <span />}
              {item.companyName ? <p className="subTitle">{item.companyName}</p> : <span />}
              {item.certificationLink ? (
                <a className="link" href={item.certificationLink}>
                  <Paperclip /> {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className="date">
                  <Calendar /> {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className="date">
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className="points">
                  {item.points?.map((elem, index) => (
                    <li className="point" key={elem + index}>{elem}</li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div 
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`section ${info.project?.sectionTitle ? "" : "hidden"}`}>
        <div className="sectionTitle">{info.project.sectionTitle}</div>
        <div className="content">
          {info.project?.details?.map((item) => (
            <div className="item">
              {item.title ? <p className="title">{item.title}</p> : <span />}
              {item.link ? (
                <a className="link" href={item.link}>
                  <Paperclip /> {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className="link" href={item.github}>
                  <GitHub /> {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? <p className="overview">{item.overview}</p> : <span />}
              {item.points?.length > 0 ? (
                <ul className="points">
                  {item.points?.map((elem, index) => (
                    <li className="point" key={elem + index}>{elem}</li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div 
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`section ${info.education?.sectionTitle ? "" : "hidden"}`}>
        <div className="sectionTitle">{info.education.sectionTitle}</div>
        <div className="content">
          {info.education?.details?.map((item) => (
            <div className="item">
              {item.title ? <p className="title">{item.title}</p> : <span />}
              {item.college ? <p className="subTitle">{item.college}</p> : <span />}
              {item.startDate && item.endDate ? (
                <div className="date">
                  <Calendar /> {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div 
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`section ${info.achievement?.sectionTitle ? "" : "hidden"}`}>
        <div className="sectionTitle">{info.achievement.sectionTitle}</div>
        <div className="content">
          {info.achievement?.points?.length > 0 ? (
            <ul className="numbered">
              {info.achievement?.points?.map((elem, index) => (
                <li className="point" key={elem + index}>{elem}</li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div 
        key={"summary"}
        draggable
        onDragOver={() => seTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`section ${info.summary?.sectionTitle ? "" : "hidden"}`}>
        <div className="sectionTitle">{info.summary.sectionTitle}</div>
        <div className="content">
          <p className="overview">{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div 
        key={"other"}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`section ${info.other?.sectionTitle ? "" : "hidden"}`}>
        <div className="sectionTitle">{info.other.sectionTitle}</div>
        <div className="content">
          <p className="overview">{info?.other?.detail}</p>
        </div>
      </div>
    )
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  }; 

  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);
  useEffect(() => {
    const container = containerRef.current;
    console.log("Active Color:", props.activeColor); // Log the active color
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
}, [props.activeColor]);


  return (
    <>
    <div className="template-buttons">
          <button className={selectedTemplate === 'template1' ? 'active' : ''} onClick={() => setSelectedTemplate('template1')}>Template 1</button>
          <button className={selectedTemplate === 'template2' ? 'active' : ''} onClick={() => setSelectedTemplate('template2')}>Template 2</button>
          <button className={selectedTemplate === 'template3' ? 'active' : ''} onClick={() => setSelectedTemplate('template3')}>Template 3</button>
        </div>
    <div ref={ref}>
      <div className="container3">
        
        <div ref={containerRef} className={`container3 ${selectedTemplate}`}>
          {selectedTemplate === 'template1' && (
            <div className="header3">
              <p className="heading1">{info.basicInfo?.detail?.name || "Name"}</p>
              <p className="subHeading1">{info.basicInfo?.detail?.title || "Title"}</p>
              <div className="links">
                {info.basicInfo?.detail?.email ? (
                  <a className="link">
                    <AtSign /> {info.basicInfo?.detail?.email}
                  </a>
                ) : (
                  <a className="link">
                    <AtSign /> Email
                  </a>
                )}
                {info.basicInfo?.detail?.phone ? (
                  <a className="link">
                    <Phone /> {info.basicInfo?.detail?.phone}
                  </a>
                ) : (
                  <a className="link">
                    <Phone /> Phone
                  </a>
                )}
                {info.basicInfo?.detail?.linkedin ? (
                  <a className="link">
                    <Linkedin /> {info.basicInfo?.detail?.linkedin}
                  </a>
                ) : (
                  <a className="link">
                    <Linkedin /> LinkedIn
                  </a>
                )}
                {info.basicInfo?.detail?.github ? (
                  <a className="link">
                    <GitHub /> {info.basicInfo?.detail?.github}
                  </a>
                ) : (
                  <a className="link">
                    <GitHub /> GitHub
                  </a>
                )}
                 <div className="main2">
            <div className="col1">{columns[0].map(item=>sectionDiv[item])}</div>
            <div className="col2">{columns[1].map(item=>sectionDiv[item])}</div>
        </div>
              </div>
            </div>
          )}

        {selectedTemplate === 'template2' && (
            <div className="header4">
              <div className="back">
              <p className="heading2">{info.basicInfo?.detail?.name || "Name"}</p>
              <p className="subHeading2">{info.basicInfo?.detail?.title || "Title"}</p>
              <div className="links">
                {info.basicInfo?.detail?.email ? (
                  <a className="link">
                    <AtSign /> {info.basicInfo?.detail?.email}
                  </a>
                ) : (
                  <a className="link">
                    <AtSign /> Email
                  </a>
                )}
                {info.basicInfo?.detail?.phone ? (
                  <a className="link">
                    <Phone /> {info.basicInfo?.detail?.phone}
                  </a>
                ) : (
                  <a className="link">
                    <Phone /> Phone
                  </a>
                )}
                {info.basicInfo?.detail?.linkedin ? (
                  <a className="link">
                    <Linkedin /> {info.basicInfo?.detail?.linkedin}
                  </a>
                ) : (
                  <a className="link">
                    <Linkedin /> LinkedIn
                  </a>
                )}
                {info.basicInfo?.detail?.github ? (
                  <a className="link">
                    <GitHub /> {info.basicInfo?.detail?.github}
                  </a>
                ) : (
                  <a className="link">
                    <GitHub /> GitHub
                  </a>
                )}
                </div>
                </div>
                 <div className="main3">
            <div className="col3">{columns[0].map(item=>sectionDiv[item])}</div>
            <div className="col4">{columns[1].map(item=>sectionDiv[item])}</div>
        </div>
              
            </div>
          )}

{selectedTemplate === 'template3' && (
            <div className="header5">
              <div className="division">
                <div className="name-title">
              <p className="heading3">{info.basicInfo?.detail?.name || "Name"}</p>
              <p className="subHeading3">{info.basicInfo?.detail?.title || "Title"}</p>
              </div>
              <div className="links">
                {info.basicInfo?.detail?.email ? (
                  <a className="link">
                    <AtSign /> {info.basicInfo?.detail?.email}
                  </a>
                ) : (
                  <a className="link">
                    <AtSign /> Email
                  </a>
                )}
                {info.basicInfo?.detail?.phone ? (
                  <a className="link">
                    <Phone /> {info.basicInfo?.detail?.phone}
                  </a>
                ) : (
                  <a className="link">
                    <Phone /> Phone
                  </a>
                )}
                {info.basicInfo?.detail?.linkedin ? (
                  <a className="link">
                    <Linkedin /> {info.basicInfo?.detail?.linkedin}
                  </a>
                ) : (
                  <a className="link">
                    <Linkedin /> LinkedIn
                  </a>
                )}
                {info.basicInfo?.detail?.github ? (
                  <a className="link">
                    <GitHub /> {info.basicInfo?.detail?.github}
                  </a>
                ) : (
                  <a className="link">
                    <GitHub /> GitHub
                  </a>
                )}
                </div>
                </div>
                <div className="sections-column">
      {columns[0].map(item => sectionDiv[item])}
      {columns[1].map(item => sectionDiv[item])}
    </div>
        
              
            </div>
          )}
          
         
        </div>
      </div>
    </div>
    </>
  );
});

export default Resumemain;
