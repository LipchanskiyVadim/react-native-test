import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';

export default function Footer() {

  let [fontsLoaded] = useFonts({
     'calibri-regular': require('../assets/fonts/calibri-regular.ttf'),
  });

  return (
	<View style={styles.container}>
		<View style={styles.wrap}>
			<Text style={styles.text}>Total: </Text>
			<Text style={styles.text2}>$17,039.61</Text>
		</View>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
		minWidth: 325,
		minHeight: 90,
		backgroundColor: '#1D5478',
		marginTop: 75,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 22,
  },
  wrap: {
	flex: 1,
	flexDirection: 'row',
	alignItems: 'flex-end'
  },
  text: {
		fontFamily: 'calibri-regular',
		fontSize: 20,
		color: '#F8FBFD',
		marginBottom: 3
  },
  text2: {
		fontFamily: 'calibri-regular',
		fontSize: 30,
		color: '#F8FBFD',
  }
});