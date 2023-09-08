import {useNavigation} from '@react-navigation/native'; // useNavigation hook'unu ekleyin
import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = () => {
  const navigation = useNavigation(); // useNavigation hook'unu kullanarak navigation nesnesini alın

  // Yönlendirme işlemi için kullanılacak işlev
  const goToSignIn = () => {
    navigation.navigate('SignIn'); // 'SignIn' ekranına yönlendirme yapar
  };

  return (
    <View style={{alignSelf: 'center'}}>
      <Text style={{alignSelf: 'center'}}>Home Sweet Home</Text>
      <Button title="Sign In" onPress={goToSignIn} />
    </View>
  );
};

export default Home;
