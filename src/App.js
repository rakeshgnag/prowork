import React, { useContext} from 'react';
import './App.css';
import UserCreateStepOne from './Components/UserCreateStepOne'
import UserCreateStepTwo from './Components/UserCreateStepTwo'
import UserCreateStepThree from './Components/UserCreateStepThree'
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import  DisplayUserData  from './Components/DisplayUserData';
import  UserProgress  from './Components/UserProgress';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


function App() {

  const { currentStep, formSubmit, updateFormSubmit } = useContext(multiStepContext);
  const [open, setOpen] = React.useState(false);
  
  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      updateFormSubmit({ ...formSubmit, submit: false })
      
  };

  function showStep(step) {
    switch(step){
      case 1:
      return <UserCreateStepOne />
      case 2:
      return <UserCreateStepTwo />
      case 3:
      return <UserCreateStepThree />
      case 4:
      return  <DisplayUserData /> 
      case 5:
      return  <UserProgress />
    }
     

  }
  return (
    <div className="App">
      <h3 style={{color:'#2c3e50'}}>Prowork Multi Step Form</h3>
      <header className="App-header">
        <div className="center-stepper">
        <Stepper style={{width: '88%'}} activeStep={currentStep -1} orientation="horizontal">
          
          <Step>
            <StepLabel></StepLabel>
          </Step>

           <Step>
            <StepLabel></StepLabel>
          </Step>

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


      <Snackbar open={formSubmit.submit} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              User Added Successfully!
            </Alert>
      </Snackbar>

    </div>
  );
}

export default App;
