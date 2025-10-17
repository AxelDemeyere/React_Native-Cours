import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import NameArea from "../NameArea/NameArea";
import IconBar from "../IconBar/IconBar";
import ContactInfo from "../ContactInfo/ContactInfo";

export default function ContactPage({ route, navigation }) {
    const { contact } = route.params || {};

    if (!contact) {
        return (
            <View style={styles.container}>
                <Text>Aucun contact sélectionné</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
                    <Text style={styles.backButtonText}>Retour</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <ProfilePicture picture={contact.picture} />
            </View>
            <View style={styles.infoWrapper}>
                <NameArea name={contact.name}/>
                <IconBar/>
                <ContactInfo phone={contact.phone} email={contact.email}></ContactInfo>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f7',
        paddingTop: 60,
    },

    backButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    backButtonContainer: {
        alignSelf: 'flex-start',
    },

    backButtonText: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '500',
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#f2f2f7',
    },

    infoWrapper: {
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20,
    },
});
