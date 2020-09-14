import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

export const Loader = () => {
    return <View style={{
        flex: 1,
        position: 'absolute',
        justifyContent: "center"
    }}>
        <ActivityIndicator size="large" color="#ff0000" />
    </View>
}