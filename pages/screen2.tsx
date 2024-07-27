import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByThree } from '../redux/slices/secondPageSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/commonstyle';


const Screen2 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.secondPage.count);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Count: {count}</Text>
    <View style={styles.buttonContainer}>
      <Button title="Increment by 3" onPress={() => dispatch(incrementByThree())} />
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Previous" onPress={() => navigation.navigate('Screen1')} />
    </View>
  </View>
  );
};

export default Screen2;