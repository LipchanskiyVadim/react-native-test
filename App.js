import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, SafeAreaView, Image } from 'react-native';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Gallery from './components/Gallery';
import RoomBlock from './components/RoomBlock';
import Footer from './components/Footer';

export default function App() {
  return (
    <SafeAreaView>
		<Header />
		<SideBar />
		<Gallery />
		<RoomBlock />
		<Footer />
    </SafeAreaView>
  );
}