import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Star from '../assets/icons/star';

const userImages = {
  user1: require('../assets/images/oindrilla.jpg'),
  user2: require('../assets/images/srijita.jpg'),
  user3: require('../assets/images/Sujay Dey.jpg'),
  // Add more images as needed
};
const testimonials = [
  {
    id: '1',
    image: userImages.user1,
    name: 'Oindrilla Nandy',
    feedback: 'I am thrilled with my purchase! The quality is even better than I expected, and the delivery was incredibly fast. The item arrived well-packaged and in perfect condition. Highly recommend this seller for anyone looking for high-quality products',
  },
  {
    id: '2',
    image: userImages.user2,
    name: 'Srijita Saha',
    
    feedback: 'The product works as described and is a great value for the price. I especially appreciated the easy checkout process and quick shipping.The customer service team was also very helpful and responsive to my inquiries ',
  },
  {
    id: '3',
    image: userImages.user3,
    name: 'Sujay Dey',
    
    feedback: 'I am beyond impressed with the quality of the product and the level of service provided. The item arrived on time and exceeded my expectations. The attention to detail in the packaging was a pleasant surprise.',
  },
  // Add more testimonials here
];

const TestimonialItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.userImage} />
    <Text style={styles.userName}>{item.name}</Text>
    <Text style={styles.userFeedback}>"{item.feedback}"</Text>
  </View>
);

const TestimonialList = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      snapToInterval={styles.itemContainer.width + 20} // Adjust the snapping interval
      decelerationRate="fast"
    >
      {testimonials.map((testimonial) => (
        <TestimonialItem key={testimonial.id} item={testimonial} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    marginBottom: 40,
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    width: 250, // Set width according to your design
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userDesignation: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  userCountry: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  userFeedback: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'gray',
  },
});

export default TestimonialList;
