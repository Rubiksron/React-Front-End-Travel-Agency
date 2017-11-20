import React from 'react';
import css from '../index.scss';

var url = 'https://www.anywherecostarica.com/hotel/reserve/bosque-del-cabo-cabo-matapalo-costa-rica';

module.exports = class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={css.QuickBookingStartingPrice}>
          <div className={css.QuickBookingFromText}>
            <span className={css.QuickBookingFromComponent}>FROM</span>
            <span className={css.QuickBookingPriceText}>2,125.00</span>
          </div>
          <div>
            <span className={css.QuickBookingSubHeading}>Per night, tax included</span>
          </div>
        </div>
        <a href={`url?checkIn=${ this.checkIn }&checkOut=${ this.checkOut }&adults=${ this.adults }&children=${ this.children }`}>CHECK RATES</a>
      </footer>
    );
  }
}
