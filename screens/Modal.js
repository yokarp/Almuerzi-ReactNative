import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useFetch from '../hooks/useFetch';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ({ navigation }) => {
  const id = navigation.getParam('id')
  const { loading, data } = useFetch(`https://serverless-blush-nine.vercel.app/api/meals/${id}`)
  console.log(id);
  console.log(data);
  return (

    <View style={styles.container}>
      {loading ? <Text>Cargando...</Text> :
        <>
          <Text>{data._id}</Text>
          <Text>{data.name}</Text>
          <Text>{data.desc}</Text>
        </>
      }
    </View>
  )
}
