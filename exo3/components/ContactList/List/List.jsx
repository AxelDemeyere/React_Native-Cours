import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function List({contacts, onContactSelect, onAddFav }) {

    const renderListItem = ({item}) => (
        <View style={styles.itemContainer}>
            <View style={styles.content}>
                <Pressable
                    onPress={() => onContactSelect && onContactSelect(item)}
                    style={({pressed}) => [
                        styles.pressable,
                        pressed && styles.pressed,
                        styles.leftArea
                    ]}
                >
                    <Image style={styles.profilePicture} source={{uri: item.picture}}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.phone}>{item.phone}</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => onAddFav && onAddFav(item.id)} style={styles.starButton}>
                    {item.favorite ? (
                        <FontAwesome name="star" size={30} color="yellow" />
                    ) : (
                        <FontAwesome name="star-o" size={30} color="yellow" />
                    )}
                </Pressable>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                extraData={contacts}
                keyExtractor={(item) => item.id}
                renderItem={renderListItem}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f7',
    },

    list: {
        flex: 1,
    },

    listContent: {
        paddingHorizontal: 16,
        paddingTop: 20,
    },

    // left area (image + text) prend l'espace restant pour pousser l'étoile à droite
    leftArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    // bouton étoile aligné et avec padding pour toucher confortable
    starButton: {
        paddingLeft: 12,
        paddingRight: 8,
        justifyContent: 'center',
    },

    itemContainer: {
        marginBottom: 8,
        backgroundColor: '#ffffff',
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

    pressable: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
    },

    pressed: {
        backgroundColor: '#f8f8f8',
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 20,
        minHeight: 70,
    },

    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#ffffff',
        marginRight: 12,
    },

    textContainer: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },

    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1c1c1e',
        marginBottom: 2,
        letterSpacing: -0.3,
    },

    phone: {
        fontSize: 15,
        fontWeight: '400',
        color: '#8e8e93',
        letterSpacing: -0.2,
    },

    chevron: {
        fontSize: 20,
        color: '#e8e805',
        fontWeight: '400',
        marginLeft: 8,
    },
});
