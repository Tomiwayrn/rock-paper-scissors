export const scoringEasy =(userChoice , computerChoice)=>{
     
   
    if (
         (userChoice === 'paper' && computerChoice === 'rock') ||
         (userChoice === 'rock' && computerChoice === 'scissors') ||
         (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'win'

      }else if (
        (userChoice === 'rock' && computerChoice === 'paper') ||
        (userChoice === 'scissors' && computerChoice === 'rock') ||
        (userChoice === 'paper' && computerChoice === 'scissors')
     ) {
        return 'lose' 
      }
      else if(userChoice === computerChoice && computerChoice === userChoice) {
        return 'draw'

      } 
};


export const scoringHard = (userChoice, computerChoice)=>{
    if (userChoice === computerChoice ) {
         return 'draw' 

      } else if (
         (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
         (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
         (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
         (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
         (userChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
      ) {
         return 'win' 

      } else {
        return 'lose'
      }
}