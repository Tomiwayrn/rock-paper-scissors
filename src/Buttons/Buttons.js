import paper from '../imgs/icon-paper.svg';
import rock from '../imgs/icon-rock.svg';
import scissors from '../imgs/icon-scissors.svg';
import lizard from '../imgs/icon-lizard.svg';
import spock from '../imgs/icon-spock.svg';
import './Buttons.css';

const Buttons = ({easy,  setPlay, setUserChoice,play, setComputerChoice}) => {
   
  const easyBtn = ['paper', 'scissors', 'rock'];
  const easyImg = [paper, scissors , rock];

  const hardBtn = [ 'scissors',  'paper', 'rock', 'lizard', 'spock' ];
  const hardImg = [scissors, paper, rock , lizard, spock]
  let images
  let Buttons;
  if(easy){
    Buttons= easyBtn
    images = easyImg
  }

  else if(!easy){
    Buttons = hardBtn
    images = hardImg
  }
    const Button = Buttons.map((btn)=>{
     
        
      return(
          <button key ={Buttons.indexOf(btn)} 
            value ={btn}
            id ={Buttons.indexOf(btn)}
            onClick={()=> {
              const arr = easy ? easyBtn : hardBtn
              let i =  Math.floor(Math.random() * arr.length)
              setComputerChoice(arr[i])
              setUserChoice(btn)
              play === false && setPlay(true)
            }
                            
            }
          className={`${(btn)}  ${easy?'easy-btn game-btn': 'hard-btn game-btn'}`}
          
          > 

            <img alt={btn} src= {images[Buttons.indexOf(btn)]} />
          </button>

      )
    })
  
  return (
    <div  className={easy?'btn-container easy-container': 'btn-container hard-container'}>
      {Button}
    </div>
  )
}


export default Buttons
