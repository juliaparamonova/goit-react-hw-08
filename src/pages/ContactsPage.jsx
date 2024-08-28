import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrent,
  selectIsError,
  selectIsLoading,
} from '../redux/contacts/selectors';

import { ContactList, ChangeForm, SearchBox, ContactForm } from '../components';

import Loader from '../components/Loader/Loader';
import { errorMessage } from '../components/errorMessage';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const current = useSelector(selectCurrent);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className="container">
      {isLoading && <Loader />}
      {isError && errorMessage(isError)}

      <section>
        {current ? <ChangeForm /> : <ContactForm />}
        <div>
          <SearchBox />
        </div>
      </section>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
