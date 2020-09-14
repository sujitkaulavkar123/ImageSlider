import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Children = props => {
    const {
        item,
        style,
    } = props

    return (
        <View style={[styles.container, style]}>   
            <Text style={styles.title}>
                {item.item.author}
            </Text>

            <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/400/600?image=" + item.item.id}}
        />
        </View>
    );
}

export default Children;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 10,
        textAlign: 'center'
    },
    image: {
        width: 200,
        height: 300,
    },
});