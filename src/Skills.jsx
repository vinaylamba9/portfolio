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
        <img src={HTML5} alt='HTML' />
        <img src={CSS} alt='CSS' />
        <img src={JS} alt='JavaScript' />
        <img src={ReactIcon} alt='React' />
        <img src={TS} alt='TypeScript' />
        <img src={NodeJs} alt='NodeJs' />

        {/* <img src="" alt="Express" /> */}
        <img src={Java} alt='Java' />
        <img src={C} alt='C++' />
        <img src={Sass} alt='SASS' />
        <img src={GraphQL} alt='GraphQL' />
        <img src={MySQL} alt='MySQL' />
        <img src={PostGreSQL} alt='Posgresql' />
        <img src={Redis} alt='Redis' />
        <img src={Docker} alt='Docker' />
        <img src={AWS} alt='AWS' />
      </div>
      {SkillSection.map((item) => {
        return (
          <div className='technologies'>
            <p className='technologies__type'>{item.heading}</p>
            <p className='technologies__desc'>
              <img src={Check} /> {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;