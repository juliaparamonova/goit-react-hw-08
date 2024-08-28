import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import s from './UserMenu.module.css';
import { clearItems } from '../../redux/contacts/slice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={s.userMenu}>
      <p>Welcome, {name}</p>
      <button
        className={s.signUp}
        type="button"
        onClick={() => {
          dispatch(clearItems());
          dispatch(logoutThunk());
        }}
      >
        Logout
      </button>
    </div>
  );
};
