import React from 'react';
import { View, Text , StatusBar, StyleSheet, Button} from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.home}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Text style={styles.content}>Selamat datang di aplikasi "Atopek"</Text>
    </View>
  )
};

const styles = StyleSheet.create({    
  home: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});    
  
export default Dashboard;