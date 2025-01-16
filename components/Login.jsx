import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Component, container } from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/login4.jpeg')}
        style={{
          width: '100%',
          height: 520,
        }}
      />
      <View style={styles.container}><Text style={{
        fontSize: 28,
        fontFamily: 'outfit bold',
        textAlign: 'center',
        marginTop: 10,
      }}>AI Travel Planner</Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 17,
          textAlign: 'center',
          color: Colors.GRAY,
          marginTop: 20
        }}> "Discover your next Adventure Effortlessly. Personalized itineraries at your fingertips. Travel smarter with AI-driven insights.</Text>

        <TouchableOpacity style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        > <Text style={{
          color: Colors.WHITE,
          textAlign: 'center',
          fontFamily: 'outfit',
          fontSize: 17,
        }}

        > Get Started </Text> </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 99,
    marginTop: '21%',
  }
})