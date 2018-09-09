import onBlurValidations from './index';

describe('Validations Function', () => {
  it('onBlurValidations for firstName should be true', () => {
  	expect(onBlurValidations("firstName","abc")).toEqual(true);	  
  })

  it('onBlurValidations for firstName should be false', () => {
  	expect(onBlurValidations("firstName","@!bc")).toEqual(false);	  
  })

  it('onBlurValidations for lastName should be true', () => {
  	expect(onBlurValidations("lastName","abc")).toEqual(true);	  
  })

  it('onBlurValidations for lastName should be false', () => {
  	expect(onBlurValidations("lastName","@!bc")).toEqual(false);	  
  })

  it('onBlurValidations for email should be true', () => {
  	expect(onBlurValidations("email","nakulghai@rediffmail.com")).toEqual(true);	  
  })

  it('onBlurValidations for email should be false', () => {
  	expect(onBlurValidations("email","@!bc")).toEqual(false);	  
  })

  it('onBlurValidations for phoneNumber should be true should be true', () => {
  	expect(onBlurValidations("phoneNumber","7869750069")).toEqual(true);	  
  })

  it('onBlurValidations for phoneNumber should be false', () => {
  	expect(onBlurValidations("phoneNumber","@!bc")).toEqual(false);	  
  })
})