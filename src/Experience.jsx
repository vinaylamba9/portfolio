import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles/experience.scss';
import collegeIcon from './assets/images/uni60.png';
import workIcon from './assets/images/work1.png';
import hourGlass from './assets/images/hourglass32.png';
import { EDUCATION_DETAILS, WORK_EXP_HERBALIFE } from './constant';

const Experience = () => {
  return (
    <div className='experience'>
      <h4>Work Experience</h4>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Aug 2022 - Dec 2023'
          iconStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ae944f',
            color: '#fff',
          }}
          icon={<img src={collegeIcon} style={{ height: '3.5rem' }} />}
          dateClassName='date-style'
        >
          <h3 className='vertical-timeline-element-title'>
            MS in Computer Science
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            University at Buffalo, State University of New York
          </h4>
          <p className='vertical-timeline-element-details'>
            {EDUCATION_DETAILS}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Aug 2021 - Aug 2022'
          dateClassName='date-style'
          iconStyle={{
            background: '#ae944f',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          icon={<img src={workIcon} style={{ height: '3.2rem' }} />}
        >
          <h3 className='vertical-timeline-element-title'>
            UI Developer II @ Herbalife Nutrition
          </h3>
          <h4 className='vertical-timeline-element-subtitle'></h4>

          <p className='vertical-timeline-element-details'>
            {WORK_EXP_HERBALIFE.split('◦').map((line) => {
              return (
                <span key={line} style={{ display: 'block' }}>
                  {line}
                </span>
              );
            })}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element'
          date='Jul 2019 - Aug 2021'
          dateClassName='date-style'
          iconStyle={{
            background: '#ae944f',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          icon={<img src={workIcon} style={{ height: '3.2rem' }} />}
        >
          <h3 className='vertical-timeline-element-title'>
            Frontend Engineer @ Cognizant
          </h3>
          <h4 className='vertical-timeline-element-subtitle'></h4>

          <p className='vertical-timeline-element-details'>
            {WORK_EXP_HERBALIFE.split('◦').map((line) => {
              return (
                <span key={line} style={{ display: 'block' }}>
                  {line}
                </span>
              );
            })}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{
            background: '#ae944f',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          icon={<img src={hourGlass} style={{ height: '3.5rem' }} />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
