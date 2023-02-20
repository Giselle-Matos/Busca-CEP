import React, { Component } from 'react';
import { View, Text, TouchableOpacity, useState, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchCep } from './reducers/buscacepReducer';
import styles from './style';
class buscaCep extends Component {

  state = { 
    cep: undefined,
    bairro: undefined,
    localidade: undefined,
    uf: undefined,
    ddd: undefined,
   }

  constructor() {
    super()
  }

  render() {
    var loop = [];
    for (let i = 0; i <10; i++){
      loop.push(
        <View key = {i}>
        <Text>{i}</Text>
        </View>
      );
    }
    console.log(this.props.cep)
    console.log(this.props.cep.history)

    return (
      <View style={styles.container}>
        <Text style = {styles.texto}>Bem vindo ao Busca-Cep</Text>
        <TextInput
          value={this.state.cep}
          onChangeText={cep => { this.setState({ cep }) }}
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o seu cep"
          placeholderTextColor="c3c3c3" />
        <TouchableOpacity
          style={styles.botaoBuscar}
          onPress={() => {
            console.log(this.state)
            this.props.dispatch(fetchCep({ cep: this.state.cep }))
          }}>
        
          <Text>Buscar</Text>

        </TouchableOpacity>
        <View>
          {this.props.cep.loading ? <ActivityIndicator /> : null}
          <Text  style = {styles.textoResultado}>
            Rua: {this.props.cep?.result?.logradouro}
          </Text>
          <Text  style = {styles.textoResultado}>
            Bairro: {this.props.cep?.result?.bairro}
          </Text>
          <Text  style = {styles.textoResultado}>
            Localidade: {this.props.cep?.result?.localidade}
          </Text>
          <Text  style = {styles.textoResultado}>
            UF: {this.props.cep?.result?.uf}
          </Text>
          <Text  style = {styles.textoResultado}>
            UF: {this.props.cep?.result?.ddd}
          </Text>
        </View>
        <ScrollView style = {styles.historico}>
          <Text>
            Historico:
          </Text>
          <View >

            {this.props.cep?.history?.map((hist, index)=> {
              return <Text key = {index}>{hist.logradouro}
              {hist.bairro}
              {hist.localidade}
              {hist.uf}
              {hist.ddd}
              </Text>
            })}
            
            
          </View>
        </ScrollView>
      </View>
    )
  }

}
// {this.props.history?.historyItems}
//linha 30 ao apertar o botao faz um dispatch pra função fetchCep (criada no buscacepReducer.js na hora de consumir a api)

// const [showError, setShowError] = useState(false);
/*function erro(showError){
    return showError ? <Text>Erro!!</Text> : null;
}*/


const mapStateToProps = ({ cep }, dispatch) => {
  return { cep, dispatch }
}

export const BuscaCep = connect(mapStateToProps)(buscaCep)


// exporta a função buscaCep e conecta ela a store

