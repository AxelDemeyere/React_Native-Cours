import { StyleSheet, View } from 'react-native';
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import NameArea from "../NameArea/NameArea";
import IconBar from "../IconBar/IconBar";
import ContactInfo from "../ContactInfo/ContactInfo";




export default function ContactPage() {

    const contact = {
        name: "John Doe",
        phone: "+1 234 567 890",
        email: "john.doe@example.com"
    }
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <ProfilePicture />
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
    }
});
