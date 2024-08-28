import clsx from 'clsx';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import { contactSchema } from '../../helpers/contactSchema';
import s from './ContactForm.module.css';
import { FaPhone, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addContactsThunk } from '../../redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContactsThunk(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={s.form}>
        <div className={s.fieldWrapper}>
          <label htmlFor={nameFieldId}>
            Name <FaUser />
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            placeholder={'enter name'}
            className={s.input}
          />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>

        <div className={s.fieldWrapper}>
          <label htmlFor={numberFieldId}>
            Number <FaPhone />
          </label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            placeholder={'enter number'}
            className={s.input}
          />
          <ErrorMessage name="number" component="p" className={s.error} />
        </div>

        <div className={s.buttonWrapper}>
          <button className={clsx(s.button, s.submitButton)} type="submit">
            add contact
          </button>
          <button className={clsx(s.button, s.resetButton)} type="reset">
            reset
          </button>
        </div>
      </Form>
    </Formik>
  );
};
