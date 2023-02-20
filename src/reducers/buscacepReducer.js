import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Alert } from "react-native";
import Erro from '../erro'
export const fetchCep = createAsyncThunk('cep/fetch', async (payload) => {
    console.log(payload.cep)
    const { data } = await axios.get(`https://viacep.com.br/ws/${payload.cep}/json/`)
    return data;
})


export const cepSlice = createSlice({
    name: "cep",
    initialState: {
        loading: false,
        history : [],
        error: false,
    },
    reducers: {
        setState(state, action) {
            state = { ...state, ...action.payloads }
        }
    }, extraReducers: builder => {

            builder.addCase(fetchCep.fulfilled, (state, action) => {
            state.loading = false;
            console.log({ state, action })
            state.result = action.payload
            state.history.push(action.payload)
            
        })

        builder.addCase(fetchCep.rejected, (state, action) => {
            state.loading = false;
            console.log("error")
            console.log({ state, action })
            state.error = true
            Alert.alert("Erro")
            state.error? <Text>Erro</Text> : null;
            
        })

        builder.addCase(fetchCep.pending, (state, action) => {
            console.log("loading")
            state.loading = true;
        })
    }
})

// Alert.alert("Erro!")


