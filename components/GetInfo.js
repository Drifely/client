import {
    Container, 
    Content,
    Button,
    Spinner} from 'native-base'
import ImageResizer from 'react-native-image-resizer'
import React from 'react'
import axios from 'axios'
import { 
    Image,
    CameraRoll,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,} from 'react-native';
import Camera from 'react-native-camera'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionSignup } from '../store/actions/signupAction'

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
  buttonsSpace: {
    width: 10,
  },
});

class SnapSim extends React.Component {
  componentDidMount() {
    console.log(this.props.loading)
  }
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false,
    };
  }

  takePicture = async () => {
    console.log('hahah', this.props)
    if(this.camera) {
      await this.camera.capture()
      this.props.actionSignup(this.props.navigation)
    }
  };


  switchType = () => {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  };

  get typeIcon() {
    let icon;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      icon = require('../assets/ic_camera_rear_white.png');
    } else if (this.state.camera.type === front) {
      icon = require('../assets/ic_camera_front_white.png');
    }

    return icon;
  }

  switchFlash = () => {
    let newFlashMode;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  };

  get flashIcon() {
    let icon;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      icon = require('../assets/ic_flash_auto_white.png');
    } else if (this.state.camera.flashMode === on) {
      icon = require('../assets/ic_flash_on_white.png');
    } else if (this.state.camera.flashMode === off) {
      icon = require('../assets/ic_flash_off_white.png');
    }

    return icon;
  }

  render() {
    if(this.props.loading) {
      return (<View style={styles.loading}><Spinner color='blue'/></View>)
    } else {
      return (
        <View style={styles.container}>
          <StatusBar animated  />
          <Camera
            ref={cam => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={this.state.camera.aspect}
            captureTarget={this.state.camera.captureTarget}
            type={this.state.camera.type}
            flashMode={this.state.camera.flashMode}
            onFocusChanged={() => { }}
            onZoomChanged={() => { }}
            defaultTouchToFocus
            mirrorImage={false}
            cropToPreview={false}
            permissionDialogTitle="Sample title"
            permissionDialogMessage="Sample dialog message"
          />
          <View style={[styles.overlay, styles.topOverlay]}>
            <TouchableOpacity style={styles.typeButton} onPress={this.switchType}>
              <Image source={this.typeIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flashButton} onPress={this.switchFlash}>
              <Image source={this.flashIcon} />
            </TouchableOpacity>
          </View>
          <View style={[styles.overlay, styles.bottomOverlay]}>
            {(!this.state.isRecording && (
              <TouchableOpacity style={styles.captureButton} onPress={this.takePicture}>
                <Image source={require('../assets/ic_photo_camera_36pt.png')} />
              </TouchableOpacity>
            )) ||
              null}
            <View style={styles.buttonsSpace} />
          </View>
        </View>
      );
    }
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  actionSignup
},dispatch)

const mapStateToProps = state => ({
  loading: state.signupReducer.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(SnapSim)


