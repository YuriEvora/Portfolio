import React from 'react';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../Timeline/styles.css';

export default function index(props) {
    return(
        <>            
            <h1>{props.title}</h1>

            <div className="row">

                <div className="timeline">
                    <VerticalTimeline layout="1-column">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--school"
                            date="2016 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<SchoolIcon />}
                            position="left"
                        >
                            <h3 className="vertical-timeline-element-title">Universidade do Mindelo</h3>
                            <h4 className="vertical-timeline-element-subtitle">Sao Vicente, CV</h4>
                            <p>
                                Degree in Computer Engineering.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--school"
                            date="2010 - 2016"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<SchoolIcon />}
                            position="left"
                        >
                            <h3 className="vertical-timeline-element-title">Liceu da Boa Vista</h3>
                            <h4 className="vertical-timeline-element-subtitle">Boa Vista, CV</h4>
                            <p>
                                High School, Science and Technology area.
                            </p>
                        </VerticalTimelineElement> 

                        <VerticalTimelineElement
                            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                            icon={<StarIcon />}
                        /> 
                        
                    </VerticalTimeline >
                </div>

                
                <div className="timeline">
                    <VerticalTimeline layout="1-column">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<WorkIcon />}
                            position="right"
                        >
                            <h3 className="vertical-timeline-element-title">BrainSystems-IT</h3>
                            <h4 className="vertical-timeline-element-subtitle">Sao Vicente, CV</h4>
                            <p>
                                Curricular Internship
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<WorkIcon />}
                            position="right"
                        >
                            <h3 className="vertical-timeline-element-title">Centro de Estagios Uni-Mindelo</h3>
                            <h4 className="vertical-timeline-element-subtitle">Sao Vicente, CV</h4>
                            <p>
                                Curricular Internship (October - December)
                            </p>
                        </VerticalTimelineElement> 

                        <VerticalTimelineElement
                            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                            icon={<StarIcon />}
                        /> 
                        
                    </VerticalTimeline>
                </div>

            </div>

        </>
    );
}