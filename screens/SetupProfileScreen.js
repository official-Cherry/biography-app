import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Text,
} from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import {setUserOneliner} from '../lib/users';

function SetupProfileScreen({navigation, route}) {
  const [oneliner, setOneliner] = useState('');
  const onChangeText = value => {
    setOneliner(value);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.imageUpload}>이미지 등록 (선택)</Text>
        <View style={styles.circle} />
        <View style={styles.form}>
          <BorderedInput
            placeholder="한 줄 소개 작성 (선택)"
            value={oneliner}
            profile={styles.profile}
            onChangeText={onChangeText}
            returnKeyType="done"
          />
          <CustomButton
            title="완료"
            onPress={() => {
              setUserOneliner(oneliner);
              navigation.navigate('MainTab');
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    // flex: 1,
  },
  fullscreen: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 64,
  },
  imageUpload: {
    padding: 20,
  },
  circle: {
    // flex: 1,
    marginBottom: 80,
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
  form: {justifyContent: 'center'},
  profile: {height: 128, width: 128},
});

export default SetupProfileScreen;
