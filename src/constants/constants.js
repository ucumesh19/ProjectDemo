import { Dimensions, PixelRatio } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
} = Dimensions.get('window');

//Icons
export const Icons = {
    splash_logo: require('../assets/icons/splash_logo.png'),

    avatar: require('../assets/icons/avatar.png'),
    email: require('../assets/icons/email.png'),
    fileUpload: require('../assets/icons/file-upload.png'),
    phone: require('../assets/icons/phone.png'),
    eye: require('../assets/icons/876769.png'),
    cut: require('../assets/icons/cut.png'),

    clock: require('../assets/icons/clock-circular-outline.png'),
    delete: require('../assets/icons/delete.png'),

    heartbeat: require('../assets/icons/heartbeat.png'),
    hospital: require('../assets/icons/hospital.png'),
    notification: require('../assets/icons/notification.png'),
    magnify: require('../assets/icons/magnifying-glass.png'),

    heart: require('../assets/icons/heart.png'),
    clinic_logo: require('../assets/icons/clinic-logo-png-8.png'),


}

//Images
export const Images = {
    doctor: require('../assets/images/sad-pensive-doctor-staying-in-hospital-corridor-KJW3XA7.png'),
}

//FONT SCALING
//Usage: nf(16)
const scale = SCREEN_WIDTH / 414;
const normalizeFont = (size) => {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
    }
}

//DYNAMIC DIMENSION CONSTANTS 
//Usage: wp(5), hp(20)
const widthPercentageToDP = widthPercent => {
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_WIDTH * elemWidth / 100);
};

const heightPercentageToDP = heightPercent => {
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_HEIGHT * elemHeight / 100);
};


const widthFromPixel = (widthPx, w = 414) => {
    const scale = SCREEN_WIDTH / w;
    const newSize = widthPx * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
};

const heightFromPixel = (heightPx, h = 736) => {
    const scale = SCREEN_HEIGHT / h;
    const newSize = heightPx * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
};

export {
    widthFromPixel as wpx,
    heightFromPixel as hpx,
    normalizeFont as nf,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
};