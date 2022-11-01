import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import MobilePreview from '../../components/mobile-preview/mobile-preview';
import { fetchMobile } from '../../app/mobileSlice';
import Checkout from '../../components/checkout-icon/checkout-icon';

import './mobiles-preview.css';

const MobilesPreview = () => {
  const dispatch = useDispatch();

  const mobiles = useSelector((state) => state.mobile.mobiles);

  useEffect(() => {
    dispatch(fetchMobile());
  }, [dispatch]);

  return (
    <div className={'mobiles-preview'}>
      {mobiles.map((mobile) => (
        <MobilePreview key={mobile.id} mobile={mobile} />
      ))}
      <Checkout />
    </div>
  );
};

export default MobilesPreview;
