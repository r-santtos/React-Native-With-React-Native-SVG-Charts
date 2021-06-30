import React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Text } from 'react-native';

import Footer from '../components/Footer';
import DataBase from '../database.json';

const db = DataBase.dashboard;

function Extract() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.balance}>
        <Text style={styles.balanceName}>Saldo / Mês</Text>
        <Text style={styles.balanceValue}>R$1.659,69</Text>
      </View>
      <FlatList 
        style={styles.extract}
        data={db}
        keyExtractor={extract => String(extract.id)}
        renderItem={({ item }) => (
          <View style={styles.boxExtract}>

            <View style={styles.infor}>
              <View style={styles.inforBox}>
                <View style={styles.box} />
                <View style={styles.scrollTexts}>
                  <Text style={styles.inforName}>{item.name}</Text>
                  <Text style={styles.inforDate}>{item.regDate}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
              <Text style={styles.inforValue}>R${item.value}</Text>
            </View>

          </View>
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
  balance: {
    width: '100%',
    backgroundColor: '#20232a',
    paddingVertical: 25,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  balanceName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  balanceValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
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
  infor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inforBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 10,
    height: 10,
    backgroundColor: '#61dafb',
  },
  scrollTexts: {
    paddingLeft: 10,
  },
  inforName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inforDate: {
    color: '#c6c6c6',
  },
  description: {
    color: '#c6c6c6',
  },
  inforValue: {
    color: '#fff',
    paddingRight: 10,
  },
});

export default Extract;