import { View, Text } from 'react-native'
import React, { useState } from 'react'
import SafeFlexView from '../../SafeFlexView/SafeFlexView'
import { styles } from './style'
import NativeText from '../../AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import QualityStatusCard from '../../QualityStatusCard/QualityStatusCard'
import { ClockIcon, laptopIcon, plugIcon, TableIcon, wifiIcon } from '../../../assets/Svgs'
import PowerOutletsAvailability from '../../PowerOutletsAvailability/PowerOutletsAvailability'
import MessageCard from '../../MessageCard/MessageCard'

const Workability = ({onNext}) => {

    const [wifiIndex, setWifiIndex] = useState(1);
    const [laptopIndex, setLaptopIndex] = useState(1);
    const [power, setPower] = useState('Plenty');
    const [table, setTable] = useState('Plenty');
    const [stayDuration, setStayDuration] = useState('Long Stay');


    return (
      
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <NativeText value={"Workability"} style={combineStyle.text28Bold} />
                    <NativeText value={"Help others find the perfect workspace"} style={combineStyle.text14Regular} />
                </View>

                <QualityStatusCard
                    title="WiFi Quality"
                    SvgIcon={wifiIcon}
                    values={['Bad', 'Decent', 'Great']}
                    selectedIndex={wifiIndex}
                    onSelect={setWifiIndex}
                />

                <PowerOutletsAvailability
                    SvgIcon={plugIcon}
                    title="Power Outlets Availability"
                    options={['None', 'Few', 'Plenty']}
                    selectedValue={power}
                    onChange={setPower}
                />
                <QualityStatusCard
                    title="Laptop-Friendly"
                    SvgIcon={laptopIcon}
                    values={['None', 'In Some Areas', 'Everywhere']}
                    selectedIndex={laptopIndex}
                    onSelect={setLaptopIndex}
                />

                <PowerOutletsAvailability
                    SvgIcon={TableIcon}
                    title="Table Space"
                    options={['None', 'Some', 'Plenty']}
                    selectedValue={table}
                    onChange={setTable}
                />


                <PowerOutletsAvailability
                    SvgIcon={ClockIcon}
                    title="Stay Duration Comfort"
                    options={['Quick', '1-2 hours', 'Long Stay']}
                    selectedValue={stayDuration}
                    onChange={setStayDuration}
                />

                <MessageCard 
                firstWrapStyle={styles.buttonContainer}
                  touchable ={true}
                  isBtn={true}
                text='Next'
                onPress={onNext}
                />
            </View>
     
    )
}

export default Workability