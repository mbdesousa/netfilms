import { StyleSheet, View, Text } from 'react-native';

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
