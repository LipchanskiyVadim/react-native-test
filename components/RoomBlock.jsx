import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';

export default function RoomBlock() {

  let [fontsLoaded] = useFonts({
     'calibri-bold': require('../assets/fonts/calibri-bold.ttf'),
     'calibri-regular': require('../assets/fonts/calibri-regular.ttf'),
  });

	const [state, setState] = useState([
		{name: 'Living Room', id: 1},
		{name: 'Dining Room', id: 2}
	]);

  return (
	  <>
	  {
		state.map(i => (
	  <View style={styles.container} key={i.id}>
		<View style={styles.block_gallery}>
				<Text style={styles.block_gallery_title}>{i.name}</Text>
				<Image style={styles.edit} source={
					require('../assets/img/img5.svg')
				} />
			</View>
		<View style={styles.product_wrap}>
			<Text style={styles.product}>Product</Text>
			<Text style={styles.block_gallery_title}>Hardwood flooring</Text>
		</View>
		<View style={{marginTop: '5px'}}>
			<Text style={styles.product}>Calculation</Text>
			<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
				<View style={styles.calculation_wrap}>
					<Text style={styles.block_gallery_title}>2,342.2 sq.ft.</Text>
					<Text style={styles.calculation_text}>x</Text>
					<Text style={styles.block_gallery_title}>$3.25</Text>
				</View>
				<Text style={styles.block_gallery_title}>$5679.87</Text>
			</View>
		</View>
		<View style={styles.block_gallery_photos}>
			<Image style={styles.photo2} source={
				require('../assets/img/photo2.svg')
			} />
			<Image style={styles.photo2} source={
				require('../assets/img/photo2.svg')
			} />
			<Image style={styles.photo2} source={
				require('../assets/img/photo2.svg')
			} />
		</View>
	</View>
		))
	  }
	</>
  );
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 25,
		marginRight: 30,
		marginTop: 80,
	},
	block_gallery: {
		marginTop: 56,
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	block_gallery_title: {
		fontFamily: 'calibri-bold',
		fontSize: 20,
		color: '#1D5478',
		marginTop: 2,
	},
	block_gallery_text: {
		marginTop: 16,
		fontFamily: 'calibri-regular',
		fontSize: 15,
		color: '#1D5478'
	},
	product_wrap: {
		marginTop: 15,
	},
	product: {
		fontFamily: 'calibri-regular',
		fontSize: 20,
		color: '#E4E9EC',
	},
	calculation_wrap: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginLeft: 3,
		
	},
	calculation_text: {
		fontFamily: 'calibri-regular',
		fontSize: 20,
		color: '#1D5478',
		marginRight: 6,
		marginLeft: 6
	},
	edit: {
	  width: 29,
	  height: 28,
	},
});