// components/IconBar/IconBar.jsx
import {Image, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';

export default function IconBar() {
    const icons = [
        { id: 1, source: require('../../../assets/icons/sms.png') },
        { id: 2, source: require('../../../assets/icons/phone.png') },
        { id: 3, source: require('../../../assets/icons/video_call.png') },
        { id: 4, source: require('../../../assets/icons/mail.png') },
    ];

    const renderIcon = ({ item }) => (
        <TouchableOpacity
            style={styles.iconWrapper}
            activeOpacity={0.6}
        >
            <Image source={item.source} style={styles.img} />
        </TouchableOpacity>

    );

    return (
        <View style={styles.row}>
            <FlatList
                data={icons}
                keyExtractor={(item) => item.id}
                renderItem={renderIcon}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
        marginTop: 24,
        marginBottom: 32,
    },
    flatListContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    iconWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#007aff',
        borderRadius: 30,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#007aff',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    img: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        tintColor: '#ffffff',
    },
});
