import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Input, Button } from './../common';
import * as ValidationSchemas from './../../validations/validationSchemas';

interface InputProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
};

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const getPartialSchema = (step: number) => {
    switch (step) {
      case 1:
        return ValidationSchemas.Step1Schema;
      case 2:
        return ValidationSchemas.Step2Schema;
      case 3:
        return ValidationSchemas.Step3Schema;
      default: 
        return ValidationSchemas.Step1Schema;
    }
  };

  const formik = useFormik<InputProps>({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
    },
    validationSchema: getPartialSchema(currentStep),
    onSubmit: (values, {resetForm}) => {
      console.log(values)
      resetForm();
      setCurrentStep(1);
    }
  });

  console.log(formik)

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  }

  const handleNextStep = () => {
    formik.validateForm(formik.values).then((errors) => {
      if (Object.keys(errors).length === 0) {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
      }
    })
  }

  return (
    <>
      <div>Ini Multi Step Form</div>
      <form onSubmit={formik.handleSubmit}>
        {currentStep === 1 && (
          <>
            <Input
              label='Firstname'
              id='firstname'
              name='firstname'
              type='text'
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.firstname || false}
              error={formik.errors.firstname}
            />
            <Input
              label='Lastname'
              id='lastname'
              name='lastname'
              type='text'
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.lastname || false}
              error={formik.errors.lastname}
            />
          </>
        )}

        {currentStep === 2 && (
          <>
            <Input
              label='Email'
              id='email'
              name='email'
              type='text'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.email || false}
              error={formik.errors.email}
            />
            <Input
              label='Password'
              id='password'
              name='password'
              type='text'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.password || false}
              error={formik.errors.password}
            />
          </>
        )}

        {currentStep === 3 && (
          <>
            <Input
              label='Phone Number'
              id='phoneNumber'
              name='phoneNumber'
              type='text'
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.phoneNumber || false}
              error={formik.errors.phoneNumber}
            />
            <Input
              label='Address'
              id='address'
              name='address'
              type='text'
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.address || false}
              error={formik.errors.address}
            />
          </>
        )}

        {currentStep > 1 && (
          <Button 
            label='Previous'
            type='button'
            onClick={handlePrevStep}
            disabled={Object.keys(formik.errors).length > 0}
          />
        )}

        {currentStep < 3 && (
          <Button 
            label='Next'
            type='button'
            onClick={handleNextStep}
            disabled={Object.keys(formik.errors).length > 0}
          />
        )}

        {currentStep === 3 && (
          <Button
            label='Submit'
            type='submit'
          />
        )}
      </form>
    </>
  )
}

export default MultiStepForm;