import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';

// function main
export default function App() {
  const [peso, setPeso] = useState(''); //armazena o peso
  const [altura, setAltura] = useState('');

  function executarCalculo() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if (imc < 18.6)
      alert('Você está abaixo do peso - IMC = ' + imc.toFixed(2));
    else if (imc >= 18.6 && imc < 24.9)
      alert('Você está com o peso ideal - IMC = ' + imc.toFixed(2));
    else if (imc >= 24.9 && imc < 34.9 )
      alert('Você está com levemente acima do peso - IMC = ' + imc.toFixed(2));
    else
      alert('Você está OBESO BALOFO! - IMC = ' + imc.toFixed(2));

    // limpar variaveis
    setPeso('')
    setAltura('')
  }
  
  return(
    <View style={estilo.container}>
      <Text style={estilo.title}> Calcule seu IMC </Text>

      {/* input do peso */}
      <TextInput
        style={estilo.input}
        value={peso} //Valor dentro do componente
        onChangeText={ (peso) => setPeso(peso) } // toda vez que o campo muda ele é salvo
        placeholder="Peso (Kg)"
        keyboardType="numeric" //usar apenas teclado numerico
      />

      {/* input da altura */}
      <TextInput
        style={estilo.input}
        value={altura} //Valor dentro do componente
        onChangeText={ (altura) => setAltura(altura) } // toda vez que o campo muda ele é salvo
        placeholder="Altura (cm)"
        keyboardType="numeric" //usar apenas teclado numerico
      />

      <TouchableOpacity style={estilo.botao} onPress={executarCalculo}>
        <Text style={estilo.textoBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

// stylesheets
const estilo = StyleSheet.create({
  
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  },
  botao: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#1F2A40',
    padding: 10
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 25
  }

});