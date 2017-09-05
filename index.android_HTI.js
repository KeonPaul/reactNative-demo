import React, { Component } from 'react';
import { AppRegistry, View ,Text,TextInput} from 'react-native';

export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text:''};
    }
    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput style={{height:40}} placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}/>
                <Text style={{padding:10, fontSize:42}}> 
                {this.state.text.split(' ').map((word)=> word && '🍕').join(' ')}
                </Text>
            </View>

            // <View style={{flex: 1}}>
            //     <View style={{flex: 1, backgroundColor:'powderblue'}}/>
            //     <View style={{flex: 2, backgroundColor:'skyblue'}}/>
            //     <View style={{flex: 3, backgroundColor:'steelblue'}}/>
            // </View>

            
        );
    }
}

AppRegistry.registerComponent('AwesomeProject',()=>PizzaTranslator);