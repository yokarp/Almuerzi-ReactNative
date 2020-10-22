import React from 'react';
import { Alert, Text, TextInput, View, StyleSheet, Button } from 'react-native';
import useForm from '../hooks/useForm';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingHorizontal: 5,
  }
})

export default ({ navigation }) => {

  const initialState = {
    email:'',
    password:'',
  }

  const onSubmit = (values) => {
    fetch('https://serverless-dmjqkbw8z.vercel.app/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type' : 'Application/json',
      },
      body: JSON.stringify(values),
    })
    .then(x => x.text())
    .then(x =>{
      if(x === 'usuario creado con exito'){
        return Alert.alert(
          'Exito',
          x,
          [
            { text: 'Ir al inicio', onPress: () => navigation.navigate('Login') }
          ]
        )
      }
      Alert.alert(
        'Error',
        x,
      )
    })
  }

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        autoCapitalize='none'
        value={inputs.email}
        onChangeText={ subscribe('email') }
        style={styles.input}
        placeholder='Email'
      />
      <TextInput
        autoCapitalize='none'
        value={inputs.password}
        onChangeText={subscribe('password')}
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
      />
      <Button title='Enviar' onPress={handleSubmit}/>
      <Button title='Volver al inicio' onPress={() => navigation.navigate('Login') }/>
    </View>
  )
}
