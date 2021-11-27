import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeWrapper';
import Dashboard from '../Templates/Dashboard';
import {
  MerchantDashboard,
  PersonalDashboard, CrmDashboard, CryptoDashboard,
  Infographics, MiniApps, Analytics,
  InfoUpdates, Status,
  Parent, AppLayout, Responsive, Grid,
  SimpleTable, AdvancedTable, TablePlayground,
  TreeTable, EditableCell,
  ReduxForm, DateTimePicker, CheckboxRadio,
  Switches, Selectbox, Rating,
  SliderRange, Buttons, DialButton,
  ToggleButton, Textbox,
  Autocomplete, Upload, TextEditor,
  Avatars, Accordion, Badges,
  List, PopoverTooltip, Snackbar,
  Typography, Tabs, Cards,
  ImageGrid, Progress, DialogModal,
  Steppers, Paginations, DrawerMenu,
  Breadcrumbs, Icons, IonIcons,
  SliderCarousel, Tags, Dividers,
  LineCharts, BarCharts, AreaCharts,
  PieCharts, RadarCharts, ScatterCharts, CompossedCharts,
  DoughnutCharts, BarDirection, LineScatterChart,
  AreaFilledChart, RadarPolarCharts,
  Contact, Chat, Email, TaskBoard,
  Ecommerce, Timeline, Calendar,
  ProductPage, Invoice, Profile, BlankPage,
  Photos, Pricing, CheckoutPage,
  Error, Settings, HelpSupport,
  MapMarker, MapDirection, SearchMap,
  TrafficIndicator, StreetViewMap, NotFound, StaffDashboard, MemberDashboard
} from '../pageListAsync';
import MerchantLayout from '../Templates/MerchantLayout';

function Application(props) {
  const { history } = props;
  // const changeMode = useContext(ThemeContext);
  return (
    <MerchantLayout history={history}>
      <Switch>
        {/* Home */}

        <Route path="/app/merchant-dashboard" component={MerchantDashboard} />
        <Route path="/app/member-dashboard" component={MemberDashboard} />
        <Route path="/app/staff-dashboard" component={StaffDashboard} />
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
