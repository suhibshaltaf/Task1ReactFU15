import React from 'react';
import styles from './about.module.css';

export default function About() {
  return (
    <section
      id="About"
      className={`${styles.about} d-flex align-items-center`}
    >
      <div className="container  text-white">

        <h2 className={`${styles.title} text-center`}>ABOUT</h2>

        <div className={`${styles.divider} py-4`}>
          <span className={styles.line}></span>
          <i className={`bi bi-star-fill ${styles.star}`}></i>
          <span className={styles.line}></span>
        </div>

        <div className="row  ">
          <div className="col-lg-4 ms-auto">
            <p className={styles.text}>
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div className="col-lg-4 me-auto">
            <p className={styles.text}>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>

    <div className="d-flex justify-content-center mt-4">
  <a href="#" className={styles.btnCustom}>
    <i className="bi bi-download me-2"></i>
    Free Download!
  </a>
</div>


      </div>
    </section>
  );
}
