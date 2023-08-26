import React from 'react';

const Projects = () => {
  return (
    <section className='projects_container'>
      <h3>Projects</h3>
      <div className='projects'>
        <div className='card'>
          <div className='card__side card__side--front'>
            <div className='youtube_sync_project'></div>
            <h4 className='card_heading'>
              <span>Youtube SharePlay</span>
            </h4>
            <div className='techonologies_section'>
              <span>React | Redux</span>
              <span>Node.js</span>
              <span>Web Sockets</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
          <div className='card__side card__side--back'></div>
        </div>
        <div className='card'>
          <div className='card__side card__side--front'>FRONT</div>
          <div className='card__side card__side--back'>BACK</div>
        </div>
        <div className='card'>
          <div className='card__side card__side--front'>FRONT</div>
          <div className='card__side card__side--back'>BACK</div>
        </div>
        {/* <div className='card'>
          <div className='card__side card__side--front'>FRONT</div>
          <div className='card__side card__side--back'>BACK</div>
        </div>
        <div className='card'>
          <div className='card__side card__side--front'>FRONT</div>
          <div className='card__side card__side--back'>BACK</div>
        </div>
        <div className='card'>
          <div className='card__side card__side--front'>FRONT</div>
          <div className='card__side card__side--back'>BACK</div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
