import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';

import {insertString, read} from './DB';

const ACTIONS = {
  SALVAR : "SALVAR"
};

const reducer = (state, action) => {
  switch (action) {
    case ACTIONS.SALVAR : return state = 1;
    default : return state = 0;
  }
}

const App = () => {

  let [texto, setTexto] = useState('');

  let [senha, setSenha] = useState('');

  const handleSalvar = () => {

    insertString('texto', texto, (errors) => {
      setTexto('');
    });

    insertString('senha', senha, (errors) => {
      setSenha(''); 
    });

    alert('Cadastro realizado!');
  }

  const handleRecuperar = () => {
    read('texto', (errors, data) => { setTexto(data); });
    read('senha', (errors, data) => { setSenha(data); });
    alert('Dados recuperados');

  }

  return (
    <SafeAreaView style={{padding : 16}}>
      <Text>Página de cadastro</Text>
      <Text>Insira o nome de usuário: </Text>
      <TextInput 
        onChangeText={ (txt) => setTexto(txt) }
        style={{ borderColor : '#ccc', borderWidth : 1, marginBottom : 8 }}
        value={texto} />
      <Text>Insira a senha: </Text>
      <TextInput 
        onChangeText={ (senha) => setSenha(senha) } secureTextEntry={true}
        style={{ borderColor : '#ccc', borderWidth : 1, marginBottom : 8 }}
        value={senha} />

      <Button title="Salvar" onPress={ () => handleSalvar() } />
    </SafeAreaView>
  );
};

export default App;