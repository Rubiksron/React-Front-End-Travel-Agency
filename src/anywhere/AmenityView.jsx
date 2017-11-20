// @flow

const Immutable = require('immutable')
import React from 'react';
import type { Amenities } from './Model'
import { featuredAmenities } from './Data';
import { hotelA } from '../anywhere/Data';

  export const HotelAmenitiesView = (props: Amenities) => {

    const amenitiesList = Immutable.List(props.amenities);
    const featuredAmenitiesList = Immutable.List(featuredAmenities);

 return (
    <div>
      <h2>
        Amenities
      </h2>
      <hr/>
      <div>
        4. List the intersection of the input amenities and featuredAmenities.
        { amenitiesList.map((amenity, index) => {
          return <div key={ index }>{ amenity }</div>
        })}
        <br/>
      </div>
      <div>
        5. List the input amenities which do not intersect with featuredAmenities.
        { featuredAmenitiesList.map((amenity, index) => {
          if(!amenitiesList.includes( 'amentiy' )) {
            return <div key={ index }>{ amenity }</div>
          }
        })}
        <br/>
      </div>
      <div>
        6. Display the first input amenity that is not featured
        { featuredAmenitiesList.map((amenity, index) => {
          if(!amenitiesList.includes( 'amentiy' )) {
            return <div key={ index }>{ amenity }</div>
          }
      }).get(0)}
        <br/>
      </div>
      <div>
        7. Show the reversed list of all featuredAmenities.
        { amenitiesList.reverse().map((amenity, index) => {
          return <div key={ index }>{ amenity }</div>
        })}
        <br/>
      </div>
      <div>
        8. Show the count of the reversed list of featuredAmenities,
         excluding the "Spa" member.
         { featuredAmenitiesList.reverse().map((amenity, index) => {
           if(featuredAmenitiesList) {
             return <div key={ index }>{ amenity }</div>
           }
         }).splice(1, 1)}
       </div>
     </div>
   );
 }
 export default HotelAmenitiesView;



 /*

 Complete the component below, and wire it up in
 the App component in src/app.js, once for each
 of the two mode hotel data consts, picking off
 the `amenities` property as the input to
 `HotelAmenitiesView`.

 The point of this excercize is to demonstrate
 immutable & functional programming paradigms using immutable.js.

 */
 /**

 1. Convert `amenities` into an immutable List

 2. Convert `featuredAmenities` into an immutable List

 3. Using the _only_ immutable.js operators from this point on,
 and the two immutable lists from steps 1 & 2,
 complete the component following the instructions in the
 JSX below.

 (Leave all comments in place for reference)

 */
