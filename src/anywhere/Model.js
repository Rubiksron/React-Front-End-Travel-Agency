// @flow

export type Amenities = string[];

export type HotelInfo = {
    checkIn: string;
    checkOut: string;
    infantAge: number;
    childAge: number;
    noChildren: bool;
}

export type Hotel = {
  hotelInfo: HotelInfo;
  amenities: Amenities;
  startingAtPrice: number;
  bookLink: string;
}
