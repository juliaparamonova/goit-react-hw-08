import clsx from 'clsx';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';

import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { onEdit } from '../../redux/editSlice';
import { deleteContactsThunk } from '../../redux/contacts/operations';
import Swal from 'sweetalert2';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const card = { id, name, number };

  return (
    <>
      <button
        className={clsx(s.edit)}
        onClick={() => {
          dispatch(onEdit(card));
        }}
      >
        <a href="#header">
          <FaPencilAlt />
        </a>
      </button>

      <p className={clsx(s.card__title)}>
        <FaUser className={clsx(s.iconUser)} />
        {name}
      </p>
      <p className={clsx(s.card__subtitle)}>
        <FaPhoneAlt className={clsx(s.iconNumber)} />
        {number}
      </p>
      <button
        className={clsx(s.signUp)}
        type="button"
        onClick={() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
          }).then(result => {
            if (result.isConfirmed) {
              dispatch(deleteContactsThunk(id));
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
