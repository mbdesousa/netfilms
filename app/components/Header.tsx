import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>netfilms</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: '100%',
    },
    title: {
        color: '#c3161c',
        fontSize: 20,
        fontWeight: '700',
    }
});
