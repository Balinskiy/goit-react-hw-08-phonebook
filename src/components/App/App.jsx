import Layout from 'components/Layout/Layout';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { currentThunk } from 'store/auth/operations';
import { isLoggedInSelector } from 'store/auth/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isLoggedInSelector);

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={isLoggedIn ? <Contacts /> : <Navigate to="/login" />}
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Route>
    </Routes>
  );
};

export default App;
