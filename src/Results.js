import React from 'react'
import paper from './imgs/icon-paper.svg';
import rock from './imgs/icon-rock.svg';
import scissors from './imgs/icon-scissors.svg';
import lizard from './imgs/icon-lizard.svg';
import spock from './imgs/icon-spock.svg';
import './Buttons/Buttons.css';


const Results = ({userChoice, computerChoice, result, setPlay, reset}) => {
  const images = [scissors, paper, rock , lizard, spock]
  const arr =  [ 'scissors',  'paper', 'rock', 'lizard', 'spock' ]
  let userId, houseId
  
  
  userId = arr.indexOf(userChoice)
  houseId = arr.indexOf(computerChoice)
  
  // console.log(userChoice, computerChoice)

  return (
    <div className='results'>
        <div className='user'>
            <h3>YOU PICKED</h3>
            <button className={`${userChoice} game-btn result-btn`}> 
            <img alt={'game-btn'} src={images[userId]}/>
          </button>   
        </div> 

        <div className='info'>
            <h2>
                {result=== 'win' && 'YOU WIN' }
                {result === 'draw' && "DRAW" }
                {result === 'loss' && 'YOU LOSE'}
                
            </h2>
            <button className='play'
            onClick={()=> {setPlay(false)
              reset()

            }}
            >PLAY AGAIN</button>
        </div>

        <div className='house'>
            <h3>THE HOUSE PICKED</h3>
            <div className='house-container'>
            <button className={`${computerChoice} game-btn result-btn house-btn`}> 
            <img alt={'game-btn'} src= {images[houseId]} />
          </button>
            </div>
               
        </div>
    </div>
  )
}

export default Results