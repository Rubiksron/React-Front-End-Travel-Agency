// @flow
//THIS COULD/SHOULD BE BROKEN INTO SEPARATES COMPONENTS/FILES
const Immutable = require('immutable')
import React from 'react';
import type { Hotel } from './Model';
import css from '../index.scss';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

module.exports = class QuickBookingView extends React.Component {

  // state = {
  //   checkIn: 'string',
  //   checkOut: 'string',
  //   adults: 'number',
  //   children: 'number',
  //   infants: 'number',
  //   childrenAges: 'number',
  // }

  constructor(props) {
    super(props)
    this.state = {
      checkIn: '',
      checkOut: '',
      adults: '',
      children: '',
      infants: '',
      childrenAges: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkInHandleChange = this.checkInHandleChange.bind(this);
    this.checkOutHandleChange = this.checkOutHandleChange.bind(this);
    this.childrenCountHandleChange = this.childrenCountHandleChange.bind(this);
    this.adultCountHandleChange = this.adultCountHandleChange.bind(this);

  }

  adultCountHandleChange(event) {
    this.setState({adults: event.target.value})
    console.log('this.state - from adultCountHandleChange: ', this.state);
  }

  childrenCountHandleChange(event) {
    this.setState({children: event.target.value})
    console.log('this.state - from childrenCountHandleChange: ', this.state);
  }

  checkOutHandleChange(event) {
    this.setState({checkOut: event.target.value});
    console.log('this.state - from checkOutHandleChange: ', this.state);
  }

 checkInHandleChange(event) {
    this.setState({checkIn: event.target.value});
    console.log('this.state - from checkInHandleChange: ', this.state);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log('this.state - from handleChange: ', this.state);
  }

  handleSubmit(event) {
    alert('a value was submitted' + this.state.value)
    event.preventDefault();
    console.log('this.state - from handleSubmit: ', this.state);

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //THE BELOW CONCATENATES THE STATE PROPS INTO THE URL AS AN API TO THE BACK END.
    // window.location = {`url?checkIn=${ this.state.checkIn }&checkOut=${ this.state.checkOut }&adults=${ this.state.adults }&children=${ this.state.children }`}
    //THE LINE BELOW IS THE API TO THE MAIN SITE, FROM THE WIDGET THAT IS PROVIDING THE REQUIRED PARAMETERS.
    // {bookLink}?checkIn=X&checkOut=X&adults=X&children=X&infants=X
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  }




  render() {
    return(
      <section className={css.QuickBookingViewComponent}>
        <Header />
        <div className={css.QuickBookingViewBody}>
          <div className={css.QuickBookingViewMain}>

            <div className={css.checkInCheckOutContainer}>
              <div className={css.QuickBookingViewDates}>
                <label>CHECK IN</label>
                <div className={css.QuickBookingCheckTimes}>(After 3pm)</div>
                <input
                  id="checkIn"
                  type="date"
                  value={ this.state.checkIn }
                  onChange={ this.checkInHandleChange }
                />
              </div>

              <div className={css.QuickBookingViewDates}>
                <label>CHECK OUT</label>
                <div className={css.QuickBookingCheckTimes}>(Before 12pm)</div>
                <input
                  id="checkOut"
                  type="date"
                  value={ this.state.checkOut }
                   onChange={ this.checkOutHandleChange }
                />
              </div>
            </div>

           <div className={css.guestTotalFlexBox}>
            <div className={css.QuickBookingGuestTotal}>
              <div className={css.guestTotalComponent}>
                <label>ADULTS(18+)</label>
                <select
                  id="adults"
                  value={ this.state.adults }
                  onChange={ this.adultCountHandleChange }
                  >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <div className={css.guestTotalComponent}>
              <label>CHILDREN</label>
              <select
                id="children"
                value={ this.state.children }
                onChange={ this.childrenCountHandleChange }
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <Footer onChange={ this.handleChange.bind(this) } onSubmit={ this.handleSubmit.bind(this) }/>
      </section>
    );
  }
}


/*

 Import react and the types by name from the src/anywhere/Model namespace
 as needed to define the react component props.

 Create a React component for the "QUICK BOOKING" widget
 named AmenityView. It should take as its props the "Hotel" data type.

 It should track all the state changes of the form values,
 and the action for "Room & Rates" should go to:

 {bookLink}?checkIn=X&checkOut=X&adults=X&children=X&infants=X

 Dates should be converted to MM/DD/YYYY for the url - (ie 10/20/2016)

 The component should be imported into the src/app.jsx namespace,
 as well as the hotel data needed to pass in as its props (from src/anywhere/Data.js).

 Put the compoment into the App component in that namespace twice -
 once for each of the mock hotel consts defined in Data.js (hotel & hotelB).

 */
