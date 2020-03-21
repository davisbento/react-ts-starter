import React, { useState } from 'react';
import { clearStorage, saveItem } from 'facades/localStorage';
import { IUser } from 'interfaces/IUser';

export const AuthContext = React.createContext<{
  user: IUser;
  login: (user: IUser, token: string) => void;
  logout: () => void;
}>({
  user: null,
  login: () => ({}),
  logout: () => ({})
});

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: (user: IUser, token: string) => {
          setUser(user);
          saveItem('authToken', token);
        },
        logout: () => {
          setUser(null);
          clearStorage();
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
