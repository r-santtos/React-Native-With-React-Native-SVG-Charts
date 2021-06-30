import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from 'react-native';

import PieChart from '../components/PieChart';
import Footer from '../components/Footer';

function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Saldo</Text>
        <Text style={styles.balanceValue}>R$ 1.999,99</Text>
      </View>

      <View style={styles.chart}>
        <View style={styles.boxPatrimonioTxt}>
          <View style={styles.textInforBox}>
            <View style={styles.boxPatrimonio} />
            <Text style={styles.textInforColor}>Patrimonio 50%</Text>
          </View>
        </View>
        
        <PieChart />

        <View style={styles.textInfor}>
          <View style={styles.textInforBox}>
            <View style={styles.boxAtivo} />
            <Text style={styles.textInforColor}>Ativo 50%</Text>
          </View>

          <View style={styles.textInforBox}>
            <View style={styles.boxPassivo} />
            <Text style={styles.textInforColor}>Passivo 50%</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.boxInfor}>
        <Text style={styles.titleChart}>Ricardo</Text>

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
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  balance: {
    height: 150,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#20232a',
    marginVertical: 5,
  },
  balanceText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  balanceValue: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chart: {
    backgroundColor: '#20232a',
    paddingHorizontal: 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxPatrimonioTxt: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleChart: {
    color: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInfor: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInforBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  textInforColor: {
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 5,
  },
  boxInfor: {
    paddingHorizontal: 10,
    backgroundColor: '#20232a',
    marginBottom: 5,
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
  list: {
    backgroundColor: '#20232a',
  },
});

export default Dashboard;