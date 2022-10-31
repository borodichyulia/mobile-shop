import { useDispatch, useSelector } from 'react-redux';
import MobilePreview from '../../components/mobile-preview/mobile-preview';
import { fetchMobile } from '../../app/mobileSlice';
import { Fragment, useEffect } from 'react';
import './mobiles-preview.css';
import Checkout from '../../components/checkout-icon/checkout-icon';

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
