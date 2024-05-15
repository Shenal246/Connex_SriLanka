import './Whoweare.css'
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


function WhoweareSection() {
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
          <div className="row whotextRow" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
            <div className="col-4"><hr /></div>
            <div className="col-4"><p id='whoweareText'>Who we are</p></div>
            <div className="col-4"><hr /></div>
          </div>

          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="row">
              <div className="col-md-5 techcontainer">
                <div className='row' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                  <div className='col welogos' onClick={() => setDisShow(true)}>
                    <div className='row'><img src={Dis} className='techimage' /></div>
                    <div className='row'><p className='techText'>Distribution</p></div>
                  </div>
                  <div className='col welogos' onClick={() => setConShow(true)}>
                    <div className='row'><img src={Con} className='techimage' /></div>
                    <div className='row'><p className='techText'>Consultancy</p></div>
                  </div>
                </div>

                <div className='row' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                  <div className='col welogos' onClick={() => setTraShow(true)}>
                    <div className='row'><img src={Tra} className='techimage' /></div>
                    <div className='row'><p className='techText'>Training</p></div>
                  </div>
                  <div className='col welogos' onClick={() => setTacShow(true)}>
                    <div className='row'><img src={Tac} className='techimage' /></div>
                    <div className='row'><p className='techText'>TAC Support</p></div>
                  </div>
                </div>
              </div>


              <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">

                <div className="row" id='whText'>
                  <p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literatum passage,literature, discovered the undoubtable source.</p>
                </div>


                <div className="row iconRow">

                  <div className='col iconCol'>
                    <div className='row'>
                      <div className='icon-container'>
                        <img src={icon1} className='iconMob' />
                      </div>
                    </div>
                    <div className='row textRow'>
                      <p className='iconText'>{counterOn && <CountUp start={0} end={2014} duration={2} delay={0.5} separator="" />}+<br /> Founder</p>
                    </div>
                  </div>

                  <div className='col iconCol'>
                    <div className='row'>
                      <div className='icon-container'>
                        <img src={icon2} className='iconMob' />
                      </div>
                    </div>
                    <div className='row textRow'>
                      <p className='iconText'>{counterOn && <CountUp start={0} end={200} duration={3} delay={0.5} />}+ <br />Employees</p>
                    </div>
                  </div>

                  <div className='col iconCol'>
                    <div className='row'>
                      <div className='icon-container'>
                        <img src={icon3} className='icon iconMob' />
                      </div>
                    </div>
                    <div className='row textRow'>
                      <p className='iconText'>{counterOn && <CountUp start={0} end={60} duration={3} delay={0.5} />}+ <br />Vendors</p>
                    </div>
                  </div>

                  <div className='col iconCol'>
                    <div className='row'>
                      <div className='icon-container'>
                        <img src={icon4} className='iconMob' />
                      </div>
                    </div>
                    <div className='row textRow'>
                      <p className='iconText'>{counterOn && <CountUp start={0} end={150} duration={3} delay={0.5} />}+ <br />Partners</p>
                    </div>
                  </div>

                  {/* <div className='col'>
                  
                  </div> */}

                </div>

              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>

      {/*Distribution Model */}
      <Modal
        size="lg"
        show={disShow}
        onHide={() => setDisShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='disModel'
      >
        <Modal.Header closeButton varient='white' className='model-header'>
          <Modal.Title id="example-modal-sizes-title-lg">
            Distribution
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-body'>
          <div className='row'>
            <div className='col-md'>
              <p className='model-content-text'>Discover our tailor-made solutions, designed to meet end-users requirements with the most competitive, best-fitted answers for their unique needs.</p>
            </div>

            <div className='col-md'>
              <img src={Distribution} className='model-image' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='model-footer'>
          <Button onClick={handleClose} className='contactUs-button'>
            Contact Us
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Consultancy Model */}
      <Modal
        size="lg"
        show={conShow}
        onHide={() => setConShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='disModel'
      >
        <Modal.Header closeButton className='model-header'>
          <Modal.Title id="example-modal-sizes-title-lg">
            Consultancy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-body'>
          <div className='row'>
            <div className='col-md'>
              <p className='model-content-text'>Consultancy service is a unique solution offered by Connex, ensuring the most suitable and competitive solution for an end-user’s requirements. We offer an integrated customized service of consultancy skills that grows and changes with business and customer needs.
                Connex consultancy provides highly qualified personnel to complement the skills of your own team. Our consultants and engineers act on your behalf to ensure the smooth running of customers’ installation, in a timely manner and according to budget implications.</p>
            </div>

            <div className='col-md'>
              <img src={Consultancy} className='model-image' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='model-footer'>
          <Button onClick={handleClose} className='contactUs-button'>
            Contact Us
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Training Model */}
      <Modal
        size="lg"
        show={traShow}
        onHide={() => setTraShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='disModel'
      >
        <Modal.Header closeButton className='model-header'>
          <Modal.Title id="example-modal-sizes-title-lg">
            Training
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-body'>
          <div className='row'>
            <div className='col-md'>
              <p className='model-content-text'>
                We believe in the popular adage we are all lifelong learners, hence we strive to create a culture of learning where our employees are afforded numerous opportunities to further their professional development. We also groom our employees for future leadership positions from within the Company.
                <br />
                In a fast moving and developing digital world, the Technology industry experiences changes rapidly; therefore we realize the need to keep pace with attrition rates and staying on the edge of the most advanced technologies. Our extensive training and professional development of programmers have contributed to employee retention.
                <br />
                Our training and workshop facility enables us to conduct knowledge of product technology awareness sessions, assist with vendors workshops & award certifications.
              </p>
            </div>

            <div className='col-md'>
              <img src={Training} className='model-image' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='model-footer'>
          <Button onClick={handleClose} className='contactUs-button'>
            Contact Us
          </Button>
        </Modal.Footer>
      </Modal>

      {/*TAC Support Model */}
      <Modal
        size="lg"
        show={tacShow}
        onHide={() => setTacShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='disModel'
      >
        <Modal.Header closeButton className='model-header'>
          <Modal.Title id="example-modal-sizes-title-lg">
            TAC Support
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-body'>
          <div className='row'>
            <div className='col-md'>
              <p className='model-content-text'>
                Connex offers 24/7 TAC services, with an array of certified, technical and qualified professionals. We are proud of Service Level Agreement levels of Bronze, Silver, Gold and Platinum.<br />
                You will get to engage with your Product Manager who will share his understanding of the product, so you are fully informed and equipped with knowledge and the technical know how to use the product. Product research updates will also be shared along with information about deal registration.<br />
                Connex professional service and technical support service are available for our channel partners only. Please contact.
              </p>
            </div>

            <div className='col-md'>
              <img src={TacService} className='model-image' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='model-footer'>
          <Button onClick={handleClose} className='contactUs-button'>
            Contact Us
          </Button>
        </Modal.Footer>
      </Modal>

    </section>
  );
}

export default WhoweareSection;
