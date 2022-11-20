import { useContext } from 'react';

// components
import Login from '../../pages/Login';

// utilities
import { AuthContext} from './AuthContext';

const RequireAuth = ({ children }: { children:JSX.Element }) => {
  
  const { authenticated } = useContext(AuthContext);
  
  if (!authenticated) {
    
    return <Login />
  }

  return children
}

export default RequireAuth;

