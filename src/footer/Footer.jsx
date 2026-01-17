import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer} text-white`}>
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="fw-bold mb-3">LOCATION</h5>
              <p className="mb-0">
                2215 John Daniel Drive <br />
                Clark, MO 65243
              </p>
            </div>

            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="fw-bold mb-3">AROUND THE WEB</h5>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className={styles.icon}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className={styles.icon}>
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className={styles.icon}>
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className={styles.icon}>
                  <i className="bi bi-dribbble "></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold mb-3">ABOUT FREELANCER</h5>
              <p className="mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme
                created by{" "}
                <a className={`${styles.link} `}>Start Bootstrap</a>
              </p>
            </div>

          </div>
        </div>
      </footer>

      <div className={styles.copy}>
        Copyright © Your Website 2023
      </div>
    </>
  );
}
