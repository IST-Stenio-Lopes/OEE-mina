// contexto é a forma de criar váriaveis globais entre components do react
// importação do react e hooks
import jwtDecode from 'jwt-decode';
import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

// importação da coneção da api
import api from '../../services/api';

interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  /*   avatar_url: string;
    role: string;
    company_id: string; */
}

// define o tipo dos estados de autenticação
interface AuthState {
  token: string;
  user: IUser;
  refresh_token: string;
}

// define o tipo das credenciais do signin
interface SingInCredentials {
  email: string;
  password: string;
}
type AuthProviderProps = {
  children: ReactNode;
}

// define o tipo dos dados do contexto de autenticação
interface AuthContextData {
  user: IUser;
  signIn(crenditials: SingInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

interface DecodedProps {
  [key: string]: string | Number;
  exp: number;
}
// cria o contexto de autenticação
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// cria o provedor do contexto
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // define o estado inicial dos dados
  const [data, setData] = useState<AuthState>(() => {
    // busca no local storage os dados
    const token = localStorage.getItem('@Oee:token');
    const user = localStorage.getItem('@Oee:user');
    const refresh_token = localStorage.getItem('@Oee:refresh_token');

    // se houver dados no storage, retorna um objeto com esses dados
    if (token && user && refresh_token) {
      const decoded: DecodedProps = jwtDecode(token);
      console.log("Produzindo")
      const expirationTime = (decoded.exp * 1000);

      if (Date.now() >= expirationTime) {
        console.log("qualquer coisa")
        // retorna um objeto vazio
        return {} as AuthState;
      }

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user), refresh_token };
    }

    // retorna um objeto vazio
    return {} as AuthState;

  });

  // função de signin usando callback
  const signIn = useCallback(async ({ email, password }: any) => {


    // faz a coneção da rota passando os dados
    //const response = await api.post('/sessions', { email, password });

    const responseSession = await api.post('/dashboard/sessions', { email, password });
    // guardar os dados da resposta
    const { token, refresh_token, user } = responseSession.data;

    // salva os dados no local storage
    localStorage.setItem('@Oee:token', token);
    localStorage.setItem('@Oee:refresh_token', refresh_token);


    api.defaults.headers.common.authorization = `Bearer ${token}`;
    localStorage.setItem('@Oee:user', JSON.stringify(user));
    console.log(responseSession.data);

    const responseProfile = await api.get('users/dashboard/profile');

    const profile = responseProfile.data;
    localStorage.setItem('@Oee:role', profile.role);

    console.log(profile);
    console.log(profile.role);

    // const responseUser = await api.get('/dashboard/profile');
    // const requestToken = responseUser.data;

    // localStorage.setItem('@Oee:user', JSON.stringify(profile));

    // // atualiza o estado dos dados
    setData({ token: responseSession.data.token, user: responseSession.data.user, refresh_token: responseSession.data.refresh_token });
    /* console.log(token);
    console.log(user);
    console.log(refresh_token); */
  }, []);

  // função de signout usando callback
  const signOut = useCallback(() => {
    // limpa os dados do local storage
    localStorage.removeItem('@Oee:token');
    localStorage.removeItem('@Oee:user');
    localStorage.removeItem('@Oee:refresh_token');

    // atuliaza o estado com um objeto vazio
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback((user: IUser) => {
    // salva os dados no local storage
    localStorage.setItem('@Oee:user', JSON.stringify(user));

    setData({
      token: data.token,
      user,
      refresh_token: data.refresh_token,
    });
  },
    [setData, data.token, data.refresh_token]);

  // retorna o provider envolvendo os outros components
  return (
    <AuthContext.Provider value={{
      user: data.user, signIn, signOut, updateUser,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// função para retornar o contexto de autenticação da aplicação
function useAuth(): AuthContextData {
  // atribui o contexto ao hook
  const context = useContext(AuthContext);

  // se não existir retorna um erro
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  // retorna o contexto
  return context;
}

// exporta o provedor e o hook de autenticação
export { AuthProvider, useAuth };
