import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByTwo } from '../redux/slices/firstPageSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/commonstyle';

const Screen1 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.firstPage.count);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment by 2" onPress={() => dispatch(incrementByTwo())} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={() => navigation.navigate('Screen2')} />
      </View>
    </View>
  );
};



export default Screen1;
