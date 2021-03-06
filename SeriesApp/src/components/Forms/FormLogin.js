import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useSelector, useDispatch } from 'react-redux';
import { OnchangeUsername, OnchangePassword } from '../../store/counterslice';

import Colors_services from '../../utils/Colors_layout';
import Size_services from '../../utils/Size_layout';

import Warning from '../utils/Warning';
import store from '../../store/store';

const FormLogin = (props) => {
    const username = useSelector((state) => state.login_reducer.username);
    const password = useSelector((state) => state.login_reducer.password);
    const dispatch = useDispatch();

    const OnUsernameChange = (value) => {
        dispatch(OnchangeUsername({type:'username_change', payload:value}));
    }

    const OnPasswordChange = (value) => {
        dispatch(OnchangePassword({type:'password_change', payload:value}));
    }

    return(
            <View style={style.container}>
                {props.error ? <Warning error_message={props.error_message}/> : null}

                <View style={style.view_input}>
                    <Text style={style.input}>Username</Text>
                    <TextInput
                        value={username.payload}
                        onChangeText={(value) => OnUsernameChange(value)}
                        multiline={true}
                        style={style.textinput}
                    />
                </View>
                <View style={style.view_input}>
                    <Text style={style.input}>Password</Text>
                    <TextInput
                        placeholder="********"
                        value={password.payload}
                        secureTextEntry={true}
                        onChangeText={(value) => OnPasswordChange(value)}
                        style={style.textinput}
                    />
                </View>
            </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 0.2,
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10
    },
    view_input:{
        flex:1,
        justifyContent: 'center',
        padding:5,
    },
    textinput:{
        backgroundColor: `${Colors_services.Get_ColorsPack()["Cinza_claro"]}`,
        padding:5,
        borderRadius: 10,
        minHeight: Size_services.Get_SizePack()["layout_form_height"]
    },
    input:{
        color: `${Colors_services.Get_ColorsPack()["Roxo_claro"]}`,
        marginBottom: 5
    }
})

export default FormLogin;