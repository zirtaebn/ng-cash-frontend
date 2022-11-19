import { createContext } from 'react';

// utilities
import { UserResponse } from '../../@types/UserResponse';
import { UserRequest } from '../../@types/UserRequest';

export type AuthContextType = {

    handleSignup: ({ username, password } : UserRequest) => Promise<UserResponse>,
    handleLogin: ({ username, password } : UserRequest) => Promise<UserResponse>,
    handleLogout: () => void,
}


export const AuthContext = createContext<AuthContextType>(null!!);