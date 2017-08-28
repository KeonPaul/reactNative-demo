import React, { Component } from 'react';
import { AppRegistry,Text,View } from 'react-native';

// export default class HelloWorldApp extends Component {
//     render() {
//          return (
//              <Text>Hello World </Text>
//          );      
//     }
// }

class Greeting extends Component {
    render () {
        return (
            <Text>Hello {this.props.name} </Text>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render () {
        return (
            <View style = {{alignItems: 'center'}}>
                < Greeting name='Rexxar'/>
                < Greeting name='Jaina'/>
                < Greeting name='Valeera'/>
            </View>
        );
    }
}


AppRegistry.registerComponent('AwesomeProject',() => LotsOfGreetings);
