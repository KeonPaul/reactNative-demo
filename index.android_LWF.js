import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View style={{
                flex:1, 
                flexDirection:'column',
                justifyContent: 'flex-start',
                alignItems:'stretch'}}>
                <View style={{width:50,height:50,backgroundColor:'yellow'}}/>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
            </View>

            // <View style={{flex: 1}}>
            //     <View style={{flex: 1, backgroundColor:'powderblue'}}/>
            //     <View style={{flex: 2, backgroundColor:'skyblue'}}/>
            //     <View style={{flex: 3, backgroundColor:'steelblue'}}/>
            // </View>

            
        );
    }
}

AppRegistry.registerComponent('AwesomeProject',()=>FixedDimensionsBasics);