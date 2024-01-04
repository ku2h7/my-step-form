import * as Yup from 'yup';

export const Step1Schema = Yup.object().shape({
  firstname: Yup.string().required('Firstname is required'),
  lastname: Yup.string().required('Lastname is required'),
});

export const Step2Schema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const Step3Schema = Yup.object().shape({
  phoneNumber: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});
