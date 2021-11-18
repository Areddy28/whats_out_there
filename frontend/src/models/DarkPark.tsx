

export default interface DarkPark {
    _id: string;
    name: string; // name of park.
    title: string; // designation held (photographer recommended, dark park, preserve, etc.)
    state: string; 
    lightPollution: number; // ranked 0-9 darkest to lightest
    camping: string; // is there camping allowed.
    fee: string; //entrance fee or camping fee.
    address: string;
    latlong: any[];
    url: string; 
    description: string;
    miles: number;
    comments: (Comments)[]; // to include an object with rating and comment.
}

// export interface Latlong {
//     lat: number;
//     long: number;
// }

export interface Comments {
    rating: number;
    comment: string;
    userName: string;
    photoURL: string;
}

export interface filteredParks {
    name: string;
    state: string;
    description: string;
    url: string;
    miles: number;
}