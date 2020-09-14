import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import Slider from '../components/Slider';
import { fetchPhotos } from '../utils/api';
import { Loader } from '../components/Loader';

class Dashboard extends Component {

  componentDidMount() {
    this.props.downloadPhotos()
  }

  render() {

    let photos = this.shuffle(this.props.photos)
    return (
      <View style={styles.container}>
        <Slider
          data={photos}
          itemWidth={200}
          itemHeight={300}
          contentContainerStyle={styles.contentStyle}
        />
        {this.props.isShowLoader && <Loader/>}
      </View>
    )
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photoReducer.photos,
    isShowLoader: state.loaderReducer.showLoader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    downloadPhotos() {
      dispatch(fetchPhotos())
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);