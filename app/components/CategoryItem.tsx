import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

interface IProps {
  id: number;
  index: number;
  title: ImageSourcePropType;
  imageUrl: string;
  description: string;
  duration: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

const CategoryItem = (props: IProps) => {

  const { id, title, imageUrl, description, duration, rating, index } = props;

  const renderRating = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <MaterialIcons
            key={`${id}-${i}`}
            name='star'
            size={12}
            color='#c3161c'
          />
        );
      } else {
        stars.push(
          <MaterialIcons
            key={`${id}-${i}`}
            name='star-border'
            size={10}
            color='#c3161c'
          />
        );
      }
    }

    return stars;
  }

  return (
    <View
      key={id}
      style={styles.categoryItem}
    >
      <TouchableOpacity>
        <Image
          source={{
            height: 120,
            width: 120,
            uri: imageUrl
          }}
        ></Image>

        <Text style={styles.categoryTitle}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.rating}>
        {renderRating()}
        <TouchableOpacity>
          <MaterialIcons name='play-circle-outline' color='#ffff' style={{ marginLeft: 4 }} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({

  categoryTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    maxWidth: 120,
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 4
  },
  categoryItem: {
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12,
    height: 200,
  },
  rating: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    left: 4,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  categoryImage: {
    width: 220,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 2
  },
  categoryItemTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    maxWidth: 160,
    marginTop: 12
  },
  categoryDescription: {
    color: 'white',
    fontSize: 12,
  }
});
