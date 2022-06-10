import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            
        </View>
    );
}

export default Loading;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: '100%',
        flexDirection: 'row',

    },
    title: {
        color: '#c3161c',
        fontSize: 32,
        fontWeight: '700',
    },
    left: {
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});
