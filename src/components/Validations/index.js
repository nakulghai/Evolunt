const onBlurValidations = (id, value) => {
	switch(id) {
	    case "firstName":
	        return nameValidations(value);
        case "lastName":
        	return nameValidations(value);
        case "email":
        	return emailValidations(value);
        case "phoneNumber":
        	return phoneNumberValidations(value);
    	default: 
    		return true;	
	}
}

const nameValidations = (value) => {
	var reg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
	return reg.test(value);
}

const emailValidations = (value) => {
	var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
	return reg.test(value);
}


//valid phone number
// (555)-555-5555
// 555-555-5555
// test 34 
// +1-555-532-3453

const phoneNumberValidations = (value) => {
	var reg = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g;
	return reg.test(value);
}

export default onBlurValidations;