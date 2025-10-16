import { StyleSheet, Text, View} from 'react-native';

export default function ContactInfo({phone, email}) {
    return (
        <View style={styles.container}>
            <View style={[styles.infoWrapper, styles.firstItem]}>
                <Text style={styles.label}>mobile</Text>
                <Text style={styles.value}>{phone}</Text>
            </View>
            <View style={[styles.infoWrapper, styles.lastItem]}>
                <Text style={styles.label}>email</Text>
                <Text style={styles.value}>{email}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#ffffff',
        width: '100%',
        marginTop: 0,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
        overflow: 'hidden',
    },
    infoWrapper: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e5e5e7',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 50,
    },

    label: {
        fontSize: 13,
        fontWeight: '400',
        color: '#8e8e93',
        textTransform: 'lowercase',
        marginBottom: 3,
        letterSpacing: -0.2,
    },
    value: {
        fontSize: 17,
        fontWeight: '400',
        color: '#007aff',
        lineHeight: 22,
        letterSpacing: -0.2,
    }
});