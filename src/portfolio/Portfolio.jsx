import React from 'react'
import styles from './portfolio.module.css'
import img1 from './../assets/image/portfolio/cabin.png';
import img2 from './../assets/image/portfolio/cake.png';
import img3 from './../assets/image/portfolio/circus.png';
import img4 from './../assets/image/portfolio/game.png';
import img5 from './../assets/image/portfolio/safe.png';
import img6 from './../assets/image/portfolio/submarine.png';

export default function Portfolio() {
  return (
   <section id='Portfolio' className={`${styles.portfilo} py-5 container trext-center`} >
    <h2 className='text-center mb-4'>PORTFOLIO</h2>
    <div className={`${styles.divider}  my-4 mx-auto`}>
          <span className={styles.line}></span>
            <i className={`bi bi-star-fill ${styles.star}`}></i>
            <span className={styles.line}></span>
    </div>

<div className="row g-3">
    <div className="col-md-4">
<img src={img1} alt="" />
    </div>
    <div className="col-md-4">
<img src={img2} alt="" />
    </div><div className="col-md-4">
<img src={img3} alt="" />
    </div><div className="col-md-4">
<img src={img4} alt="" />
    </div>
<div className="col-md-4">
<img src={img5} alt="" />
    </div>
    <div className="col-md-4">
<img src={img6} alt="" />
    </div>
</div>
    
   </section>
  )
}
