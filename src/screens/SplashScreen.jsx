import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../utils/colors';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to Landing after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('StudentList');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;
