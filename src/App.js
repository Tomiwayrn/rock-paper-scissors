import RockPaper from "./RockPaper";
import React from "react";



function App() {
  
  const [modal, setModal] = React.useState(false)
  

  return (
    <>     
      <RockPaper modal= {modal} setModal ={setModal} />
  </>
       
 
  );
}

export default App;
