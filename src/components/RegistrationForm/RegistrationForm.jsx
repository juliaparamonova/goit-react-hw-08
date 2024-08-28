import { ErrorMessage, Field, Form, Formik } from 'formik';
import { registerThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { registrationSchema } from '../../helpers/registrationSchema';
import s from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: '', email: '', password: '' };

  const handelSubmit = (values, actions) => {
    dispatch(registerThunk(values));

    actions.resetForm();
  };

  return (
    <div>
      <div className={s.form}>
        <Formik
          initialValues={initialValues}
          onSubmit={handelSubmit}
          validationSchema={registrationSchema}
        >
          <Form>
            <label className={s.label}>
              Name
              <Field type="text" name="name" placeholder="name" />
              <ErrorMessage name="name" component="span" />
            </label>
            <label className={s.label}>
              Email
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="span" />
            </label>
            <label className={s.label}>
              Password
              <Field
                type="password"
                name="password"
                autoComplete="true"
                suggested="current-password"
                placeholder="password"
              />
              <ErrorMessage name="password" component="span" />
            </label>
            <button className={s.oauthButton} type="submit">
              SingUp
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
