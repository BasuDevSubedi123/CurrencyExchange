

import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

//cpmstant 

import { currencybyRupee } from './src/Constant';
import {CurrencyButton} from './src/Component/CurrencyButton'
// component 

import Snackbar from 'react-native-snackbar';


function App(): React.JSX.Element {
  const [inputValue , setInputValue ] = useState('')
  const [resultValue , setresultValue] = useState('')
  const [TargetCurrency , setTargetCurrency ] = useState('')

const  buttonpress = (targerValue : Currency) => {
    if (!inputValue){
      return Snackbar.show({
        text:"Enter vale to convert", 
        backgroundColor: "#EA7773", 
        textColor : "#000000"
      })

    }

    const InputAmount = parseFloat(inputValue)
    if (!isNaN(InputAmount)){
      const convertedValue = InputAmount / targerValue.value
      const result = `${targerValue.symbol} ${convertedValue.toFixed(2)}`
      setresultValue(result);
      setTargetCurrency(targerValue.name)
    }else{
      return Snackbar.show({
        text:"Not a valied numbet to convet ", 
        backgroundColor: "#F43287", 
        textColor : "#000000"
      })
    }           
}

  return (
    <SafeAreaView >
      <StatusBar/>

       <View>
       <View>
        <View style = {styles.inputfield}>
            <Text style = {styles.inputsymbol}>	रु. </Text>
            <TextInput
            style = {styles.inputNumber}
            maxLength={14}
            value={inputValue}
            clearButtonMode='always'
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter anound in  Rupees '
            />
          </View>
        {resultValue && (
          <Text style={styles.result}> {resultValue}</Text>
        )}


       </View>
       <View>
        <FlatList
        numColumns={3}
        data={currencybyRupee}
        keyExtractor={item => item.name}
        renderItem={({item}) =>(
          <Pressable
          onPress={() => buttonpress(item)}
          style = {
            TargetCurrency === item.name && styles.Selected
          }
          >
            <CurrencyButton  {...item}/>
          </Pressable>
        )}
        />
       </View>
       </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  inputfield : {
    display: 'flex',
    flexDirection :'row',
    // alignItems:'center',
    // backgroundColor : "#234567",
    paddingLeft: 40,
    paddingTop: 50,
    paddingBottom:30,
    
  }, 
  inputsymbol: {
    fontSize: 40 
  }, 
  inputNumber: {
    fontSize: 25 
  }, 
  result: {
    // backgroundColor: '#475909',
    height : 40,
    fontSize : 30, 
    paddingLeft : 30, 
    marginBottom: 40 
  }, 
  Selected: {
    backgroundColor: '#00ff00'
  }

});

export default App;
