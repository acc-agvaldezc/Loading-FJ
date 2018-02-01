export interface IYelpResponse{
    //Total search?
    total: number;
    //Businesses Object
    businesses: IYelpBusinesses[];
    //Region Object
    region: IYelpBusinessesRegion[];
}

export interface IYelpBusinesses{
    //businesses rating
    rating: number; 
    //Main foreing exchange
    price: string;
    //business phone
    phone: string;
    //buisnesses name id
    id: string;
    //business status
    is_closed: boolean;
    //Categories object has alias & title 
    categories: any[]; 
    //total reviews
    review_count: number;
    name: string;
    //businesses information from yelp url
    url: string;
    //Coordinates object has latitude & longitude
    coordinates: any[]
    image_url: string; 
    //Location object has city, country,address2, address3, state, address1, zip_code properties
    location: any[];
    distance: number;  //Values in metters* 
    transactions: any[]; //Simple array of transactions
}

export interface IYelpBusinessesRegion{
    //Center Object has latitude & longitude properties
    center: any[]
}