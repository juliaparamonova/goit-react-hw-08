import clsx from 'clsx';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContactsFilteredMemo } from '../../redux/filters/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContactsFilteredMemo);
  return (
    <ul className={clsx(s.list)}>
      {contacts.map(({ id, name, number, favorite }) => (
        <li key={id} className={clsx(s.card)}>
          <Contact id={id} name={name} number={number} favorite={favorite} />
        </li>
      ))}
    </ul>
  );
};
