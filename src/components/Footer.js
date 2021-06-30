import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

function Footer() {
  
  const navigation = useNavigation();
  function reports() {
    navigation.navigate('Reports');
  }

  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="information-outline" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={reports}>
        <Entypo name="list" size={24} color="#fff" />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <AntDesign name="pluscircle" size={24} color="#fff" />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <AntDesign name="barschart" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity>
        <AntDesign name="logout" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#20232a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default Footer;