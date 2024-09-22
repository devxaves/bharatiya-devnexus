import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import your local images here
import product1Image from '../assets/images/1.jpg';
import product2Image from '../assets/images/2.jpg';
import product3Image from '../assets/images/3.jpg';
import product4Image from '../assets/images/4.jpg';
import product5Image from '../assets/images/5.jpg';
import product6Image from '../assets/images/6.jpg';
import product7Image from '../assets/images/7.jpg';
import product8Image from '../assets/images/8.jpg';
import product9Image from '../assets/images/9.jpg';
import product10Image from '../assets/images/10.jpg';
import product11Image from '../assets/images/11.jpg';
import product12Image from '../assets/images/12.jpg';
import product13Image from '../assets/images/13.jpg';
import product14Image from '../assets/images/14.jpg';

const ProductCard = ({ product }) => (
  <View style={styles.productCard}>
    <Image source={product.image} style={styles.productImage} />
    <Text style={styles.productName}>{product.name}</Text>
    <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
    <View style={styles.productInfo}>
      <View style={styles.infoItem}>
        <Ionicons name="cart-outline" size={16} color="#666" />
        <Text style={styles.infoText}>{product.sales} sales</Text>
      </View>
      <View style={styles.infoItem}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.infoText}>{product.rating.toFixed(1)}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.checkButton}>
      <Text style={styles.checkButtonText}>CHECK NOW</Text>
    </TouchableOpacity>
  </View>
);

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState([
    { id: '1', name: 'Jaipur Handicraft', price: 29.99, image: product1Image, sales: 120, rating: 4.5 },
    { id: '2', name: 'Rajasthani Souvenir', price: 19.99, image: product2Image, sales: 85, rating: 4.2 },
    { id: '3', name: 'Stonework Lehenga', price: 199.99, image: product3Image, sales: 200, rating: 4.8 },
    { id: '4', name: 'Kanjivaram Silk', price: 99.99, image: product4Image, sales: 150, rating: 4.3 },
    { id: '5', name: 'Navratri Kurti', price: 34.99, image: product5Image, sales: 95, rating: 4.1 },
    { id: '6', name: 'Joynogar Moya', price: 14.99, image: product6Image, sales: 180, rating: 4.6 },
    { id: '7', name: 'Nonen Gurer Rasgulla', price: 24.99, image: product7Image, sales: 75, rating: 4.0 },
    { id: '8', name: 'Handcrafted Decor', price: 24.99, image: product8Image, sales: 110, rating: 4.4 },
    { id: '9', name: 'Puja Samagri', price: 4.99, image: product9Image, sales: 65, rating: 3.9 },
    { id: '10', name: 'Temple Jewellery', price: 49.99, image: product10Image, sales: 90, rating: 4.2 },
    { id: '11', name: 'Terracotta Sculpture', price: 44.99, image: product11Image, sales: 130, rating: 4.5 },
    { id: '12', name: 'Hand-Embroided Bag', price: 26.99, image: product12Image, sales: 70, rating: 4.1 },
    { id: '13', name: 'Glass Bangles', price: 49.99, image: product13Image, sales: 100, rating: 4.3 },
    { id: '14', name: 'Nawabi Sherwani', price: 99.99, image: product14Image, sales: 80, rating: 4.0 },
  ]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    margin: 10,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#666',
  },
  checkButton: {
    backgroundColor: '#fa8b41',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  checkButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ProductList;