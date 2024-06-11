import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
    const [faqList, setFaqList] = useState([
        {
            question: "What role does your partner play?",
            answer: "Our partners are the people, customers would go to, to purchase a product. They offer insights and knowledge about their products.",
            isCollapsed: true
        },
        {
            question: "Can I directly purchase from Connex?",
            answer: "It is not possible to directly deal with Connex to purchase items and services.",
            isCollapsed: true
        },
        {
            question: "What is the time frame of onboarding a product/service? ",
            answer: "The time frame is highly dependent on product choice and implementation stages the client requests to implement.",
            isCollapsed: true
        },
        {
            question: "What type of product support do we provide ? ",
            answer: "We will be a part of the complete process from the pre-implementation stages through to the final execution and maintenance..",
            isCollapsed: true
        },
        {
            question: "Are we authorized distributors ? ",
            answer: "Of course! We possess complete authority granted by the vendor for our complete product portfolio.",
            isCollapsed: true
        }
    ]);

    const toggleAnswerVisibility = (index) => {
        const updatedFaqList = [...faqList];
        updatedFaqList[index].isCollapsed = !updatedFaqList[index].isCollapsed;
        setFaqList(updatedFaqList);
    };

    return (

        <div className='container '>

            <div className='row'>
                <div className="row gy-3 text mb-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <div className="col-md-4"><hr /></div>
                    <div className="col-md-4"><p id='Text'>FAQ</p></div>
                    <div className="col-md-4"><hr /></div>
                </div>
            </div>
            <div className='field'>
                {faqList.map((faq, index) => (
                    <div key={index} className="card mb-3 ">
                        <div className="card-header" onClick={() => toggleAnswerVisibility(index)} style={{ cursor: 'pointer' }}>
                            {faq.isCollapsed ? "+" : "-"} {faq.question}
                        </div>
                        {!faq.isCollapsed &&
                            <div className="card-body">
                                <p className="card-text">{faq.answer}</p>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
