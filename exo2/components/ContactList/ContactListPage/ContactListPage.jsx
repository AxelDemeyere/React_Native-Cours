import {StyleSheet, View} from 'react-native';
import List from "../List/List";

const contacts = [
    {
        id: '1',
        name: 'John Doe',
        phone: '+1 234 567 890',
        email: 'john.doe@example.com',
        picture: 'https://picsum.photos/200'
    },
    {
        id: '2',
        name: 'Jane Smith',
        phone: '+1 987 654 321',
        email: 'jane.smith@example.com',
        picture: 'https://picsum.photos/200'

    },
    {
        id: '3',
        name: 'Alice Johnson',
        phone: '+1 555 123 456',
        email: 'alice.johnson@example.com',
        picture: 'https://picsum.photos/200'

    },
    {
        id: '4',
        name: 'Bob Brown',
        phone: '+1 444 987 654',
        email: 'bob.brown@example.com',
        picture: 'https://picsum.photos/200'
    }
];

export default function ContactListPage({ onContactSelect }) {
    return (
        <View style={styles.container}>
            <List contacts={contacts} onContactSelect={onContactSelect}></List>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#f2f2f7',
        },
    }
);
