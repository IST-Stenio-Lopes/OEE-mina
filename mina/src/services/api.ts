import axios from 'axios';

import { AlertActions, useAlert } from '../contexts/alert/alert';

/* import { Service } from 'axios-middleware';

export const service = new Service(axios); */

// const baseURL = 'http://deploy.fcaadm.com.br:3333';

/* const { dispatch } = useAlert();

        const handleAlertSetValues = (type: string, title: string, msg: string) => {
            dispatch({
              type: AlertActions.setVisibility,
              payload: true,
            });
            dispatch({
              type: AlertActions.setType,
              payload: type,
            });
            dispatch({
              type: AlertActions.setTitle,
              payload: title,
            });
            dispatch({
              type: AlertActions.setMsg,
              payload:ya msg,
            });
          }; */
export const socketServer = "http://senaisolucoes.com.br:2034";
const baseURL = 'http://senaisolucoes.com.br:2033';

//export const socketServer = "http://192.168.1.191:2034";
//const baseURL = 'http://192.168.1.191:2033'; 

// cria uma conexão
const api = axios.create({
    baseURL,
    timeout: 1000 * 10,
    
  });

  api.interceptors.request.use(
    function (config) {
/*       //console.log(`Request at url: ${config.baseURL}${config.url}`);
      //console.log(`Method: ${String(config.method).toUpperCase()}`); */
      if (config.method === 'post') {
        //console.log(config.data); talvez remover comentario a fins de verificação dos dados
      }
      return config;
    },
    function (error) {
      //console.log(error.data.response); talvez remover comentario a fins de verificação dos dados
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    function (response) {
/*       //console.log(`Response Status: ${response.status}`);
      
      //console.log(response.data); */
      return response;
    },
    function (error) {
      //console.log(error);
     /*  //console.log(error.response.data); */
      // throw new Error(error.response.data)
      return Promise.reject(error);
    },
  );

  
// exporta a conexão
export default api;