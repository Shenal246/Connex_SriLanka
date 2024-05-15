import './test.css';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import Dis from '../../../images/tech/Distributer.png';
import Con from '../../../images/tech/Consultancy.png';
import Tra from '../../../images/tech/Training.png';
import Tac from '../../../images/tech/TAC.png';

import Distribution from '../../../images/techImages/distribution.png'
import Consultancy from '../../../images/techImages/consultancy.png';
import Training from '../../../images/techImages/Training.png';
import TacService from '../../../images/techImages/Tac.png';

import icon1 from '../../../images/weicons/3.png';
import icon2 from '../../../images/weicons/2.png';
import icon3 from '../../../images/weicons/5.png';
import icon4 from '../../../images/weicons/4.png';


function Test() {
  const [disShow, setDisShow] = useState(false);
  const [conShow, setConShow] = useState(false);
  const [traShow, setTraShow] = useState(false);
  const [tacShow, setTacShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <section id="about" className="section about">
      <div className="container conwh">

        <div>
          <div className="row whotextRow">
            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='whoweareText'>Who we are</p></div>
            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
          </div>

        


        
        </div>
      </div>

      

    </section>
  );
}

export default Test;
