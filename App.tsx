import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BottomNav from './components/BottomNav';
import { AppRoute } from './types';

// Screens
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import AuthenticityScreen from './screens/AuthenticityScreen';
import ProductInfoScreen from './screens/ProductInfoScreen';
import JourneyScreen from './screens/JourneyScreen';
import RewardsScreen from './screens/RewardsScreen';
import ReviewScreen from './screens/ReviewScreen';
import ChatScreen from './screens/ChatScreen';
import RefillScreen from './screens/RefillScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ARScanScreen from './screens/ARScanScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={AppRoute.LOADING} element={<LoadingScreen />} />
          <Route path={AppRoute.HOME} element={<HomeScreen />} />
          <Route path={AppRoute.AUTHENTICITY} element={<AuthenticityScreen />} />
          <Route path={AppRoute.INFO} element={<ProductInfoScreen />} />
          <Route path={AppRoute.JOURNEY} element={<JourneyScreen />} />
          <Route path={AppRoute.REWARDS} element={<RewardsScreen />} />
          <Route path={AppRoute.REVIEW} element={<ReviewScreen />} />
          <Route path={AppRoute.CHAT} element={<ChatScreen />} />
          <Route path={AppRoute.REFILL} element={<RefillScreen />} />
          <Route path={AppRoute.NOTIFICATIONS} element={<NotificationsScreen />} />
          <Route path={AppRoute.AR_SCAN} element={<ARScanScreen />} />
        </Routes>
        <BottomNav />
      </Layout>
    </Router>
  );
};

export default App;