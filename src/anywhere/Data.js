// @flow

import type {Amenities, Hotel} from './Model'

export const featuredAmenities: Amenities = [
  "Swimming Pool",
  "Spa",
  "Restaurant"
];

export const hotelA: Hotel = {
  hotelInfo: {
    checkIn: "13:00:00",
    checkOut: "11:00:00",
    infantAge: 2,
    childAge: 11,
    noChildren: false
  },
  startingAtPrice: 222.55,
  bookLink: "https://www.anywherecostarica.com/hotel/reserve/bosque-del-cabo-cabo-matapalo-costa-rica",
  amenities: [
    "Balcony",
    "Bar",
    "Beach Access",
    "Fan",
    "Gardens",
    "Hammocks",
    "Hiking Trails",
    "Hot Water",
    "Jungle View",
    "Kitchen",
    "Laundry Service",
    "Massage",
    "Ocean View",
    "Restaurant",
    "Spa",
    "Swimming Pool",
    "Yoga Lessons"
  ]
}


export const hotelB: Hotel = {
  hotelInfo: {
    checkIn: "13:00:00",
    checkOut: "11:00:00",
    infantAge: 16,
    childAge: 16,
    noChildren: true
  },
  startingAtPrice: 222.55,
  bookLink: "https://www.anywherecostarica.com/hotel/reserve/bosque-del-cabo-cabo-matapalo-costa-rica",
  amenities: [
    "Balcony",
    "Bar",
    "Beach Access",
    "Fan",
    "Gardens",
    "Hammocks",
    "Hiking Trails",
    "Hot Water",
    "Jungle View",
    "Kitchen",
    "Laundry Service",
    "Massage",
    "Ocean View",
    "Restaurant",
    "Spa",
    "Swimming Pool",
    "Yoga Lessons"
  ]
}
