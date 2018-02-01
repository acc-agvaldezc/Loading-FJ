export interface IYelpResponse{
    //Total search?
    total?: number;
    //Businesses Object
    businesses?: IYelpBusiness[];
    //Region Object
    region?: IYelpBusinessRegion[];
}

export interface IYelpBusiness{
    //businesses rating
    rating?: number; 
    //Main foreing exchange
    price?: string;
    //business phone
    phone?: string;
    //buisnesses name id
    id?: string;
    //business status
    is_closed?: boolean;
    //Categories object has alias & title 
    categories?: any[]; 
    //total reviews
    review_count?: number;
    name?: string;
    //businesses information from yelp url
    url?: string;
    //Coordinates object has latitude & longitude
    coordinates?: any[]
    image_url?: string; 
    //Location object has city, country,address2, address3, state, address1, zip_code properties
    location?: any[];
    distance?: number;  //Values in metters* 
    transactions?: any[]; //Simple array of transactions
}

export interface IYelpBusinessRegion{
    //Center Object has latitude & longitude properties
    center: any[]
}

export interface IYelpBusinessDetailResponse{
    //Business name id
    id?: string;
    //Business name
    name?: string;
    //Business image
    image_url?: string;
    //Business is claimed
    is_claimed?: boolean;
    //Business is closed
    is_closed?: boolean;
    //Business url
    url?: string;
    //Business main Foreing exchange
    price?: string;
    //Business rating
    rating?: number;
    //Total reviews
    review_count?: number;
    //Business number
    phone?: string;
    //Business array photos
    photos?: any[];
    //Business Schedule object return hours_type & is_open_now properties, and open object with is_overnight, end, day & start properties
    hours?: any[];
    //Business categories object with alias and title properties
    categories?: any[];
    //Business coordinates object with latitude and longitude properties
    coordinates?: any[];
    //Business location object with address1, address2, address3, city, state,
    //zip_code, country, cross_streets properties, and display_address array property
    location?: any[];
    //Business array property 
    transactions?: any[];
}

export interface IYelpReview{
    //Return an Object array with id, rating, user array, text, time_created and url properties
    reviews?: any[];
    //Return total comments
    total?: number;
    //Return languagues of comments
    possible_languages?: any[];
}


