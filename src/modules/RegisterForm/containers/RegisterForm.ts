import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';

interface FormValues {
    login?: string;
    email?: string;
}

interface FormProps {
    login?: string;
    handleSubmit: any
}

export default withFormik<FormProps, FormValues>({
    validate: values => {
        const errors: {email?: string} = {};

        if (!values.email) {
            errors!.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors!.email = 'Invalid email address';
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm'
})(RegisterForm);