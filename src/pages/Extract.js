import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

import Footer from '../components/Footer';
import DataBase from '../database.json';

const db = DataBase.dashboard;

function Extract() {

  const navigation = useNavigation();
  function Details() {
    navigation.navigate('Details');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        style={styles.extract}
        keyExtractor={extract => String(extract.id)}
        data={db}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.boxExtract} onPress={Details}>
            <Text style={styles.titleChart}>{item.regDate}</Text>

            <View style={styles.infor}>
              <View style={styles.boxAtivo} />
              <View style={styles.scrollTexts}>
                <Text style={styles.inforName}>Ativos</Text>
                <Text style={styles.inforValue}>R$ 1.600,29</Text>
              </View>
            </View>

            <View style={styles.infor}>
              <View style={styles.boxPassivo} />
              <View style={styles.scrollTexts}>
                <Text style={styles.inforName}>Passivos</Text>
                <Text style={styles.inforValue}>R$ 1.600,29</Text>
              </View>
            </View>

            <View style={styles.infor}>
              <View style={styles.boxPatrimonio} />
              <View style={styles.scrollTexts}>
                <Text style={styles.inforName}>Patrimonio</Text>
                <Text style={styles.inforValue}>R$ 100.000.100.600,29</Text>
              </View>
            </View>

          </TouchableOpacity>
        )}
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  extract: {
    width: '100%',
    backgroundColor: '#000',
    paddingVertical: 5,
    marginBottom: 5,
  },
  boxExtract: {
    backgroundColor: '#20232a',
    padding: 10,
    marginBottom: 5,
  },
  titleChart: {
    color: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  infor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxAtivo: {
    width: 10,
    height: 10,
    backgroundColor: '#86EBC7',
  },
  boxPassivo: {
    width: 10,
    height: 10,
    backgroundColor: '#E0867E',
  },
  boxPatrimonio: {
    width: 10,
    height: 10,
    backgroundColor: '#839ED4',
  },
  scrollTexts: {
    width: '100%',
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inforName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inforValue: {
    color: '#fff',
    paddingRight: 10,
  },
});

export default Extract;