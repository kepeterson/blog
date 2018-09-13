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
        <p>I learned math and physics.</p>
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
        <p>Built something else.</p>
      </div>
    </div>
  )
}
