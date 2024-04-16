import { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable, Image} from 'react-native';

export default function App() {

  const [cpf, setCpf] = useState('')
  const [cpfField, setCpfField] = useState('')
  const handleSendName = () => {
    setCpf(cpfField)
  }
  const handleClear = () => {
    setCpf('')
    setCpfField('')
  }

  return (
    <SafeAreaView style={styles.tudo}>
      {cpf == '' &&
        <>
          <Image source={require('./assets/preto.png')} style={styles.image}/>
          <TextInput 
            style={styles.input}
            placeholder='CPF'
            placeholderTextColor='#999'
            value={cpfField}
            onChangeText={text => setCpfField(text)}
          />
          <Pressable onPress={handleSendName} style={styles.bt} >
            <Text style={styles.log}>LOGAR</Text>
          </Pressable>
        </>
      }
      {cpf == '000.000.000-00' &&
        <>
        <Image source={require('./assets/colorido.png')} style={styles.image}/>
          <Text style={styles.logar}>Você esta logando com CPF {cpf}?</Text>
          <Pressable onPress={handleClear} style={styles.bt2} >
            <Text style={styles.log}>CPF NÃO É {cpf}</Text>
          </Pressable>
        </>
      }
      {cpf != '' &&
        <>
          <Pressable onPress={handleClear} style={styles.bt3} >
            <Text style={styles.log}>CPF NÃO É {cpf}</Text>
          </Pressable>
        </>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  tudo:{
    flex: 1
  },
  input: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 10,
    borderWidth: 4
  },
  log:{
    color: '#fff',
  },
    image:{
    width: 80,
    height: 80,
    marginTop: 190,
    marginLeft: 120,
    flexDirection: 'row',
    textAlign: 'center',
  },
  logar:{
    marginLeft: 25
  },
  bt:{
    backgroundColor: '#000',
    color: '#fff',
    paddingLeft: 10,
    width: 65,
    paddingBottom:0,
    marginLeft:130,
    borderRadius: 2,
    flexDirection: 'row',
    textAlign: 'center',
    alignSelf: 'flex-start',   
  },
  bt2:{
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 10,
    marginLeft: 60,
    paddingLeft: 10,
    borderRadius: 2,
    marginRight: 90,
    paddingTop: 5,
    paddingBottom: 5 
  },
  bt3:{
    backgroundColor: '#fff',
    color: '#fff',
    marginTop: 10,
    marginLeft: 100,
    paddingLeft: 10,
    borderRadius: 2,
    marginRight: 130,
    paddingTop: 5,
    paddingBottom: 5   
  },

})


