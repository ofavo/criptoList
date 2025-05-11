import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import RouterScreen from './src/screens/router';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el modo claro/oscuro

  useEffect(() => {


    setIsDarkMode(false); // Forzamos modo claro para este ejemplo.
  }, []);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF', // Fondo oscuro o claro
    },
    safeArea: { // <- Importante:  SafeAreaView
      flex: 1,
    
     
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#121212' : '#FFFFFF'}
        translucent={true}
      />
      <SafeAreaView style={styles.safeArea}>
        
          <RouterScreen />
       
      </SafeAreaView>
    </View>
  )
}
export default App;
