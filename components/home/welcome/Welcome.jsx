import React,  {useState} from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native';

 import  { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES} from '../../../constants';
const jobTypes = ["Full-time", "Part-Time", "Contractor"];
const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hy</Text>
        <Text style={styles.welcomeMessage}>Let's rock it</Text>
      </View>
      <View style={styles.searchContainer} >
        <View style={styles.searchWrapper} >
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='What are you looking for?' />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
           />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome