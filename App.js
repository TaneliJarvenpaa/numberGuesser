import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
const randomnumber = Math.floor(Math.random() * 100) + 1;
export default function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const [showGuessText, setShowGuessText] = useState(true);
  const [guessCount, setGuessCount] = useState(0);
  

  const guessNumber = (text) => {
    
    const num = parseInt(text);
    setShowGuessText(false);

    if (num < randomnumber) {
      setResult("Your guess " + num + " is too low");
    } else if (num > randomnumber) {  
      setResult("Your guess " + num + " is too high");}
      else if(num===randomnumber){
      alert("You guessed the number in " + (guessCount + 1) + " guesses.");
    }
    setNumber("")
    console.log(number+"  numero")
    console.log(randomnumber+"   randomnumero")
    console.log(result+"   result")
    setGuessCount(guessCount + 1);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.guessText}>{result}</Text>
      {showGuessText && (<Text style={styles.guessText}>Guess a number between 1-100</Text>)}
      <View style={styles.input_container}>
        <TextInput
          keyboardType="numeric"
          placeholder=""
          onChangeText={(text) => setNumber(text)}
          value={number}
          style={{ fontSize: 18, color: 'black' }}
        />
      </View>
      <Button onPress={() => guessNumber(number)} title="Make Guess" />  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    width: 200,
    borderWidth: 1,
    marginBottom: 10,
  },
  guessText: {
    fontSize: 24,
    color: 'blue',
  },
  input_container: {
    borderColor: 'black',
    width: 70,
    borderWidth: 3,
    borderColor: 'cyan',
    marginBottom: 10,
  },
});
