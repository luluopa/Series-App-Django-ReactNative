import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CETA_DIREITA_IMAGE } from '../../utils/Images';
import Size_services from "../../utils/Size_layout";

import * as navigation from '../../utils/Navigate';

const IMAGE_ICON_SIZE = 25;
const IMAGE_ICON_OUT_SIZE = 18;

export default function SettingsItens(props){

    const { title } = props.data.item;
    const {  png_data } = props.data.item;
    const { action } = props.data.item;

    const onTouch = () => {
        if (action.page !== null){
            try{
                navigation.navigate(action.page);
            }
            catch{
                console.log("wrong page passing through data");
            }
        }
        else if (action.method !== null){
            try{
                action.method();
            }
            catch(error){
                console.log(error + " wrong method passing through data");
            }
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchContainer} onPress={() => {onTouch()}}>
                <Image 
                    source={png_data}
                    style={styles.sizeImage}
                />
                <Text style={styles.textStyle}>{title}</Text>
                <Image 
                    source={CETA_DIREITA_IMAGE}
                    style={styles.sizeImageOut}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingRight: 15,
        paddingLeft: 15,
    },
    touchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "stretch",
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    textStyle:{
        flex: 8,
        fontSize: 20,
        fontWeight: '200'
    },
    sizeImage:{
        width: IMAGE_ICON_SIZE,
        height: IMAGE_ICON_SIZE,
        marginRight: 20
    },
    sizeImageOut:{
        width: IMAGE_ICON_OUT_SIZE,
        height: IMAGE_ICON_OUT_SIZE,
    },
    imageView:{
    }
})