import {Image, StyleSheet} from 'react-native';

export default function ProfilePicture() {
    return (
        <Image source={require('../../../assets/profile_picture.jpg')} style={styles.img}/>
    );
}

const styles = StyleSheet.create({
img : {
    width: 160,
    height: 160,
    borderRadius: 80,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 3,
    borderColor: '#ffffff',
}
});