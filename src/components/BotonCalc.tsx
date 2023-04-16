import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface BotonCalcProps {
  texto: string
  color?: string
  ancho?: boolean
  accion: (numeroTexto: string) => void
}

export const BotonCalc = ({ texto, color = '#2D2D2D', ancho = false, accion }: BotonCalcProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => accion(texto)}>
      <View style={{
        ...styles.boton,
        backgroundColor: color,
        width: ancho ? 180 : 80
      }}>
        <Text style={{
          ...styles.botonTexto,
          color: color === '#9B9B9B' ? 'black' : 'white',
          alignSelf: ancho ? 'flex-start' : 'center',
          paddingLeft: ancho ? 30 : 10,
        }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
