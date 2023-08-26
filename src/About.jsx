import React, { useEffect, useRef } from 'react';
import react from './assets/images/react.png';
import node from './assets/images/node.png';
import ts from './assets/images/typescript.png';
import profileImg from './assets/images/myProfile1.jpg';

const About = () => {
  const imageRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');

            if (entry.target == imageRef.current) {
              observer.unobserve(imageRef.current);
            }
            if (entry.target == aboutRef.current) {
              observer.unobserve(aboutRef.current);
            }
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
  }, []);

  return (
    <main className='about'>
      <h4>About Me</h4>
      <div className='about__me'>
        <div ref={imageRef} className='about__me--img-section'>
          <img
            className='about__me--profile'
            src={profileImg}
            alt='Avatar placeholder'
            title='Hi there! 👋'
          />
          <div className='about__me-icons'>
            <img title='TypeScript' src={ts} alt='TS' />
            <img title='React' src={react} alt='React' />
            <img title='NodeJs' src={node} alt='NodeJs' />
          </div>
        </div>
        <div ref={aboutRef} className='about__me--card'>
          <div className='about__me--card-header'>
            <span>🔴</span> &nbsp; <span>🟡</span> &nbsp; <span>🟢</span>
          </div>
          <div className='about__me--card-body'>
            <h3>Hi :)</h3>
            👋 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            sint, doloremque iusto assumenda adipisci blanditiis aspernatur
            facere! Accusamus ratione voluptatibus molestiae fugit, officiis
            veniam, eveniet vitae aliquid dolores neque illo! Quae tenetur sed
            vero architecto mollitia consequuntur sint hic autem obcaecati
            pariatur voluptatem distinctio, doloremque, officiis impedit porro
            fuga, id nisi itaque doloribus maiores eum deserunt eveniet!
            Reprehenderit, dolorum adipisci.
            <p>Thank you 💜</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
