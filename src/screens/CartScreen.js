import { View, Text , StyleSheet} from 'react-native'
import React , {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartItem from '../components/CartItem'



export default function CartScreen() {
  const [values, setValues] = useState(ticketsInputValues)

  console.log(values);
  return (
    <SafeAreaView styles={styles.safeContainer}>
      <Text>CartScreen</Text>
      <CartItem  ticketName = 'vip1' changeValue = {(ticketCount)=>setValues(ticketCount)}  ticketObj= {values} />
      <CartItem  ticketName = 'vip2' changeValue = {(ticketCount)=>setValues(ticketCount)}  ticketObj= {values} />
      <Text>{values.vip1}</Text>
      
    </SafeAreaView>
  )
}

const ticketsInputValues = {
  vip1: 0,
  vip2: 0,
  vip3: 0
}

const styles = StyleSheet.create({

  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})