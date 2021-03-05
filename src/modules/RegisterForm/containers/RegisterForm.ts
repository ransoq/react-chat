import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';

interface FormValues {
    login?: string;
    email?: string;
    password: string;
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

        if (!values.password) {
            errors.email = 'Введите пароль';
        } else if (!/(?=.*[a-zA-Z0-9])/i.test(values.password)) {
            errors.email = 'Слишком легкий пароль';
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