import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';

export default function List({contacts, onContactSelect}) {

    const renderListItem = ({item}) => (
        <View style={styles.itemContainer}>
            <Pressable
                onPress={() => onContactSelect && onContactSelect(item)}
                style={({pressed}) => [
                    styles.pressable,
                    pressed && styles.pressed
                ]}
            >
                <View style={styles.content}>
                    <Image style={styles.profilePicture} source={{uri: item.picture}}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.phone}>{item.phone}</Text>
                    </View>
                    <Text style={styles.chevron}>›</Text>
                </View>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
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
        paddingTop: 60,
    },

    list: {
        flex: 1,
    },

    listContent: {
        paddingHorizontal: 16,
        paddingTop: 20,
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
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
        color: '#c7c7cc',
        fontWeight: '400',
        marginLeft: 8,
    },
});
