import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  TouchableHighlight, 
  StyleSheet } from 'react-native';
import { recipes } from '../../Data/dataArrays'
import { getCategoryName } from '../../Data/MockDataAPI'
import { RecipeCard } from '../../Styles/AppStyles'

export default class HomeScren extends React.Component {
  
  constructor(props) {
    super(props)
  }

  renderRecipes = ({ item }) => (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: item.photo_url }} />
      <Text style={styles.title}>{ item.title }</Text>
      <Text style={styles.category}>{ getCategoryName(item.categoryId) }</Text>
    </View>
  );

  render() {
    return(
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category
})

