
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileSection = ({ title, value, icon }) => (
  <View style={styles.profileSection}>
    <Ionicons name={icon} size={24} color="#4A4A4A" />
    <View style={styles.profileSectionText}>
      <Text style={styles.profileSectionTitle}>{title}</Text>
      <Text style={styles.profileSectionValue}>{value}</Text>
    </View>
  </View>
);

const StatisticItem = ({ title, value }) => (
  <View style={styles.statisticItem}>
    <Text style={styles.statisticValue}>{value}</Text>
    <Text style={styles.statisticTitle}>{title}</Text>
  </View>
);

const ProfileAccountPage = () => {
  // This would typically come from your app's state management (e.g., Redux)
  const user = {
    name: "Oindrila Nandy",
    email: "iamnandy@gmail.com",
    phone: "+91 7983449989",
    address: "EM 4/1 , Sector 5",
    purchases: 7,
    orders: {
      active: 2,
      completed: 5,
    },
    giftVouchers:2,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <ProfileSection title="Email" value={user.email} icon="mail-outline" />
        <ProfileSection title="Phone" value={user.phone} icon="call-outline" />
        <ProfileSection title="Address" value={user.address} icon="location-outline" />
      </View>

      <View style={styles.statisticsContainer}>
        <StatisticItem title="Purchases" value={user.purchases} />
        <StatisticItem title="Active Orders" value={user.orders.active} />
        <StatisticItem title="Completed Orders" value={user.orders.completed} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Gift Vouchers</Text>
        <View style={styles.voucherContainer}>
          <Ionicons name="gift-outline" size={24} color="#4A4A4A" />
          <Text style={styles.voucherText}>
            You have {user.giftVouchers} gift voucher{user.giftVouchers !== 1 ? 's' : ''}
          </Text>
        </View>
        <TouchableOpacity style={styles.viewVouchersButton}>
          <Text style={styles.viewVouchersButtonText}>View Vouchers</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  editButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ff6601',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginTop: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileSectionText: {
    marginLeft: 15,
  },
  profileSectionTitle: {
    fontSize: 14,
    color: '#888888',
  },
  profileSectionValue: {
    fontSize: 16,
    color: '#333333',
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
    padding: 15,
  },
  statisticItem: {
    alignItems: 'center',
  },
  statisticValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6601',
  },
  statisticTitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  voucherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voucherText: {
    marginLeft: 15,
    fontSize: 16,
  },
  viewVouchersButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  viewVouchersButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ProfileAccountPage;