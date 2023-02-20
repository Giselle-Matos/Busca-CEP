import {configureStore} from '@reduxjs/toolkit';
import { cepSlice } from '../reducers/buscacepReducer';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer : {
            cep: cepSlice.reducer
        },
        middleware: [thunk]
    })
    // middleware serve para retornar funções ao inves de apenas ações

    // usa o slice criado para configurar a store, que utiliza o reducer para executar funções 
