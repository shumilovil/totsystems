import React from 'react';
import { useFormik } from 'formik';
import './Login.css';
import { Title } from '../CommonComponents/Titles';
import { Button } from '../CommonComponents/Buttons';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email is required';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    }

    return errors;
}

export const Login = (props) => {    

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            props.handleAuthorisation(values);          
            formik.handleReset();            
        }
    });

    return (
        <div className='login'>
            <Title>Login</Title>
            <form onSubmit={formik.handleSubmit}>
                <div className='email'>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}                        
                    />
                </div>
                {formik.errors.email ? <span className='error'>{formik.touched.email && formik.errors.email}</span> : null}
                <br />
                <div className='password'>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.errors.password ? <span className='error'>{formik.touched.password && formik.errors.password}</span> : null}
                <br />
                <div>
                    <Button big type="submit">Submit</Button>
                </div>
            </form>
        </div>

    )
}