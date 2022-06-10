import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useDebounce } from 'use-debounce';

const API_KEY = 'ec37dd62d4fb92d37c32861687df6010';

export interface ISearch {
  id: number,
  adult: boolean,
  backdrop_path: any,
  genre_ids: number[],
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string
}

const SearchScreen = ({ navigation }) => {
  const [search, onChangeSearch] = React.useState('');
  const [movies, setMovies] = React.useState<ISearch[]>();
  const [debouncedSearch] = useDebounce(search, 500);
  const [selectedMovie, setSelectedMovie] = React.useState<ISearch>();

  React.useEffect(() => { search !== '' && handleSearch() }, [debouncedSearch]);

  const handleSearch = async () => {
    // to do >> promise;
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${debouncedSearch}&page=1&include_adult=false`);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      // todo alert.tsx
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>

          <View style={styles.top}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <MaterialIcons name='chevron-left' color={'#c3161c'} size={44} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.title}>netfilms</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={onChangeSearch}
            value={search}
            placeholder="search something!"
            returnKeyType="search"
            autoFocus
          />
          {movies ? (
            <ScrollView style={styles.moviesWrapper}>
              {movies.map((movie) => (
                <TouchableOpacity onPress={() => setSelectedMovie(movie)}>
                  <View style={styles.movieItem}>
                    <Text style={styles.movieItemTitle}>
                      {movie.original_title}
                    </Text>
                    <MaterialIcons name='chevron-right' color='#fff' size={24} />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <View style={
              {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80%'
              }
            }>
              <MaterialIcons name='search' color='#fff' size={24} />
              <Text style={styles.movieItemTitle}>Search for a movie!</Text>
            </View>
          )}


        </View>
      </View>

      {selectedMovie && (
        <View style={styles.modal}>
          <Text style={styles.movieItemTitle}>{selectedMovie.original_title}</Text>
          <Text style={styles.movieItemTitle}>{selectedMovie.original_language}</Text>
          <TouchableOpacity onPress={() => setSelectedMovie(undefined)}>
            <MaterialIcons name='close' color={'#ffff'} size={32} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    padding: 24
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  movieItemTitle: {
    color: 'white',
    fontSize: 28
  },
  moviesWrapper: {
    width: '100%',
    marginTop: 12,
  },
  movieItem: {
    backgroundColor: '#202020',
    marginBottom: 12,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputWrapper: {
    justifyContent: 'space-between',
    padding: 12
  },
  top: {
    flexDirection: 'row',
    marginBottom: 12
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#c3161c',
    fontSize: 34,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#e2e2e2',
    color: 'black',
    borderRadius: 10,
    paddingHorizontal: 8,
    height: 36,
    width: '100%'
  },
});
