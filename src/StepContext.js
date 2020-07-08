import React, {useState} from 'react'
import App from './App';

export const multiStepContext = React.createContext();

 const StepContext = () => {

 	const [currentStep, setStep] = useState(1);
 	const [finalData, setFinalData] = useState([]);
 	const [userForm, updateUserForm] = useState({
        firstName: '',
        lastName:  '',
        email:  '',
        userType: '',
        contactNumber: '',
        department:'',
        city: '',
        country: '',
        district: '',
        landmark: '',
        postalCode : '',
        terms : '',
        percentage:  0,
    });
    const [formSubmit, updateFormSubmit] = useState({
    	submit: false
    });

 	const handleInputChange = event => {
        const { target } = event;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        updateUserForm({ ...userForm, [name]: value });
    };

    var totalKeys = 12;
    const handleSubmit = event => {

 	   removeEmpty(userForm);

 	   /* Calculate Percentage Form Filled */
 	   var filledkeys = Object.keys(userForm).length;
 	   var percentageCompleted = (filledkeys/totalKeys) * 100;
 	   let profile = userForm;
 	   profile.percentage = percentageCompleted;
 	   updateUserForm(profile);

 	   /*Update the Main Array with current user */
 	   setFinalData(finalData => [...finalData, userForm ]);
 	    updateUserForm({
            ...userForm,
            firstName: '',
	        lastName:  '',
	        email:  '',
	        userType: '',
	        contactNumber: '',
	        department:'',
	        city: '',
	        country: '',
	        district: '',
	        landmark: '',
	        postalCode : '',
	        terms : '',
	        percentage:  0,
        });

 	    /*Set form submitted true for snackbar */
 	    let tempSubmit = formSubmit;
 	    tempSubmit.submit = true;
 	    updateFormSubmit(tempSubmit);
 	    setStep(4);

    };

    const removeEmpty = obj => {
    	Object.keys(obj).forEach(key => obj[key] == '' && delete obj[key]);
  	};


 	
	return(
		<div>
			<multiStepContext.Provider value = {{currentStep, setStep, finalData, setFinalData, 
				userForm, updateUserForm, handleInputChange, handleSubmit, formSubmit, updateFormSubmit}}>
				<App />
			</multiStepContext.Provider>
		</div>
		)
}

export default StepContext;