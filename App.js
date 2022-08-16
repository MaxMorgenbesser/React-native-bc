import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Hero from './Components/Hero';
import PhotoList from './Components/PhotoList';

export default function App() {
  return (
    <SafeAreaView style={styles.SafeArea}> 
    <Hero/>

      <PhotoList/>
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea:{flex:1,
  backgroundColor:"white",},
});
