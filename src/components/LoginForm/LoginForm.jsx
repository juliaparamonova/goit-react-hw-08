import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { loginSchema } from '../../helpers/loginSchema';
import s from '../RegistrationForm/RegistrationForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };
  const handelSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  return (
    <div className={s.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmit}
        validationSchema={loginSchema}
      >
        <Form>
          <label className={s.label}>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
          <label className={s.label}>
            Password
            <Field
              type="password"
              name="password"
              autoComplete="true"
              suggested="current-password"
            />
            <ErrorMessage name="password" component="span" />
          </label>
          <button className={s.oauthButton} type="submit">
            LogIn
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
