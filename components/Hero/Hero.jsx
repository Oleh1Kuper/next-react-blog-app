import React from 'react';
import Image from 'next/image';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div>
        <Image
          className={classes.image}
          src="/images/site/robot.png"
          alt="An image showing robot"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi, I&apos;m Oleh</h1>

      <p>
        I blog about web development - especially frontend frameworks like
        NextJs or React.
      </p>
    </section>
  );
};

export default Hero;
