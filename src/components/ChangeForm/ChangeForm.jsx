import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import s from './ChangeForm.module.css';

import { FaPhone, FaUser } from 'react-icons/fa';
import { contactSchema } from '../../helpers/contactSchema';
import { cancelEdit } from '../../redux/editSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrent } from '../../redux/contacts/selectors';
import { editContactsThunk } from '../../redux/contacts/operations';
import Swal from 'sweetalert2';

export const ChangeForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const onSubmit = (value, action) => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(editContactsThunk(value));
        dispatch(cancelEdit());
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        dispatch(cancelEdit());
        Swal.fire('Changes are not saved', '', 'info');
      }
    });

    action.resetForm();
  };

  const initialValues = useSelector(selectCurrent);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={onSubmit}
    >
      <Form className={clsx(s.form, s.change)} id="changeForm">
        <label htmlFor={nameFieldId}>
          Name <FaUser />
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          placeholder={'enter name'}
        />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>
          Number <FaPhone />
        </label>

        <Field
          type="tel"
          name="number"
          id={numberFieldId}
          placeholder={'enter number'}
        />
        <ErrorMessage name="number" component="p" />

        <button className={clsx(s.oauthButton)} type="submit">
          Edit
        </button>
        <button
          className={clsx(s.oauthButton)}
          type="button"
          onClick={() => dispatch(cancelEdit())}
        >
          Cancel
        </button>
      </Form>
    </Formik>
  );
};
