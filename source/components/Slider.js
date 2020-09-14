import React, { Component, createRef } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import Children from './Children';

const Slider = props => {
    return (
        <FlatList
            style={{ width: Dimensions.get('window').width }}
            horizontal
            pagingEnabled={true}            
            decelerationRate="fast"
            bounces={false}
            contentContainerStyle={{
                paddingHorizontal: 0,
            }}
            data={props.data}
            renderItem={(item, index) => <Children
                style={{ width: Dimensions.get('window').width}}
                item={item}
            />}            
            keyExtractor={(item, index) => item.toString() + index}
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 50
            }}            
        />
    )
}

export default Slider;