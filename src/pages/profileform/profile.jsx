import React from 'react'
import { PageTitle } from '../../components/PageTitle';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from "yup";


const ProfileForm = () => {
    
    const handelform = (value) => {
        console.log(value);
    }
    const values = {
        firstname:"",
        lastname:"",
        email:"",
        contact:"",
        address1:"",
        address2:"",
    }
    const phone =  
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const validation = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        contact: yup.string().matches(phone, "Phone number is not valid").required("required"),
        address1: yup.string().required("required"),
        address2: yup.string().required("required"),
    })
    return (
        <>
            <Box>
            <PageTitle title="CREATE USER" subtitle="Create a New User Profile" />
                <Formik
                initialValues={values}
                onSubmit={handelform}
                validationSchema={validation}
                >
                {({values,errors,touched,handleBlur,handleSubmit,handleChange}) => (
                            <form onSubmit={handleSubmit}>
                                <Box display={'grid'} gap={'30px'}>
                                    <div className='grid lg:grid-cols-2 gap-8'>
                                        <TextField
                                        fullWidth
                                        label="First Name"
                                        variant='filled'
                                        type='text'
                                        name='firstName'
                                        onChange={handleChange}
                                        value={values.firstName}
                                        error={!!touched.firstName && !!errors.firstName}
                                        helperText={touched.firstName && errors.firstName}
                                        onBlur={handleBlur}
                                        />  
                                        <TextField
                                        fullWidth
                                        label="Last Name"
                                        variant='filled'
                                        type='text'
                                        name='lastName'
                                        onChange={handleChange}
                                        value={values.lastName}
                                        error={!!touched.lastName && !!errors.lastName}
                                        helperText={touched.lastName && errors.lastName}
                                        onBlur={handleBlur}
                                        /> 
                                            </div>
                                        <TextField
                                        fullWidth
                                        label="Email"
                                        variant='filled'
                                        type='text'
                                        name='email'
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        error={!!touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                        /> 
                                            <TextField
                                        fullWidth
                                        label="Contact Number"
                                        variant='filled'
                                        type='text'
                                        name='contact'
                                        onChange={handleChange}
                                        value={values.contact}
                                        error={!!touched.contact && !!errors.contact}
                                        helperText={touched.contact && errors.contact}
                                        onBlur={handleBlur}
                                        /> 
                                        <TextField
                                        fullWidth
                                        label="Address 1"
                                        variant='filled'
                                        type='text'
                                        name='address1'
                                        onChange={handleChange}
                                        value={values.address1}
                                        error={!!touched.address1 && !!errors.address1}
                                        helperText={touched.address1 && errors.address1}
                                        onBlur={handleBlur}
                                        /> 
                                        <TextField
                                        fullWidth
                                        label="Address 2"
                                        variant='filled'
                                        type='text'
                                        name='address2'
                                        onChange={handleChange}
                                        value={values.address2}
                                        error={!!touched.address2 && !!errors.address2}
                                        helperText={touched.address2 && errors.address2}
                                        onBlur={handleBlur}
                                        /> 
                                        <Box textAlign={'right'}>
                                            <Button type='submit' color='secondary' variant="contained">Create New User</Button>
                                        </Box>
                                </Box>
                            </form>
                )}
                </Formik>
            </Box>
        </>
    )
}
export default ProfileForm;
