import { useDispatch, useSelector } from 'react-redux';

import { lazy, useEffect } from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUserThunk } from './redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  const HomePage = lazy(() => import('./pages/HomePage'));
  const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
  const LoginPage = lazy(() => import('./pages/LoginPage'));
  const ContactsPage = lazy(() => import('./pages/ContactsPage'));

  // useEffect(() => {
  //   dispatch(refreshUserThunk());
  // }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(refreshUserThunk(token));
    }
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
