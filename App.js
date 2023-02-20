import React, {Component} from 'react';
import { View} from 'react-native';
import { BuscaCep } from './src/buscaCepC';
import { store } from "./src/store/store"
import { Provider } from 'react-redux';
// passar a view de busca de cep e mostra logradouro em outro componente 

class ReduxAsyncApp extends Component{
  
  render (){
    console.log({store})
    return(
      <View>
        <Provider store={store}>
          <BuscaCep/>
        </Provider> 
      </View>
    );
  }
}
// provider traz os dados da api. Provém os dados 
// BuscaCep é a renderização do codigo 
// buscaCep tem que ficar dentro da tag de provider pq a classe so 
// conseque renderizaar um elemento por vez.

export default ReduxAsyncApp;
