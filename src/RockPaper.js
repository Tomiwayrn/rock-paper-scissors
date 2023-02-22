import React from "react";
import Modal from './Modal/Modal.js';
import Logo from './imgs/logo.svg'
import LogoHard from './imgs/logo-bonus.svg'
import Buttons from "./Buttons/Buttons.js";
import Result from './Results'
import { scoringEasy, scoringHard } from "./utils.js";

export default function RockPaper({setModal, modal}){
    const [easy, setLevel] = React.useState(true);
    const [score, setScore] = React.useState(0);
    const [play, setPlay] = React.useState(false)
    const [result, setResult] = React.useState(null);
    const [computerChoice, setComputerChoice] = React.useState('')
    const [userChoice, setUserChoice] = React.useState('')


    React.useEffect(()=>{
        startGame()
       // eslint-disable-next-line
    },[userChoice]);

   function startGame(){
     
      let info;

      const checker=(info)=>{
          if(info === 'win'){
          setResult('win')
          setTimeout(()=>{
            setScore(score + 1)
          }, 3000)
        
          }

          else if(info === 'lose'){
          setResult('loss')
          setTimeout(()=>{
            setScore(score - 1)
          }, 3000)
        }

          else {
            setResult('draw')
          }
        }
    
      
      if (easy){
         info = scoringEasy(userChoice, computerChoice)
        
         checker(info)
         
        
      }

      else if (!easy){
       info = scoringHard(userChoice, computerChoice)
       checker(info)
       
      }};

   const reset = () =>{
    setUserChoice('')
    setComputerChoice('')
    setResult('')
    setResult('')
   };
 
 
 
 return(
    <div>
      
      {modal && 
      <Modal setModal={setModal} easy={easy}/>
      }
      
      <div className={modal? 'overlay': ''}>
        <main>
        <div className="main-header">
            <img alt="logo" src={easy?Logo:LogoHard} />
            <div className="scoreboard">
                <h4>
                    score
                </h4>
                <h1>
                    {score}
                </h1>
            </div>
        </div>

         <div className="difficulty">
            <h3>EASY</h3> 
           <div className="toggle"
           onClick={()=> setLevel(prev => !prev)}
           >
            <div className="btn"
             style={easy?{left:'-10%'}:{left:'60%'}}
            >
            </div>
           </div>
            <h3>HARD</h3>
        </div>

        {!play &&
         <Buttons 
         setComputerChoice={setComputerChoice}
         setUserChoice={setUserChoice} 
        easy={easy} 
        startGame={startGame}
        play={play}
        setPlay={setPlay}
        
        />
         }
         
        {play &&
         <Result
         userChoice = {userChoice}
         computerChoice = {computerChoice}
         result = {result}
         setPlay = {setPlay}
         play = {play} 
         reset = {reset}
         />} 
        {!modal && <button className="rules-btn"
         onClick={()=> setModal(true)}
         >RULES</button>
         }

        </main>
      </div>
    </div>
 )
}