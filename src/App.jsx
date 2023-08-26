import './App.scss';
import Header from './Header';
import twitterIcon from './assets/images/icons8-twitter.svg';
import githubIcon from './assets/images/icons8-github.svg';
import linkedinIcon from './assets/images/icons8-linkedin.svg';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <footer className='footer'>
        <div className='footer__socials'>
          <a href='https://github.com/vinaylamba9' target='__blank'>
            <img src={githubIcon} alt='Github' />{' '}
          </a>
          <a href='https://linkedin.com/in/vinaylamba9' target='__blank'>
            <img src={linkedinIcon} alt='LinkedIn' />{' '}
          </a>
          <a href='https://twitter.com/vinay22k' target='__blank'>
            <img src={twitterIcon} alt='Twitter' />{' '}
          </a>
        </div>
        <div className='footer__author'>Site by: Vinay Kumar | 2023</div>
      </footer>
    </div>
  );
}

export default App;
