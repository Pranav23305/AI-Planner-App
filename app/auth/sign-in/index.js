import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter, useNavigation } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {
    const router = useRouter();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View style={{
            padding: 25,
            paddingTop: 30,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}>
            <TouchableOpacity
                onPress={() => router.back()}
                style={{
                marginTop: 20,
                }}><Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>
            <View style={{
                marginTop:10,
            }}><Text style={{
                fontFamily: 'outfit bold',
                fontSize: 30,
            }}>Let's Sign You In</Text>
            </View>
            <Text style={{
                fontFamily: 'outfit bold',
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 20,
            }}>Welcome Back</Text>
            <Text style={{
                fontFamily: 'outfit bold',
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 10,
            }}>You've been missed</Text>

            <View style={{ marginTop: 50 }}>
                <Text style={{ fontFamily: 'outfit' }}>Email</Text>
                <TextInput style={styles.input} placeholder='Enter Email' />
            </View>

            <View style={{ marginTop: 50 }}>
                <Text style={{ fontFamily: 'outfit' }}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Password' />
            </View>
            <TouchableOpacity
                style={{
                    padding: 20,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 15,
                    marginTop: 50,
                }}
            >
                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.WHITE,
                    textAlign: 'center',
                }}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 15,
                    marginTop: 50,
                    borderColor: Colors.GRAY,
                    borderWidth: 1,
                }}
            >
                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.PRIMARY,
                    textAlign: 'center',
                }}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
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
