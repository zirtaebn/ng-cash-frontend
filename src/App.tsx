import { Routes, Route } from 'react-router-dom';

// components 
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserAccount from './pages/UserAccount';
import GetUserTransactions from './pages/GetUserTransactions';
import GetOneUserTransaction from './pages/GetOneUserTransaction';
import MakeTransaction from './pages/MakeTransaction';

// utilities
import RequireAuth from './contexts/Auth/RequireAuth';

// styles
import * as C from './App.styles'

const App = () => {

  return (
    
    <C.Container>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/:username' element={<RequireAuth><UserAccount /></RequireAuth>}/>
        <Route path='/:username/transactions' element={<RequireAuth><GetUserTransactions /></RequireAuth>}/>
        <Route path='/:username/transactions/:id' element={<RequireAuth><GetOneUserTransaction /></RequireAuth>}/>
        <Route path='/:username/transaction' element={<RequireAuth><MakeTransaction /></RequireAuth>}/>
      </Routes>      
    </C.Container>
  );
}

export default App;
