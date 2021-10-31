import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';

export default function Gallery() {

  let [fontsLoaded] = useFonts({
     'calibri-bold': require('../assets/fonts/calibri-bold.ttf'),
	  'calibri-regular': require('../assets/fonts/calibri-regular.ttf'),
  });

  return (
	<View style={styles.container}>
		<View style={styles.wrap}>
			<Text style={styles.title}>Name of project</Text>
			<Text style={styles.progress}>In progress</Text>
		</View>
		<Text style={styles.subTitle}>Toronto, ON</Text>
		<View>
			<Image style={styles.photo, {
            transform: [{ translateX: '-50%', translateY: '-50%' }]
          }} source={
				require('../assets/img/photo.svg')
			} />
		</View>
		<View>
			<View style={styles.block_gallery}>
				<Text style={styles.block_gallery_title}>Bedroom</Text>
				<Image style={styles.edit} source={
					require('../assets/img/img5.svg')
				} />
			</View>
			<Text style={styles.block_gallery_text}>
				Lorem ipsum dolor sit amet, consetetur sadipscing 
				elitr, sed diam nonumy eirmod tempor invidunt 
				ut labore .
			</Text>
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
				<Text style={styles.block_gallery_title}>$5,679.87</Text>
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
  );
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 25,
		marginRight: 30,
	},
	wrap: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 54
	},
	title: {
		fontFamily: 'calibri-bold',
		fontSize: 25,
		color: '#1D5478',
	},
	subTitle: {
		fontFamily: 'calibri-regular',
		fontSize: 20,
		color: '#1D5478',
		marginTop: 7,
		marginLeft: 1
	},
	progress: {
		fontFamily: 'calibri-regular',
		fontSize: 12,
		color: '#1D5478'
	},
	photo: {
		width: 349,
		height: 196,
		position: 'relative',
		top: '50%',
		left: '50%',
		marginTop: 30,
	},
	edit: {
	  width: 29,
	  height: 28,
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
		marginTop: 2
	},
	block_gallery_text: {
		marginTop: 16,
		fontFamily: 'calibri-regular',
		fontSize: 15,
		color: '#1D5478'
	},
	product_wrap: {
		marginTop: 15,
		marginLeft: 3,
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
	photo2: {
		width: 83,
		height: 83
	},
	block_gallery_photos: {
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 25
	}
});