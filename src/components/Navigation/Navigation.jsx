import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/">
        <span>Home</span>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts">
          <span>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};
