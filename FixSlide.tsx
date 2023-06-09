import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  I18nManager,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppIntroSlider from 'react-native-app-intro-slider';
import 'react-native-gesture-handler';

// Force RTL
I18nManager.forceRTL(false);

const data = [
  {
    title: 'Open 24 Hours',
    text: 'We are open 24 hours a day, 7 days a week, 365 days a year. \nKiamat pun tak tutup.',
    image: require('./assets/intro/24-hours.png'),
    bg: '#1258DC',
  },
  {
    title: 'Free Consultation',
    text: 'Free disease consultation with our doctors.\nSelama belum meninggal.',
    image: require('./assets/intro/support.png'),
    bg: '#FB9902',
  },
  {
    title: 'Free Delivery',
    text: 'Free delivery for customers everywhere.\nSelama masih di dunia.',
    image: require('./assets/intro/delivery-bike.png'),
    bg: '#63BF22',
  },
];

type Item = (typeof data)[0];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginHorizontal: 18,
    fontSize: 18,
  },
  title: {
    fontSize: 34,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 0, 0, 1)',
    color: '#FFF',
  },
});

// Splash Screen
const SplashScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009688',
      }}>
      <StatusBar translucent backgroundColor="#009688" />
      <Image
        source={require('./assets/img/launch_screen.png')}
        style={{width: 250, height: 250}}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#FFF',
        }}>
        Atopek
      </Text>
    </View>
  );
};

// Home Screen
const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Text>Aplikasi Atopek</Text>
    </View>
  );
};

// Onboarding Screen
class Onboarding extends React.Component {
  state = {
    showRealApp: false,
  };

  _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  _renderPrevButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.button}>Prev</Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.button}>Next</Text>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.button}>Done</Text>
      </View>
    );
  };

  _onDone = () => {
    this.setState({showRealApp: true});
  };

  render() {
    if (this.state.showRealApp) {
      return <HomeScreen />;
    } else {
      return (
        <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            showPrevButton
            onDone={this._onDone}
            data={data}
          />
        </View>
      );
    }
  }
}

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
