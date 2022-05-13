import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import {
  MerchantDashboard,
  NotFound, StaffDashboard,
  MemberDashboard, TGCMarketplace,
  ProfileSetting, UserProfile, BuyGold, SendMoney,
  PostProduct, TranscationDetails, MarketplaceOrders
} from '../pageListAsync';
import MerchantLayout from '../Templates/MerchantLayout';
function Application(props) {
  const { history } = props;
  // const changeMode = useContext(ThemeContext);
  return (
    <MerchantLayout history={history}>
      <Switch>
        {/* Home */}
        <Route path="/app/member-dashboard" component={MemberDashboard} />
        <Route path="/app/staff-dashboard" component={StaffDashboard} />
        <Route path="/app/tgc-marketplace" component={TGCMarketplace} />

        <Route
          path="/app/member/profile-setting"
          component={ProfileSetting}
        />
        <Route path="/app/member/user-profile" component={UserProfile} />
        <Route path="/app/member/buy-gold" component={BuyGold} />
        <Route path="/app/member/send-money" component={SendMoney} />
        <Route path="/app/member/post-product" component={PostProduct} />
        <Route
          path="/app/member/transcation-details"
          component={TranscationDetails}
        />
        <Route
          path="/app/member/marketplace-orders"
          component={MarketplaceOrders}
        />
        {/* Default */}
        <Route component={NotFound} />
      </Switch>
    </MerchantLayout>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
