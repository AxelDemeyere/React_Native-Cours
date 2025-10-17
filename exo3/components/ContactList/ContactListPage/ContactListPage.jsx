import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import List from "../List/List";
import { useContacts } from '../../../context/ContactContext';

export default function ContactListPage({ navigation }) {
    const { contacts } = useContacts();

    const handleContactSelect = (contact) => {
        navigation.navigate('Contact', { contact });
    };

    const handleAddContact = () => {
        navigation.navigate('Ajouter');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mes Contacts</Text>
                <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
                    <Text style={styles.addButtonText}>+ Ajouter</Text>
                </TouchableOpacity>
            </View>
            <List contacts={contacts} onContactSelect={handleContactSelect}></List>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#f2f2f7',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingTop: 60,
            paddingBottom: 10,
            backgroundColor: '#f2f2f7',
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#000',
        },
        addButton: {
            backgroundColor: '#007AFF',
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 8,
        },
        addButtonText: {
            color: '#ffffff',
            fontSize: 16,
            fontWeight: '600',
        },
    }
);
