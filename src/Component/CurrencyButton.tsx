import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
  
type CurrencyButtonProps = PropsWithChildren<{
    name : String, 
    value: number,
    flag : String,
}>


export const CurrencyButton = (props : CurrencyButtonProps): JSX.Element =>{
    return(
        <View style ={styles.buttonContainer}>
            <Text style ={styles.flag}>{props.flag}</Text>
            <Text style ={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
        borderWidth: 2, 
        borderRadius: 10 , 
        // backgroundColor : '#234567',
        margin : 5,
        width: 120
    }, 
    flag : {
        fontSize: 28, 
        color : "#ffffff",
        marginBottom: 4, 
    }, 
    country: {
     fontSize: 14, 
        color : "#2d3436",
        marginBottom: 4,
}
})