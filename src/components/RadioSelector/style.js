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
    paddingHorizontal: moderateScale(26),
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
    flex: 1,
  },
  optionLabelActive: {
    color: '#1E293B',
  },
})