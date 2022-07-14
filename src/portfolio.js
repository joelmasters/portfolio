import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import showpacaImg from './img/showpaca.png';
import pdfRedlineImg from './img/pdf_redline_tool.png';
import workoutImg from './img/workout_builder.png';
import formImg from './img/form_app2.png';
import aboutMeText from './aboutMeText';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.joelmasters.com',
  title: 'JM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Joel Masters',
  role: 'outside-the-box Software Engineer',
  description: 
    <ReactMarkdown>
      I am a software engineer with a 10-year professional mechanical engineering background
      who brings fresh new ideas to life through code. 
      I draw on my experience in different industries and disciplines to create outside-the-box solutions. 
      I see challenges as opportunities. Let&apos;s gets stuff done.
    </ReactMarkdown>,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/joelmasters',
    github: 'https://github.com/joelmasters',
  },
}

const aboutMe = {
  summary: <ReactMarkdown remarkPlugins={[remarkGfm]} >{aboutMeText}</ReactMarkdown>,
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Showpaca',
    img: showpacaImg,
    description:
      `Showpaca is a streaming service comparison tool that I built to help people find the lowest cost ways to watch the channels they want. This is the largest project I've built and uses an A* algorithm in the backend which was super cool to learn about and implement.`,
    stack: ['JavaScript', 'Next.js', 'Node', 'Express', 'AWS EC2', 'AWS DynamoDB', 'Puppeteer'],
    livePreview: 'https://showpaca.com',
  },
  {
    name: 'Disc Golf Form Comparator',
    img: formImg,
    description:
      `This web app overlays a webcam container on top of a video of a professional for direct form comparison. I built this app to help me improve my form.`,
    stack: ['Nextjs', 'HTML', 'CSS', 'Machine Learning', 'Bootstrap'],
    livePreview: 'https://www.discgolfperformancelab.com/form-app',
  },
  {
    name: 'VroomPDF',
    img: pdfRedlineImg,
    description:
      'VroomPDF is an application for easily redlining mechanical PDF drawings with dimension lines and other symbols specific to mechanical drawings. I built this as a more efficient alternative to Adobe Acrobat or pen and paper as everything has gone digital.',
    stack: ['JavaScript', 'React', 'Electron', 'HTML', 'CSS'],
  },
  {
    name: 'Calisthenic Workout Builder',
    img: workoutImg,
    description:
      `This is a web application for creating calesthenic workouts that I built for a men's workout group. It helps plan workouts that are balanced by muscle group and formats text for copying and pasting into a GroupMe event.`,
    stack: ['React', 'Material-UI'],
    sourceCode: 'https://github.com/joelmasters/workout-builder',
    livePreview: 'https://joelmasters.github.io/workout-builder',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'Python',
  'HTML',
  'CSS',
  'React',
  'Material UI',
  'Git',
  'Jest',
  'Agile'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'joelmasters@gmail.com',
}

export { header, about, aboutMe, projects, skills, contact }
