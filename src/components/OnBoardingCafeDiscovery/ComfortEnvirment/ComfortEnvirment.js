import { View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import NativeText from '../../AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import {  clock,  mice, speaker } from '../../../assets/Svgs'
import RadioSelector from '../../RadioSelector/RadioSelector'
import MessageCard from '../../MessageCard/MessageCard'
import QualityStatusCard from '../../QualityStatusCard/QualityStatusCard'

const ComfortEnvirment = ({ onNext }) => {

  const [wifiIndex, setWifiIndex] = useState(1);


  return (
    <View style={{ flex: 1 }} >


      <View style={styles.container}>
        <View style={styles.textContainer}>
          <NativeText value={'Comfort & Environment'} style={combineStyle.text28Bold} />
          <NativeText value={'Find cafes that are comfortable, quit and relaxing.'} style={combineStyle.text14Regular} />
        </View>

        

        <RadioSelector
          titleIcon={mice}
          title="Comfort"
          options={['Hard Seating  (Stools / not suitable for long stays)', 'Okay Comfort  (Average seating comfort)', ' Very Comfortable  (Soft chairs )']}
          onSelect={(index, value) => console.log(index, value)}
        />

        <RadioSelector
          titleIcon={clock}
          title="Time of Visit at Monday"
          options={['Morning (6 am to 12 pm)', 'Afternoon (12 pm to 5 pm)', 'Evening (5 pm to 9pm+)']}
          onSelect={(index, value) => console.log(index, value)}
        />

 <QualityStatusCard
                    title="Noise Level"
                    SvgIcon={speaker}
                    values={['Very Quiet', 'Moderate', 'Loud']}
                    selectedIndex={wifiIndex}
                    onSelect={setWifiIndex}
                />

        
        <MessageCard
          touchable={true}
          isBtn={true}
          text='Next'
          onPress={onNext}
        />
      </View>
    </View>
  )
}
export default ComfortEnvirment