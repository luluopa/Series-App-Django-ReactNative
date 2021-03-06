import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function InformationPage(props){

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.textStyle}>
                Copyright 2021 luluopa
                {"\n"}
                {"\n"}
                <Text>
                Permission is hereby granted, free of charge, to any person obtaining a copy of 
                this software and associated documentation files (the "Software"), 
                to deal in the Software without restriction, including without limitation the rights 
                to use, copy, modify, merge, publish, distribute, sublicense, and/or 
                sell copies of the Software, and to permit persons to whom the Software is furnished 
                to do so, subject to the following conditions:</Text>
                {"\n"}
                {"\n"}
                <Text>The above copyright notice and this permission notice shall be 
                included in all copies or substantial portions of the Software.
                {"\n"}
                {"\n"}
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
                IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
                DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
                ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
                OTHER DEALINGS IN THE SOFTWARE.</Text>
                {"\n"}
                {"\n"}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        marginLeft: 10,
        marginRight: 10
    },
    textStyle:{
        fontSize:18
    }
})