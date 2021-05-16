import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const messages = [
  'What a wonderful weather!',
  `It's better to stay at home`,
  `Don't forget an umbrella`,
  `Do you want a build a snow man?`,
  `It's gonna be slippery outside`,
  `Wear a mask for your throat`,
  `Low visibility`,
  `Still good to go outside`,
];

const randomNumberForSnow = Math.round(Math.random() + 3);
console.log('randomnumber', randomNumberForSnow);

const weatherOptions = {
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#FDC830', '#F37335'],
    message: messages[6],
  },
  Clouds: {
    iconName: 'cloud-outline',
    gradient: ['#bdc3c7', '#2c3e50'],
    message: messages[7],
  },
  Thunderstorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#373B44', '#4286f4'],
    message: messages[1],
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#7474BF', '#348AC7'],
    message: messages[2],
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#7474BF', '#348AC7'],
    message: messages[2],
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    gradient: ['#83a4d4', '#b6fbff'],
    // message: messages[2],
    message: messages[randomNumberForSnow],
  },
  Atmosphere: {
    iconName: 'cloud-outline',
    gradient: ['#e43a15', '#e65245'],
    message: messages[6],
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#a8c0ff', '#3f2b96'],
    message: messages[0],
  },
  Smoke: {
    iconName: 'cloud-outline',
    gradient: ['#f12711', '#f5af19'],
    message: messages[5],
  },
  Dust: {
    iconName: 'weather-cloudy-alert',
    gradient: ['#606c88', '#3f4c6b'],
    message: messages[5],
  },
  Fog: {
    iconName: 'weather-fog',
    gradient: ['#B993D6', '#8CA6DB'],
    message: messages[6],
  },
  Sand: {
    iconName: 'weather-cloudy-alert',
    gradient: ['#3E5151', '#DECBA4'],
    message: messages[5],
  },
  Ash: {
    iconName: 'weather-cloudy-alert',
    gradient: ['#606c88', '#3f4c6b'],
    message: messages[5],
  },
  Squall: {
    iconName: 'weather-windy',
    gradient: ['#E6DADA', '#274046'],
    message: messages[6],
  },
  Tornado: {
    iconName: 'weather-tornado',
    gradient: ['#4b6cb7', '#182848'],
    message: messages[1],
  },
};

export default function Weather({
  temp,
  condition,
  tempMax,
  tempMin,
  feels_like,
}) {
  // console.log(tem);
  return (
    // <View style={styles.container}>
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient} //weatherOptions뒤에 [] 쓰는 이유는 variable이기 때문.
      style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.firstContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={150}
          color='white'
        />
        {/* <Text style={styles.weatherDesc}>{condition}</Text> */}
        <Text style={styles.temp}>{temp}°C</Text>
        <Text style={styles.title}>{condition}</Text>
      </View>
      <View style={styles.secondContainer}>
        {/* <Text style={styles.title}>'Thunderstorm'</Text> */}

        {/* <Text style={styles.message}>{weatherOptions[condition].message}</Text> */}
        <Text style={styles.message}>{weatherOptions[condition].message}</Text>
        <View style={styles.insideSecondContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.subject}>Min ↓</Text>
            <Text style={styles.subject}>{tempMin}°C</Text>
          </View>

          <View style={styles.innerContainer}>
            <Text style={styles.subject}>Max ↑</Text>
            <Text style={styles.subject}>{tempMax}°C</Text>
          </View>

          <View style={styles.innerContainer}>
            <Text style={styles.subject}> Feels Like </Text>
            <Text style={styles.subject}>{feels_like}°C</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
    // </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Dust',
    'Ash',
    'Squall',
    'Tornado',
  ]),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // weatherDesc: {
  //   fontSize: 45,
  //   color: 'white',
  // },
  temp: {
    fontSize: 36,
    color: 'white',
  },
  firstContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 45,
    marginBottom: 20,
  },
  message: {
    color: 'white',
    fontSize: 20,
  },
  insideSecondContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  innerContainer: {
    // flex: 1,
    flex: 1,
    alignItems: 'center',
  },
  subject: {
    color: 'white',
    // fontSize:
    fontWeight: 'bold',
  },
});
