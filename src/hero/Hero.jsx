import React from 'react';
import styles from './Hero.module.css';
import logo from '../assets/image/avataaars.svg';

export default function Hero() {
  return (
    <section id="Hero" className={`${styles.hero}  vh-100 d-flex align-items-center`}>
      <div className="container text-center text-white d-flex flex-column justify-content-center align-items-center  ">

        <img src={logo} alt="avatar" className="w-25 mb-4" />

        <h1 className="">
          Start Bootstrap
        </h1>

        <div className={`${styles.divider} my-4`}>
          <span className={styles.line}></span>
          <i className={`bi bi-star-fill ${styles.star}`}></i>
          <span className={styles.line}></span>
        </div>

        <h3 className=" ">
          Graphic Artist - Web Designer - Illustrator
        </h3>

      </div>
    </section>
  );
}
