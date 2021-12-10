import React from "react";
import { SafeAreaView, View} from 'react-native'

const ScreenTemplate = ({footer, children}) => {
  return (
    <SafeAreaView style={{flexDirection: 'column', backgroundColor: '#e9967a'}}>          
      {children}
      {footer}
    </SafeAreaView>
  )
}
export default ScreenTemplate