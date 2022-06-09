import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.title}>netfilms</Text>
            </TouchableOpacity>
            <View style={styles.left}>
                <TouchableOpacity style={styles.touchable}>
                    <MaterialIcons name='search' color={'white'} size={24} style={{ marginRight: 24 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                    <MaterialIcons name='menu' color={'white'} size={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 26,
        paddingHorizontal: 24,
        width: '100%',
        flexDirection: 'row',
    },
    title: {
        color: '#c3161c',
        fontSize: 34,
        fontWeight: '700',
    },
    left: {
        display: 'flex',
        gap: 18,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 6
    },
    touchable: {
        paddingHorizontal: 8
    }
});
