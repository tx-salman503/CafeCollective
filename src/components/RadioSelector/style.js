import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { Theme } from '../../libs'

export const styles = StyleSheet.create({
  container: {
    gap: moderateScale(12),
    marginTop: moderateScale(12),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    marginBottom: moderateScale(4),
  },
  headerText: {
    color: Theme.colors.white,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12),
  height: moderateScale(53),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(28),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    backgroundColor: 'transparent',
  },
  optionActive: {
    backgroundColor: Theme.colors.white,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  optionLabel: {
    color: '#FFFFFF',
  
  },
  optionLabelActive: {
    color: '#1E293B',
  },
  textWrapper: {

  flexDirection: 'row',
  gap:moderateScale(5),

  alignItems: 'center',
},

subLabel: {
  color: 'rgba(255,255,255,0.7)',
  top:moderateScale(1.5),
  fontSize:moderateScale(11)
  // marginLeft: moderateScale(6),
},

subLabelActive: {
  color: '#475569',
  fontSize:moderateScale(11),
  top:moderateScale(1.5)

},
})