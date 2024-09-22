import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainProduct = ({ product }) => (
  <View style={styles.mainProductContainer}>
    <Image source={product.image} style={styles.mainProductImage} />
    <Text style={styles.mainProductName}>{product.name}</Text>
    <View style={styles.productDetailsContainer}>
      <View style={styles.detailItem}>
        <Ionicons name="pricetag" size={24} color="#4CAF50" />
        <Text style={styles.detailText}>${product.price}</Text>
      </View>
      <View style={styles.detailItem}>
        <Ionicons name="star" size={24} color="gold" />
        <Text style={styles.detailText}>{product.rating}</Text>
      </View>
      <View style={styles.detailItem}>
        <Ionicons name="cart" size={24} color="#ff6601" />
        <Text style={styles.detailText}>{product.sales} Sold</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.checkoutButton}>
      <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
    </TouchableOpacity>
  </View>
);

const RecommendedProduct = ({ product }) => (
  <View style={styles.recommendedProductContainer}>
    <Image source={product.image} style={styles.recommendedProductImage} />
    <Text style={styles.recommendedProductName}>{product.name}</Text>
    <Text style={styles.recommendedProductPrice}>${product.price}</Text>
  </View>
);

const ShoppingPage = () => {
  const mainProduct = {
    name: " Glass Bangles Set",
    price: 49.99,
    rating: 4.6,
    sales: 1500,
    image: require('../assets/images/13.jpg'),
  };

  const recommendedProducts = [
    { id: '1', name: "Rajasthani Souvrnir", price: 49.99, image: require('../assets/images/2.jpg') },
    { id: '2', name: "Kanjivaram Silk", price: 29.99, image: require('../assets/images/4.jpg') },
    { id: '3', name: "Nanen Gurer Rasgulla", price: 9.99, image: require('../assets/images/7.jpg') },
    { id: '4', name: "Handcrafted Decor", price: 39.99, image: require('../assets/images/8.jpg') },
    { id: '5', name: "Temple Jewellery", price: 19.99, image: require('../assets/images/10.jpg') },
    { id: '6', name: "Hand-Emobroided Bag", price: 15.99, image: require('../assets/images/12.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      <MainProduct product={mainProduct} />
      <View style={styles.recommendedSection}>
        <Text style={styles.recommendedTitle}>Recommended Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendedProducts.map((product) => (
            <RecommendedProduct key={product.id} product={product} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mainProductContainer: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  mainProductImage: {
    width: 350,
    height:300,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  mainProductName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailText: {
    marginTop: 5,
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendedSection: {
    padding: 20,
    
  },
  recommendedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  recommendedProductContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    width: 150,
    alignItems: 'center',
  },
  recommendedProductImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 12,
  },
  recommendedProductName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  recommendedProductPrice: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
});

export default ShoppingPage;