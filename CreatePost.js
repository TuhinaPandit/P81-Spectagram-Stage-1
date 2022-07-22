//creating simple screen
//importing components 
//rendering (processing and outputing) text with styling to be centered
import React, {Component} from 'react';
import {Text,View} from 'react-native';
export default class CreatePost extends Component{
    render(){
        return(
            <View style ={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <Text>Create Post</Text>
            </View>
        )
    }
}