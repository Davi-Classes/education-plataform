import { createContext, useEffect, useState } from "react";
import { TOKEN_KEY } from "../lib/token";
import type { User } from "../services/auth-service";
import authService from "../services/auth-service";

type AuthContextProps = {
  user?: User;
  token: string | null;
  setAccessToken: (token: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider(
  { children }: React.PropsWithChildren
) {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));

  const setAccessToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
    setToken(token)
  }

  useEffect(() => {
    authService.getUser().then((user) => setUser(user))
  }, [token])

  return (
    <AuthContext.Provider value={{
      user,
      token,
      setAccessToken
    }}>
      {children}
    </AuthContext.Provider>
  )
}