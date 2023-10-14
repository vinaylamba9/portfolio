import React from 'react';
import C from '../src/assets/icons/icons8-c.svg';
import CSS from '../src/assets/icons/icons8-css3.svg';
import GraphQL from '../src/assets/icons/icons8-graphql.svg';
import HTML5 from '../src/assets/icons/icons8-html-5.svg';
import Java from '../src/assets/icons/icons8-java.svg';
import JS from '../src/assets/icons/icons8-javascript.svg';
import MySQL from '../src/assets/icons/icons8-mysql.svg';
import NodeJs from '../src/assets/icons/icons8-node-js.svg';
import PostGreSQL from '../src/assets/icons/icons8-postgresql.svg';
import ReactIcon from '../src/assets/icons/icons8-react-native.svg';
import Sass from '../src/assets/icons/icons8-sass.svg';
import TS from '../src/assets/icons/icons8-typescript.svg';
import Redis from '../src/assets/icons/icons8-redis2.svg';
import Docker from '../src/assets/icons/icons8-docker.svg';
import Check from '../src/assets/icons/icons8-check.svg';
import AWS from '../src/assets/icons/icons8-amazon-web-services.svg';
import { SkillSection } from './constant';

const Skills = () => {
  return (
    <div className='skills'>
      <p>Skills</p>
      <div className='skills__icons'>
        <div className='skills__icons--inner'>
          <img src={HTML5} alt='HTML' title='HTML' />
          <img src={CSS} alt='CSS' title='CSS' />
          <img src={JS} alt='JavaScript' title='JavaScript' />
          <img src={ReactIcon} alt='React' title='React' />
          <img src={TS} alt='TypeScript' title='TypeScript' />
          <img src={NodeJs} alt='NodeJs' title='NodeJs' />

          {/*  <img src="" alt="Express" title="Express" />  */}
          <img src={Java} alt='Java' title='Java' />
          <img src={C} alt='C++' title='C++' />
          <img src={Sass} alt='SASS' title='SASS' />
          <img src={GraphQL} alt='GraphQL' title='GraphQL' />
          <img src={MySQL} alt='MySQL' title='MySQL' />
          <img src={PostGreSQL} alt='Posgresql' title='Posgresql' />
          <img src={Redis} alt='Redis' title='Redis' />
          <img src={Docker} alt='Docker' title='Docker' />
          <img src={AWS} alt='AWS' title='AWS' />

          <img aria-label='duplicate' src={HTML5} alt='HTML' title='HTML' />
          <img aria-label='duplicate' src={CSS} alt='CSS' title='CSS' />
          <img
            aria-label='duplicate'
            src={JS}
            alt='JavaScript'
            title='JavaScript'
          />
          <img
            aria-label='duplicate'
            src={ReactIcon}
            alt='React'
            title='React'
          />
          <img
            aria-label='duplicate'
            src={TS}
            alt='TypeScript'
            title='TypeScript'
          />
          <img
            aria-label='duplicate'
            src={NodeJs}
            alt='NodeJs'
            title='NodeJs'
          />
          {/* <img aria-label='duplicate' src="" alt="Express" title="Express" />  */}
          <img aria-label='duplicate' src={Java} alt='Java' title='Java' />
          <img aria-label='duplicate' src={C} alt='C++' title='C++' />
          <img aria-label='duplicate' src={Sass} alt='SASS' title='SASS' />
          <img
            aria-label='duplicate'
            src={GraphQL}
            alt='GraphQL'
            title='GraphQL'
          />
          <img aria-label='duplicate' src={MySQL} alt='MySQL' title='MySQL' />
          <img
            aria-label='duplicate'
            src={PostGreSQL}
            alt='Posgresql'
            title='Posgresql'
          />
          <img aria-label='duplicate' src={Redis} alt='Redis' title='Redis' />
          <img
            aria-label='duplicate'
            src={Docker}
            alt='Docker'
            title='Docker'
          />
          <img aria-label='duplicate' src={AWS} alt='AWS' title='AWS' />
        </div>
      </div>
      <div className='technologies'>
        {SkillSection.map((item) => {
          return (
            <>
              <p className='technologies__type'>{item.heading}</p>
              <p className='technologies__desc'>
                <img src={Check} /> {item.description}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
