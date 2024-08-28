import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={s.nav}>
      <NavLink to="/register">
        <span>Registration</span>
      </NavLink>
      <NavLink to="/login">
        <span>Log In</span>
      </NavLink>
    </div>
  );
};
