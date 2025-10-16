import {StyleSheet, Text} from 'react-native';

export default function NameArea({name}) {
    return (
        <Text style={styles.name}>{name}</Text>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 32,
        fontWeight: '600',
        color: '#1c1c1e',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 8,
        letterSpacing: -0.5,
    }
});