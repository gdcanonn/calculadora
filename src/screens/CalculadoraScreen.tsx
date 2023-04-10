import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        {/* Boton N=#FF9427, GO=#2D2D2D, GC=#9B9B9B */}
        <BotonCalc texto='C' color='#9B9B9B' />
        <BotonCalc texto='+/-' color='#9B9B9B' />
        <BotonCalc texto='del' color='#9B9B9B' />
        <BotonCalc texto='/' color='#FF9427' />

      </View>
    </View>
  )
}