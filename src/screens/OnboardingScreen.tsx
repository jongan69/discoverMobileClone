import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gaming from '../assets/images/misc/gaming.svg';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#242444',
      }}>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
            fontSize: 30,
            color: '#ee781a',
          }}>
          Welcome
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Gaming
          width={300}
          height={300}
          style={{ transform: [{ rotate: '-15deg' }] }}
        /> */}
        <Image 
        style={{ height: 300, width: 300}}
        source={require('../assets/images/logo.png')} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#ee781a',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Let's Get You Setup
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
