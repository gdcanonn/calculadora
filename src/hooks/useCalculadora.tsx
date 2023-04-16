import { useRef, useState } from "react"

enum Operadores {
  sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0')
  const [numero, setNumero] = useState('0')

  const ultimaOperacion = useRef<Operadores>()

  const limpiar = () => {
    setNumero('0')
    setNumeroAnterior('0')
  }

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') { // Punto decimal
        setNumero(numero + numeroTexto)
      } else if (numeroTexto === '0' && numero.includes('.')) { // Evaluar si es otro cero y hay un punto
        setNumero(numero + numeroTexto)
      } else if (numeroTexto !== '0' && !numero.includes('.')) { // Evaluar si es diferente de cero y no tiene un punto
        setNumero(numeroTexto)
      } else if (numeroTexto === '0' && !numero.includes('.')) { // Evitar 00000.0
        setNumero(numero)
      } else {
        setNumero(numero + numeroTexto)
      }
    } else {
      setNumero(numero + numeroTexto)
    }
  }

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''))
    } else {
      setNumero(`-${numero}`)
    }
  }

  const btnDelete = () => {
    if (numero.length === 1 || (numero.length === 2 && numero.startsWith('-'))) {
      setNumero('0')
    } else {
      setNumero(numero.slice(0, - 1))
    }
  }

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1))
    } else {
      setNumeroAnterior(numero)
    }
    setNumero('0')
  }

  const btnDividir = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.dividir
  }

  const btnMultiplicar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.multiplicar
  }

  const btnRestar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.restar
  }

  const btnSumar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.sumar
  }

  const calcular = () => {
    const numActual = Number(numero)
    const numAnterior = Number(numeroAnterior)

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${numActual + numAnterior}`)
        break
      case Operadores.restar:
        setNumero(`${numAnterior - numActual}`)
        break
      case Operadores.multiplicar:
        setNumero(`${numActual * numAnterior}`)
        break
      case Operadores.dividir:
        setNumero(`${numAnterior / numActual}`)
        break
    }

    setNumeroAnterior('0')
  }

  return {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  }
}
