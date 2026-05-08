import React from 'react';
import { useDispatch } from 'react-redux';
import Onbording20 from '../../../components/OnBoarding3Component/Onboarding20/Onbording20';
import { dispatchOnbording } from '../../../redux/slices/userSlice';
import { Routes } from '../../../navigation/Routes';

const Onboarding20Screen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleStoreExplorerPress = () => {
    dispatch(dispatchOnbording(true));
    navigation.replace(Routes.Signup);
  };

  return <Onbording20 onStoreExplorerPress={handleStoreExplorerPress} />;
};

export default Onboarding20Screen;
