// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import axios from "axios";
import * as Location from "expo-location";
// import { StyleSheet, Text, View } from 'react-native';
const API_KEY = "c85f8ecd5c89d9e4f591eb9cf433b31b";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    try {
      // console.log(data);
      // const {
      // data: {
      //   data: {
      //     main: { temp },
      //     weather,
      //   },
      // },
      // }
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      console.log(data);
      // console.log('axios data', data.data);
      const {
        main: { temp, temp_max, temp_min, feels_like },
        weather,
        name,
      } = data.data;
      console.log(temp, weather, name);
      // console.log(weather);

      this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp,
        temp_max,
        temp_min,
        feels_like,
        name,
      });
      // console.log(this.state.condition);
      // console.log(temp);
    } catch (err) {
      // console.log('err');
      // console.log(err);
      // console.log(
      //   await axios.get(
      //     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      //   )
      // );
      return err;
    }
  };

  getLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        // const location = JSON.stringify(position);
        // console.log(location);
        // const { latitude, longitude } = location;
        // console.log(position.coords.latitude);
        const { latitude, longitude } = position.coords;
        // console.log(latitude, longitude);
        // console.log(location.timestamp);
        console.log("getweather");
        this.getWeather(latitude, longitude);
        // this.setState({ isLoading: false });
      });
    } catch (err) {
      return err;
    }
  };

  //{"altitude":1079.9000244140625,"heading":0,"altitudeAccuracy":12.613358497619629,"latitude":51.0387569,"speed":0,"longitude":-114.0604526,"accuracy":28.225000381469727}
  // state = {
  //   isLoading: true,
  // };
  // getLocation = async () => {
  //   try {
  //     // throw Error();
  //     // const response = await Location.requestPermissionsAsync();
  //     // console.log(response);
  //     await Location.requestPermissionsAsync();

  //     // const {
  //     //   coords: { latitude, longitutde },
  //     // } = await Location.getCurrentPositionAsync();
  //     const location = await Location.getCurrentPositionAsync();
  //     console.log(location);
  //     // this.setState({ isLoading: false });
  //     // console.log(coords.latitude, coords.longitude);

  //     // Send to API and get weather!
  //   } catch (error) {
  //     // Alert.alert("Can't find you.", 'So sad');
  //     Alert.alert(error);
  //   }
  // };

  componentDidMount() {
    console.log("componentDidMount");
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, temp_max, temp_min, feels_like, name } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        name={name}
        temp={Math.round(temp)}
        condition={condition}
        tempMax={Math.round(temp_max)}
        tempMin={Math.round(temp_min)}
        feels_like={Math.round(feels_like)}
      />
    );
  }
}
