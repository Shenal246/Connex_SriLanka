import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import ChatBot from 'react-simple-chatbot';
import Botpic from '../../images/chatprof.png';
import axios from "axios";

function Chat() {
  const [responses, setResponses] = useState([]);
  const chatBotRef = useRef(null);


  // Handle chat end
  const handleEnd = async ({ values }) => {
    console.log(values);

    const value1 = values[0];
    const value2 = values[1];
    const value3 = values[2];

    const valuess = {
      query: "INSERT INTO chat (name, problem, tpno) values(?,?,?);",
      value1: value1,
      value2: value2,
      value3: value3,
      key: "Cr6re8VRBm"
    };

    await axios.post("https://bc-niroshmadushans-projects.vercel.app/insert", valuess).then((response) => {
      // Handle response if needed
    }).catch((err) => {
      console.log(err);
    });

    setResponses(values);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chatBotRef.current) {
        chatBotRef.current.querySelector('.rsc-float-button').click();
      }
    }, 30000); // 30000ms = 30 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const images = [
    Botpic, Botpic
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500000); // 300000ms = 5 minutes

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div ref={chatBotRef} className="chat-container" style={{ '--floating-button-image': `url(${images[currentImageIndex]})` }}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hi! I am here to help you. Can I know your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, How Can I help you?',
            trigger: '4',
          },
          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Sure. Can I have your phone number?',
            trigger: '6',
          },
          {
            id: '6',
            user: true,
            trigger: '7',
          },
          {
            id: '7',
            message: 'Thank you! One of our staff will call you shortly.',
            end: true,
          },
        ]}
        floating={true}
        handleEnd={handleEnd}
        className="custom-chatbot"
        botAvatar={Botpic}
        // userAvatar="path/to/your/user/avatar.png"
        headerTitle="ConnBot"
      />
      <div className="online-dot"></div>
    </div>
  );
}

export default Chat;
