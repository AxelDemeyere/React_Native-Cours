import { Text, View} from 'react-native';
import List from "../../ContactList/List/List";
import {useContacts} from "../../../context/ContactContext";

export default function FavoritePage({ navigation }) {

    const { contacts, addToFavorite } = useContacts();
    const favoriteContacts = contacts.filter(contact => contact.favorite);

    const handleContactSelect = (contact) => {
        navigation.navigate('Contacts', { screen: 'Contact', params: { contact } });
    };

    const handleAddToFavorite = (id) => {
        addToFavorite(id);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mes Favoris</Text>
            </View>
            {
                favoriteContacts.length === 0 ? (
                    <Text style={styles.emptyText}>Aucun contact favori</Text>
                ) : (
                    <List contacts={contacts.filter(contact => contact.favorite)} onContactSelect={handleContactSelect} onAddFav={handleAddToFavorite}></List>
                )
            }
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f2f2f7',
    },
    header: {
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
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
    },
};
