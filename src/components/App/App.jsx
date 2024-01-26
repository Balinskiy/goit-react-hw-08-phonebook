import Layout from 'components/Layout/Layout';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { currentThunk } from 'store/auth/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Route>
    </Routes>
  );
};

export default App;
