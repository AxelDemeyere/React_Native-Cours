import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import { useState } from 'react';
import { useContacts } from '../../context/ContactContext';

export default function ContactInfo({navigation}) {
    const { addContact } = useContacts();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSave = () => {
        if (!name.trim()) {
            Alert.alert('Erreur', 'Le nom est obligatoire');
            return;
        }

        if (!phone.trim() && !email.trim()) {
            Alert.alert('Erreur', 'Veuillez renseigner au moins un téléphone ou un email');
            return;
        }

        addContact({
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim(),
        });

        // Réinitialiser le formulaire
        setName('');
        setPhone('');
        setEmail('');

        Alert.alert('Succès', 'Contact ajouté avec succès', [
            {
                text: 'OK',
                onPress: () => navigation.navigate('Contacts')
            }
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nouveau contact</Text>

            <Text style={styles.inputLabel}>Nom:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Entrez le nom"
                autoCapitalize="words"
            />

            <Text style={styles.inputLabel}>Téléphone:</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholder="Entrez le numéro de téléphone"


            />

            <Text style={styles.inputLabel}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="Entrez l'email"
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Enregistrer</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f7',
        paddingTop: 60,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    }
});
