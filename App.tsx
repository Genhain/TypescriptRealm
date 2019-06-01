/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Test } from './components/Test'
import { TestJS } from './components/TestJS'
import Realm from 'realm'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
})

const realm = new Realm({ schema: [Test.schema, TestJS] })

interface Props {}
export default class App extends Component<Props> {
	componentDidMount() {
    let tests = Array.from(realm.objects<Test>('Test'))
    let testsJS = Array.from(realm.objects<Test>('TestJS'))
    
    // realm.write(() => {
    //   realm.deleteAll()
    // })

    console.log(tests)
    console.log(testsJS)

		if (tests.length == 0) {
			realm.write(() => {
				realm.create('Test', {id:4, name:"abc"})
			})
    }
    
    if (testsJS.length == 0) {
			realm.write(() => {
        [{ id: 1, name: "a"}, {id: 2, name: "b"}].forEach(element => {
          realm.create('TestJS',element)  
        });
				
			})
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.tsx</Text>
				<Text style={styles.instructions}>{instructions}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
})
