import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Footer from '../components/Footer';

function Reports() {

  const navigation = useNavigation();
  function Extract() {
    navigation.navigate('Extract');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.assets} onPress={Extract}>
        <Text style={styles.txtName}>Ativos</Text>
        <Text style={styles.txtValue}>R$ 1.259,69</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.liabilities}>
        <Text style={styles.txtName}>Passivos</Text>
        <Text style={styles.txtValue}>R$ 1.259,69</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.patrimony}>
        <Text style={styles.txtName}>Patrimônio</Text>
        <Text style={styles.txtValue}>R$ 1.259,69</Text>
      </TouchableOpacity>

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
  assets: {
    flex:1,
    width: '100%',
    backgroundColor: '#20232a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  liabilities: {
    flex:1,
    width: '100%',
    backgroundColor: '#20232a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  patrimony: {
    flex:1,
    width: '100%',
    backgroundColor: '#20232a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  txtName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  txtValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Reports;