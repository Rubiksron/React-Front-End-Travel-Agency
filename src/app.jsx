import 'bootstrap/dist/css/bootstrap.min.css';
import css from './index.scss';
import React from 'react';
import QuickBookingView from './anywhere/QuickBookingView';
import HotelAmenitiesView from './anywhere/AmenityView';
import { hotelA, hotelB } from './anywhere/Data'

export default class App extends React.Component {
  render() {
    return (
      <div className={css.widgetFlexBox}>
        <div>
          <QuickBookingView hotel={ hotelA }/>
          <HotelAmenitiesView amenities={ hotelA.amenities }/>
        </div>

        <div>
          <QuickBookingView hotel={ hotelB }/>
          <HotelAmenitiesView amenities ={ hotelB.amenities }/>
        </div>
      </div>
    );
  }
}
