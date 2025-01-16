
import React, { useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useRouter, useNavigation } from 'expo-router';
import { Colors } from './../../../constants/Colors';

export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (

        <View style={{
            backgroundColor: Colors.WHITE,
            height: '100%',

        }}>
            <TouchableOpacity 
            onPress={()=>router.back()}
            style={{
                marginTop:20,
            }}><Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>
           <View style={{
            marginTop:30,
            marginLeft:10,
           }}><Text style={{
                fontFamily: 'outfit bold',
                fontSize: 20,
            }}>Create New Account</Text>
            </View> 
            <View style={{
                marginTop: 30,
                marginLeft: 10,
                marginRight: 10
            }}>
                <Text style={{ fontFamily: 'outfit' }}>Full Name</Text>
                <TextInput style={styles.input} placeholder='Enter Full Name' />
            </View>

            <View style={{
                marginTop: 30,
                marginLeft: 10,
                marginRight: 10
            }}>
                <Text style={{ fontFamily: 'outfit' }}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Password' />
            </View>
            <View style={{
                marginTop: 30,
                marginLeft: 10,
                marginRight: 10
            }}>
                <Text style={{ fontFamily: 'outfit' }}>Email</Text>
                <TextInput style={styles.input} placeholder='Enter Email' />
            </View>

            <View style={{
                marginTop: 30, marginLeft: 10,
                marginRight: 10
            }}>
                <Text style={{ fontFamily: 'outfit' }}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Password' />
            </View>
            <TouchableOpacity
                style={{
                    padding: 20,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 15,
                    marginTop: 50,
                    marginLeft: 10,
                    marginRight: 10
                }}
            >
                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.WHITE,
                    textAlign: 'center',
                }}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.replace('auth/sign-In')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 15,
                    marginTop: 50,
                    borderColor: Colors.GRAY,
                    borderWidth: 1,
                    marginRight: 10,
                    marginLeft: 10,
                }}
            >
                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.PRIMARY,
                    textAlign: 'center',
                }}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'outfit',
    },
});