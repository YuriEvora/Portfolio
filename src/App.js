import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';

import SideBar from '../src/components/sidebar';
import Home from '../src/pages/Home';
import AboutMe from '../src/pages/AboutMe';
import Projects from '../src/pages/Projects';
import Timeline from '../src/pages/Timeline';
import Contact from '../src/pages/Contact';

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      title: 'Yuri Evora',
      sidebarLinks: [ 
        { id: 1, title: "Home", path: '/' },
        { id: 2, title: "About Me", path: '/AboutMe' },
        { id: 3, title: "Projets", path: '/Projets' },
        { id: 4, title: "Timeline", path: '/Timeline' },
        { id: 5, title: "Contact", path: '/Contact' }
      ],
      home: {
        preTitle: 'Hello, I\'m',
        title: 'Yuri Evora',
        subTitle: 'An enthusiastic and passionate IT student.'
      },
      aboutMe: {
        title: 'About Me',
        subTitle: 'Interested Fields',
        description: 'An enthusiastic and passionate IT student at UNIVERSIDADE DO MINDELO. I enjoy to explore new tech\'s and I like to work on projects and teams, because that\'s where you can learn as a professional and as a person. Now I am doing a curricular internship at "BrainSystems-IT", where I work in several areas that I am enjoying a lot.'
      },
      projects: {
        title: 'Projects',
        description: 'I have two different hosting tools to version control my projects. If you want to have a look at my privates projects (hosted on Bitbucket), please feel free to contact me. In addition, I’ve done others in the field of network computers using Cisco Packet Tracer.'
      },
      timeline: {
        title: 'Timeline'
      },
      contact: {
        title: 'Contact',
        description: 'If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the fields below or send an email and let\'s talk.'
      }      
    }
  }

  render() {
     return (
    <>
      <div className="container">
        <div className="sidebar">
            
          <SideBar />

        </div>

        <div className="body">

          <Route path='/' exact render= { ()=> <Home pretitle={this.state.home.preTitle} title={this.state.home.title} subTitle={this.state.home.subTitle}/>}/>
          <Route path='/AboutMe' render= { ()=> <AboutMe title={this.state.aboutMe.title} description={this.state.aboutMe.description} subTitle={this.state.aboutMe.subTitle}/>}/>
          <Route path='/Projects' render= { ()=> <Projects title={this.state.projects.title} description={this.state.projects.description}/>}/>
          <Route path='/Timeline' render= { ()=> <Timeline title={this.state.timeline.title}/>}/>
          <Route path='/Contact' render= { ()=> <Contact title={this.state.contact.title} description={this.state.contact.description}/>}/>
          
        </div>
        
      </div>
    </>
  );
  }
 
}

export default App;
