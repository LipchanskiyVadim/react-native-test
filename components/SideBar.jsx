import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function SideBar() {

  return (
	<View style={styles.container}>
		<View style={styles.wrap}>
			<Image style={styles.img1} source={
				require('../assets/img/img1.svg')
			} />
			<Image style={styles.img2} source={
				require('../assets/img/img2.svg')
			} />
			<Image style={styles.img3} source={
				require('../assets/img/img3.svg')
			} />
			<Image style={styles.img4} source={
				require('../assets/img/img4.svg')
			} />
		</View>
		<Image style={styles.img5} source={
			require('../assets/img/img5.svg')
		} />
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
	 width: '100%',
	 marginTop: 35,
    flex: 1,
	 flexDirection: 'row',
  },
  wrap: {
	 marginLeft: 33,
    width: 191,
	 flex: 1,
	 flexDirection: 'row',
  },
  img1: {
	  width: 22.45,
	  height: 22.45,
	  marginRight: 33,
  },
  img2: {
	  width: 26.03,
	  height: 26.03,
	  marginRight: 33,
  },
  img3: {
	  width: 27.15,
	  height: 27.15,
	  marginRight: 33,
  },
  img4: {
	  width: 30.1,
	  height: 30.1
  },
  img5: {
	  width: 29,
	  height: 28,
	  marginRight: 37,
  },
});