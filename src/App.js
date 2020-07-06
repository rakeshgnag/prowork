import React, { useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import UserCreateStepOne from './Components/UserCreateStepOne'
import UserCreateStepTwo from './Components/UserCreateStepTwo'
import UserCreateStepThree from './Components/UserCreateStepThree'
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import  DisplayData  from './Components/DisplayData';
import { Button, TextField } from '@material-ui/core';



function App() {

  const { currentStep, finalData } = useContext(multiStepContext);
  const { setStep, userData, setUserData } = useContext(multiStepContext);  

  function showStep(step) {
    switch(step){
      case 1:
      return <UserCreateStepOne />
      case 2:
      return <UserCreateStepTwo />
      case 3:
      return <UserCreateStepThree />
      case 4:
      return  <DisplayData /> 
    }
     

  }
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{color:'#2c3e50', textDecoration:'underline'}}>Prowork Multi Step Form</h3>

        <div className="center-stepper">
        <Stepper style={{width: '18%'}} activeStep={currentStep -1} orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>

           <Step>
            <StepLabel></StepLabel>
          </Step>

           <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        </div>

        { showStep(currentStep)}
        
      </header>
    </div>
  );
}

export default App;
