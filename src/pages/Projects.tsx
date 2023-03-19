import React from 'react';
import {useState} from 'react';
import '../styles/projects.css';
import ProjectCard from '../components/ProjectCard';
import ImageProjectCard from '../components/ImageProjectCard';
import Popup from '../components/Popup';

interface Info {
  id : number;
  img : String;
  lName : String;
  name : String;
  members : String;
  desc : String;
  git : String;
  gantt : String;
}


function Projects() {
  const [showPopup, setShowPopup] = useState(false);
  const [cardInfo, setCardInfo] = useState<{
    id: number;
    img: string;
    name: string;
    lName: string;
    members: string;
    desc: string;
    git: string;
    gantt: string;
  } | null>(null);

  const handleOpenPopup = (info : {
    id: number;
    img: string;
    name: string;
    lName: string;
    members: string;
    desc: string;
    git: string;
    gantt: string;
    }) => {
    setCardInfo(info);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const cardData =[
    {
      id: 1,
      img :"https://drive.google.com/uc?export=view&id=1ojkTwww4f-TAXY3-BtJfe7nlULWY4vE6" ,
      name:'PCR', 
      lName:"Sahil Jain, Conrad the Condad", 
      members:"Pranav, David, Oscar, Nicky, Sarah, Angelica Shawarma, Anjali Agrawal, Emerald, Namila",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 2,
      img :"https://drive.google.com/uc?export=view&id=1ViLB3YkHlQ2iQRTtHs7KU5Doxln0jLie" ,
      name:'Chess Teacher', 
      lName:"Vishal Kantharaju", 
      members:"Alan, Hursh, Savvy, Sid, Tanay Garg, Zach",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 3,
      img :"https://drive.google.com/uc?export=view&id=1tUeRQorUFeg53gdXJBONz_j4ZDJ8b7Yf" ,
      name:'Autonomous Drone', 
      lName:"Carson", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 4,
      img :"https://drive.google.com/uc?export=view&id=1O8Yc-Tdzh5RZK1Nydo2iRyje76NVpS66" ,
      name:'Music Mood', 
      lName:"Sahana", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 5,
      img :"https://drive.google.com/uc?export=view&id=1PtCjDrhR-OSC-A-SYzJsvkjie_redgZI" ,
      name:'Robotic Arm', 
      lName:"Sahil Jain", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 6,
      img :"https://drive.google.com/uc?export=view&id=1DPXoEzWTZ6VwRIuxkaHGucIFBMXpH4J1" ,
      name:'AI Nose', 
      lName:"Mauricio", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 7,
      img :"https://drive.google.com/uc?export=view&id=18k4112Of06u9Yb42pT8NL_o8Nk-GgEny" ,
      name:'Smart Mirror', 
      lName:"Sahil Jain", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 8,
      img :"https://drive.google.com/uc?export=view&id=1vkVR4KX7UvAiZ8ql0-3IWdPGacsSAsEq" ,
      name:'Fitness Tracker', 
      lName:"Kyrylo", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    }
  ]

  return (
    <div className='everything'>
      <h1 className = 'title'>Projects</h1>
      <div className='gridContainer'>
        <div className='projectCards'>
          {/* <ProjectCard img ="https://drive.google.com/uc?export=view&id=1ojkTwww4f-TAXY3-BtJfe7nlULWY4vE6" h2='PCR'/>
          <ProjectCard img ="https://drive.google.com/uc?export=view&id=1ViLB3YkHlQ2iQRTtHs7KU5Doxln0jLie" h2='Chess Teacher'/>
          <ProjectCard img ="https://drive.google.com/uc?export=view&id=1tUeRQorUFeg53gdXJBONz_j4ZDJ8b7Yf" h2='Autonomous Drone'/>
          <ProjectCard img ="https://drive.google.com/uc?export=view&id=1O8Yc-Tdzh5RZK1Nydo2iRyje76NVpS66" h2='Music Mood'/>
          <ProjectCard img ="https://drive.google.com/uc?export=view&id=1DPXoEzWTZ6VwRIuxkaHGucIFBMXpH4J1" h2='AI Nose'/>
          <ProjectCard img ="https://drive.google.com/uc?export=view&id=1vkVR4KX7UvAiZ8ql0-3IWdPGacsSAsEq" h2='Fitness Tracker'/>
          <ProjectCard img ="https://drive.google.com/uc?export=view&id=18k4112Of06u9Yb42pT8NL_o8Nk-GgEny" h2='Smart Mirror'/>
          <ProjectCard img ="https://drive.google.com/uc?export=view&id=1PtCjDrhR-OSC-A-SYzJsvkjie_redgZI" h2='Robotic Arm'/> */}
          {/* <ImageProjectCard img ="https://drive.google.com/uc?export=view&id=1ojkTwww4f-TAXY3-BtJfe7nlULWY4vE6" name='PCR' lName="Sahil 'Cracked' Jain, Conrad the Condad" members="Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma" desc= 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.' git="apple.com" gantt="costco.com"/>
          <ImageProjectCard img ="https://drive.google.com/uc?export=view&id=1ViLB3YkHlQ2iQRTtHs7KU5Doxln0jLie" name='Chess Teacher' lName="Sahil 'Cracked' Jain, Conrad the Condad" members="Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma" desc= 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.' git="apple.com" gantt="costco.com"/>
          <ImageProjectCard img ="https://drive.google.com/uc?export=view&id=1tUeRQorUFeg53gdXJBONz_j4ZDJ8b7Yf" name='Autonomous Drone' lName="Sahil 'Cracked' Jain, Conrad the Condad" members="Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma" desc= 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.' git="apple.com" gantt="costco.com"/>
          <ImageProjectCard img ="https://drive.google.com/uc?export=view&id=1O8Yc-Tdzh5RZK1Nydo2iRyje76NVpS66" name='Music Mood'lName="Sahil 'Cracked' Jain, Conrad the Condad" members="Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma" desc= 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.' git="apple.com" gantt="costco.com"/>
          <ImageProjectCard img ="https://drive.google.com/uc?export=view&id=1DPXoEzWTZ6VwRIuxkaHGucIFBMXpH4J1" name='AI Nose' lName="Sahil 'Cracked' Jain, Conrad the Condad" members="Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma" desc= 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.' git="apple.com" gantt="costco.com"/>
          <ImageProjectCard img ="https://drive.google.com/uc?export=view&id=1vkVR4KX7UvAiZ8ql0-3IWdPGacsSAsEq" name='Fitness Tracker' lName="Sahil 'Cracked' Jain, Conrad the Condad" members="Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma" desc= 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.' git="apple.com" gantt="costco.com"/>
          <ImageProjectCard img ="https://drive.google.com/uc?export=view&id=18k4112Of06u9Yb42pT8NL_o8Nk-GgEny" name='Smart Mirror' lName="Sahil 'Cracked' Jain, Conrad the Condad" members="Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma" desc= 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.' git="apple.com" gantt="costco.com"/>
          <ImageProjectCard img ="https://drive.google.com/uc?export=view&id=1PtCjDrhR-OSC-A-SYzJsvkjie_redgZI" name='Robotic Arm' lName="Sahil 'Cracked' Jain, Conrad the Condad" members="Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma" desc= 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.' git="apple.com" gantt="costco.com"/> */}
          {cardData.map((card) => (
          <ImageProjectCard
          key = {card.id}
          name = {card.name}
          img = {card.img}
          lName  ={card.lName}
          members = {card.members}
          desc = {card.desc}
          git = {card.git}
          gantt = {card.gantt}
          onOpenPopup={() => handleOpenPopup(card)}
          />
          ))}
        </div>
      </div>
      {showPopup && <Popup onClose={handleClosePopup} cardInfo={cardInfo} />}
      <h3>hiiiiii</h3>
    </div>
  )
}

export default Projects
