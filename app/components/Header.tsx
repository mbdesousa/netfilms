import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

interface IProps {
  mode: 'searching' | 'default';
}

const Header = ({ navigation }, props: IProps) => {
  const [search, onChangeSearch] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}>
          <TouchableOpacity>
            <MaterialIcons name='menu' color={'#c3161c'} size={32} style={{ marginRight: 12 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.title}>netfilms</Text>
          </TouchableOpacity>
        </View>
        {props.mode !== 'searching' && (
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MaterialIcons name='search' color={'#c3161c'} size={32} />
          </TouchableOpacity>
        )}
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
    paddingHorizontal: 18,
    width: '100%',
    height: 80,
    paddingTop: 24,
    flexDirection: 'column',
  },
  title: {
    color: '#c3161c',
    fontSize: 34,
    fontWeight: '700',
  },
  top: {
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12
  },
  bottom: {
    backgroundColor: 'black',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12
  },
  input: {
    backgroundColor: '#e2e2e2',
    color: 'black',
    borderRadius: 10,
    textAlign: 'center',
    width: '90%',
    height: 36,
  },
});
