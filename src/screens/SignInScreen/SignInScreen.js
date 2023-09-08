import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Giriş işlemi burada gerçekleştirilebilir
    // Örnek: API çağrısı veya kullanıcı doğrulama

    if (email && password) {
      // Giriş başarılı
      console.log('Giriş Başarılı');
    } else {
      // Hata mesajı
      console.log('E-posta ve şifre gereklidir.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Giriş Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Giriş Yap" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default SignInScreen;
