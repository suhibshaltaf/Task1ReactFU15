import React from 'react';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`py-5 ${styles.contact}`}>
      <div className="container">

        <h2 className="text-center fw-bold mb-4">
          CONTACT ME
        </h2>

        <div className={`${styles.divider} mb-5`}>
          <span className={styles.line}></span>
          <i className={`bi bi-star-fill ${styles.star}`}></i>
          <span className={styles.line}></span>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">

            <form>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Full name"
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Email address"
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Phone number"
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  className={styles.textarea}
                  placeholder="Message"
                ></textarea>
              </div>

              <button type="submit" className={styles.btnSend}>
                Send
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
