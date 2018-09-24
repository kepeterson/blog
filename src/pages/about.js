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
      <h3>Education</h3>
      <div>
        <h4>Vanderbilt (2008 - 2012)</h4>
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
      <h3>Employment Experience</h3>
      <div>
        <h4>AnswerRocket (2015 - Current)</h4>
        <p>In May 2015, I joined AnswerRocket as the tenth employee and the fourth engineer, working on the startup's browser-based
        business intelligence application. Day-to-day, I primarily work with Python and Javascript with a sprinkling of Java.
        Major features I built for the product include the data visualization system, the Jupyter Notebook based third party extension
        system, and the embeddable JavaScript API.</p>
      </div>
      <div>
        <h4>Powerplan (2012 - 2015)</h4>
        <p>My first job after college was as a consultant implementing enterprise accounting software. After a year, I moved
        from the Professional Services department into Development where I primarily worked on building a new Lease Acounting product.
        My main responsibility was writing the internal calculation engine that built lease amortization schedules.</p>
      </div>
    </div>
  )
}
