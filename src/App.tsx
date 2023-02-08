import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Routes from './routes';
import { Global } from './styles/globalStyle';

export default function App() {
  return (
    <Global>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Header />
    </Global>
  );
}
