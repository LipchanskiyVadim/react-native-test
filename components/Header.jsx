import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';

export default function Header() {

  let [fontsLoaded] = useFonts({
     'calibri-regular': require('../assets/fonts/calibri-regular.ttf'),
  });

  return (
	<View style={styles.container}>
		<View style={styles.header_wrap}>
			<View style={styles.header_wrap_firstLine}>
				<Image style={styles.icon1} source={
					require('../assets/img/header_home.svg')
				} />
				<Text style={styles.title}>Projects</Text>
			</View>
				<Image style={styles.icon2} source={
						require('../assets/img/header_close.svg')
					} />
		</View>
		<View style={styles.header_nav}>
			<View>
				<Text style={styles.header_nav_text}>Projects</Text>
				<Image style={styles.icon3} source={
					require('../assets/img/header_active.svg')
				} />
			</View>
			<Text style={styles.header_nav_text}>Services</Text>
			<Text style={styles.header_nav_text}>Clients</Text>
			<Text style={styles.header_nav_text}>Settings</Text>
		</View>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 325,
    height: 135,
    backgroundColor: '#1D5478',
	 paddingTop: 26,
	 paddingLeft: 30,
	 paddingRight: 30,
  },
  icon1: {
   width: 16.09,
   height: 16.76
  },
  icon2: {
	width: 24,
	height: 24
  },
  icon3: {
	position: 'absolute',
	bottom: -2,
	left: -6,
	width: 56.07,
	height: 14.56
  },
  header_wrap: {
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-between',
	height: 25,

  },
  header_wrap_firstLine: {
	flex: 1,
	flexDirection: 'row',
	width: 131,
	height: 25,
	alignItems: 'center',
	},
	title: {
		fontFamily: 'calibri-regular',
		fontSize: 27,
		color: '#F9F5F5',
		marginLeft: '29px'
	},
	header_nav: {
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 20,
	},
	header_nav_text: {
		color: '#CEE0F4',
		fontFamily: 'calibri-regular',
		fontSize: 18,
	}
});