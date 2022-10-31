import * as React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import MobileInformation from './components/mobile-information/mobile-information';
import InteractiveList from './routes/checkout/checkout';
import MobilesPreview from './routes/mobiles-preview/mobiles-preview';
import Navigation from './routes/navigation/navigation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<MobilesPreview />} />
        <Route path="home/:mobileId" element={<MobileInformation />} />
        <Route path="checkout" element={<InteractiveList />} />
      </Route>
    </Routes>
  );
};

export default App;
