import { Route, Routes } from 'react-router-dom';
import Register from '../pages/register';
import Home from '../pages/home';

export default function AllRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
