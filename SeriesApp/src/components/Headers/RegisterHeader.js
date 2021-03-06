import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors_services from '../../utils/Colors_layout';
import Size_services from '../../utils/Size_layout';

const RegisterHeader = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.singup}>Register</Text>
            <View>
                <Text style={style.welcome}>Sing up!</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    singup:{
        color:`${Colors_services.Get_ColorsPack()["Roxo_escuro"]}`,
        fontSize: Size_services.Get_SizePack()["layout_form_height"]
    },
    welcome:{
        color:`${Colors_services.Get_ColorsPack()["Roxo_claro"]}`
    },
    container:{
        flex:2,
        justifyContent: 'center'
    }
})

export default RegisterHeader;