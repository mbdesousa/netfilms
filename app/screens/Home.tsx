import { StyleSheet, View, Text, ScrollView, ImageSourcePropType } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import Header from '../components/Header';

const mock: IMovie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    description: 'Two imprisoned and separately insane and a convicted executioner attempt to escape from the constraints of a state penitentiary.',
    rating: 5
  },
  {
    id: 5,
    title: 'The Dark Knight',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    rating: 3
  },
  {
    id: 2,
    title: 'The Godfather',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 4
  },
  {
    id: 3,
    title: 'The Godfather: Part II',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg',
    description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    rating: 4
  },
  {
    id: 4,
    title: 'The Dark Knight',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    rating: 3
  },
  {
    id: 6,
    title: 'The Dark Knight',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    rating: 3
  },
  {
    id: 7,
    title: 'The Dark Knight',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    rating: 3
  }
]

interface IMovie {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>

        <View style={{ width: '100%' }}>
          <Text style={{ marginTop: 18, marginLeft: 18, color: '#CDCDCD', fontSize: 22, fontWeight: '700' }}>Welcome back!</Text>
        </View>

        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryTitle}>Most watched this week</Text>
          <ScrollView style={{}} horizontal={true}>
            {mock.map((movie: IMovie, index) => {
              const props = {
                id: movie.id,
                title: movie.title as ImageSourcePropType,
                imageUrl: movie.imageUrl,
                description: movie.description,
                duration: '123',
                rating: movie.rating,
                key: index,
                index
              }

              return <CategoryItem {...props} />
            })}
          </ScrollView>
        </View>

        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryTitle}>Your list</Text>
          <ScrollView style={{}} horizontal={true}>
            {mock.map((movie: IMovie, index) => {
              const props = {
                id: movie.id,
                title: movie.title as ImageSourcePropType,
                imageUrl: movie.imageUrl,
                description: movie.description,
                duration: '123',
                rating: movie.rating,
                key: index,
                index
              }

              return <CategoryItem {...props} />
            })}
          </ScrollView>
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryTitle}>Most watched this month</Text>
          <ScrollView style={{}} horizontal={true}>
            {mock.map((movie: IMovie, index) => {
              const props = {
                id: movie.id,
                title: movie.title as ImageSourcePropType,
                imageUrl: movie.imageUrl,
                description: movie.description,
                duration: '123',
                rating: movie.rating,
                index
              }

              return <CategoryItem {...props} />
            })}
          </ScrollView>
        </View>

        <View style={{ width: '100%', marginBottom: 18, marginLeft: 32 }}>
          <Text style={{ marginTop: 18, color: '#ffff' }}>@sz0usa</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  categoryTitle: {
    color: '#E7E7E7',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 12,
    marginLeft: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3B3B3B',
  },
  categoryWrapper: {
    backgroundColor: '#202020',
    width: '100%',
    marginTop: 18,
    height: 260
  },
});
