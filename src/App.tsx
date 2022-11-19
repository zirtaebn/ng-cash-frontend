import { Routes, Route } from 'react-router-dom';

// components 
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserAccount from './pages/UserAccount';
import GetUserTransactions from './pages/GetUserTransactions';
import GetOneUserTransaction from './pages/GetOneUserTransaction';
import MakeTransaction from './pages/MakeTransaction';

// styles
import * as C from './App.styles'

const App = () => {

  return (
    
    <C.Container>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/:username' element={<UserAccount />}/>
        <Route path='/:username/transactions' element={<GetUserTransactions />}/>
        <Route path='/:username/transactions/:id' element={<GetOneUserTransaction />}/>
        <Route path='/:username/transaction' element={<MakeTransaction />}/>
      </Routes>      
    </C.Container>
  );
}

export default App;
