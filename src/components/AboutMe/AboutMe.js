import { aboutMe } from '../../portfolio'
import './AboutMe.css';

const AboutMe = () => {
  const { summary } = aboutMe;

  return (
    <section id="about-me" className='about_me'>
      <h2 className='section__title'>About Me</h2>
      {summary}
    </section>
  )
}

export default AboutMe;