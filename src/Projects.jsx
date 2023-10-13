import React from 'react';
import Button from './Button';

const Projects = () => {
  return (
    <section id='projectSection' className='projects_container'>
      <h3>Projects</h3>
      <div className='projects'>
        <div className='card'>
          <div className='card__side card__side--front'>
            <div className='youtube_sync_project card-cover--1'></div>
            <h4 className='card_heading card-front--1'>
              <span>Youtube SharePlay</span>
            </h4>
            <div className='techonologies_section'>
              <span>React, Redux</span>
              <span>Node.js</span>
              <span>Web Sockets</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
          <div className='card__side card__side--back'>
            <div className='card-back-cta card-back--1'>
              <h4>
                Video streaming platform to watch YouTube videos together in
                rooms
              </h4>
              <Button
                onClickHandler={() => {
                  window.open('https://vsync.vercel.app/', '_blank');
                }}
                buttonText={'Demo'}
              />
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className='card'>
          <div className='card__side card__side--front'>
            <div className='youtube_sync_project card-cover--3'></div>
            <h4 className='card_heading card-front--3'>
              <span>Breeze</span>
            </h4>
            <div className='techonologies_section'>
              <span>React, TypeScript</span>
              <span>Node.js, MongoDB</span>
              <span>tRPC, Prisma</span>
              <span>React Query, Zustand</span>
            </div>
          </div>
          <div className='card__side card__side--back'>
            <div className='card-back-cta card-back--3'>
              <h4>
                Breeze is the ultimate messaging app (a PWA) with tons of
                features and mesmerizing UI.
              </h4>
              <Button
                onClickHandler={() => {
                  window.open('https://breezee.vercel.app/login', '_blank');
                }}
                buttonText={'Demo'}
              />
            </div>
          </div>
        </div>

        {/* CARD 3 */}

        <div className='card'>
          <div className='card__side card__side--front'>
            <div className='youtube_sync_project card-cover--2'></div>
            <h4 className='card_heading card-front--2'>
              <span>Clinical Timesheet</span>
            </h4>
            <div className='techonologies_section'>
              <span>Java, React</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>Bootstrap, CSS</span>
            </div>
          </div>
          <div className='card__side card__side--back'>
            <div className='card-back-cta card-back--2'>
              <h4>
                A full stack web for seamless timesheet management, including
                submission, approval flow, and report retrieval
              </h4>
              <Button
                onClickHandler={() => {
                  window.open(
                    'http://gseweb.gse.buffalo.edu:3000/signup',
                    '_blank'
                  );
                }}
                buttonText={'Demo'}
              />
            </div>
          </div>
        </div>

        {/* CARD 4 */}

        {/* <div className='card'>
          <div className='card__side card__side--front'>
            <div className='youtube_sync_project card-cover--2'></div>
            <h4 className='card_heading card-front--2'>
              <span>Clinical Timesheet</span>
            </h4>
            <div className='techonologies_section'>
              <span>React, Java</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>Bootstrap, CSS</span>
            </div>
          </div>
          <div className='card__side card__side--back'>
            <div className='card-back-cta card-back--2'>
              <h4>
                A full stack web for seamless timesheet management, including
                submission, approval flow, and report retrieval
              </h4>
              <Button buttonText={'Source Code'} />
            </div>
          </div>
        </div> */}

        {/* CARD 5 */}

        {/* <div className='card'>
          <div className='card__side card__side--front'>
            <div className='youtube_sync_project card-cover--2'></div>
            <h4 className='card_heading card-front--2'>
              <span>Clinical Timesheet</span>
            </h4>
            <div className='techonologies_section'>
              <span>React, Java</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>Bootstrap, CSS</span>
            </div>
          </div>
          <div className='card__side card__side--back'>
            <div className='card-back-cta card-back--2'>
              <h4>
                A full stack web for seamless timesheet management, including
                submission, approval flow, and report retrieval
              </h4>
              <Button buttonText={'Source Code'} />
            </div>
          </div>
        </div> */}

        {/* CARD 6 */}

        {/* <div className='card' style={{ visibility: 'hidden' }}>
          <div className='card__side card__side--front'>
            <div className='youtube_sync_project card-cover--2'></div>
            <h4 className='card_heading card-front--2'>
              <span>Clinical Timesheet</span>
            </h4>
            <div className='techonologies_section'>
              <span>React, Java</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>Bootstrap, CSS</span>
            </div>
          </div>
          <div className='card__side card__side--back'>
            <div className='card-back-cta card-back--2'>
              <h4>
                A full stack web for seamless timesheet management, including
                submission, approval flow, and report retrieval
              </h4>
              <Button buttonText={'Source Code'} />
            </div>
          </div>
        </div> */}
      </div>
      <div className='other_projects'>Other Projects</div>
    </section>
  );
};

export default Projects;
