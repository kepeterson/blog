import React from 'react'
import Layout from '../components/layout'
import headshot from '../images/headshot-square.jpg'

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-grid">
        <HeadShot />
        <About/>
        <Education />
        <Work />
      </div>
    </Layout>
  )
}

export default AboutPage


const About = props => {
  const text = `I am solution seeker passionate about making things, about turning loose business ideas into fully-featured software that is a joy to use. I am comfortable with both backend technologies and client applications, with a particular penchant for data visualization. The languages and technologies I use most frequently include Javascript, Python, Java, HTML/CSS, and SQL. I am well versed in React and its ecosystem and I like to use Git for source control management. I have a strong mathematics background and a good understanding of modern data science and machine learning techniques.`
  return <p className='about-text'>{text}</p>
}

const HeadShot = props => {
  return <img className="headshot" src={headshot} alt="headshot"/>
}

const Education = () => {
  return (
    <div className="education" >
      <div>
        <span>Vanderbilt</span>
        <p>
          I double-majored in Mathematics and Physics in the College of Arts and Sciences and graduated cum laude.
          While attending, I interned at the Istituto Nazionale di Fisica Nucleare in Paudua, Italy writing software to interpret
          particle collider data. The prior summer, I interned at Argonne National Laboratory in Chicago, Illinois working with
          and interpretting data from the lab's atomic layer deposition system.
        </p>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <div className="work">
      <div>
        <span>AnswerRocket</span>
        <p>I built some things.</p>
      </div>
      <div>
        <span>Powerplan</span>
        <p>My first job after college was as a consultant implementing enterprise accounting software. After a year, I transferred
        out of the Professional Services department and into Development where I worked full-time on extending PowerPlan's core product.</p>
      </div>
    </div>
  )
}
