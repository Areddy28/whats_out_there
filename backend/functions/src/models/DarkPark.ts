import {ObjectId} from "mongodb";

export default interface DarkPark {
    _id: ObjectId;
    name: string;
    title: string;
    state: string;
    lightPollution: number;
    camping: string;
    fee: string;
    address: string;
    latlong: [];
    url: string;
    description: string;
    comments: (Comments)[];
}

export interface Comments {
    rating: number;
    comment: string;
    userName: string; 
    photoUrl: string; 
}

export interface filteredParks {
    name: string;
    state: string;
    description: string;
    url: string;
    miles: number;
}