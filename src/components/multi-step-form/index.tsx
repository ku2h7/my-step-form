import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface InputProps {
  name: string;
  address: string;
  phoneNumber: string;
  email?: string;
};

const MultiStepForm: React.FC = () => {
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    address: yup.string().required('Address is required'),
    phoneNumber: yup.string().required('Phone number is required'),
  });

  const formik = useFormik<InputProps>({
    initialValues: {
      name: '',
      address: '',
      phoneNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values)
      resetForm();
    }
  });

  console.log(formik)

  return (
    <>
      <div>Ini Multi Step Form</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input 
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}
        </div>
        <div>
          <label htmlFor="">Address:</label>
          <input 
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (<div>{formik.errors.address}</div>) : null}
        </div>
        <div>
          <label htmlFor="">Phone Number:</label>
          <input 
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<div>{formik.errors.phoneNumber}</div>) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MultiStepForm