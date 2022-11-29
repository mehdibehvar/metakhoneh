export interface IProduct {
    _id:                   string;
    startDate:             string;
    listing_url:           string;
    name:                  string;
    summary:               string;
    interaction:           string;
    house_rules:           string;
    property_type:         string;
    room_type:             string;
    bed_type:              string;
    minimum_nights:        string;
    maximum_nights:        string;
    cancellation_policy:   string;
    last_scraped:          CalendarLastScraped;
    calendar_last_scraped: CalendarLastScraped;
    first_review:          CalendarLastScraped;
    last_review:           CalendarLastScraped;
    accommodates:          Accommodates;
    bedrooms:              Accommodates;
    beds:                  Accommodates;
    number_of_reviews:     Accommodates;
    bathrooms:             Bathrooms;
    amenities:             string[];
    price:                 Bathrooms;
    security_deposit:      Bathrooms;
    cleaning_fee:          Bathrooms;
    extra_people:          Bathrooms;
    guests_included:       Bathrooms;
    images:                Images;
    host:                  Host;
    address:               Address;
    availability:          Availability;
    review_scores:         ReviewScores;
    reviews:               Review[];
}

export interface Accommodates {
    $numberInt: string;
}

export interface Address {
    street:          string;
    suburb:          string;
    government_area: string;
    market:          string;
    country:         string;
    country_code:    string;
    location:        Location;
}

export interface Location {
    type:              string;
    coordinates:       Coordinate[];
    is_location_exact: boolean;
}

export interface Coordinate {
    $numberDouble: string;
}

export interface Availability {
    availability_30:  Accommodates;
    availability_60:  Accommodates;
    availability_90:  Accommodates;
    availability_365: Accommodates;
}

export interface Bathrooms {
    $numberDecimal: string;
}

export interface CalendarLastScraped {
    $date: DateClass;
}

export interface DateClass {
    $numberLong: string;
}

export interface Host {
    host_id:                   string;
    host_url:                  string;
    host_name:                 string;
    host_location:             string;
    host_about:                string;
    host_response_time:        string;
    host_thumbnail_url:        string;
    host_picture_url:          string;
    host_neighbourhood:        string;
    host_response_rate:        Accommodates;
    host_is_superhost:         boolean;
    host_has_profile_pic:      boolean;
    host_identity_verified:    boolean;
    host_listings_count:       Accommodates;
    host_total_listings_count: Accommodates;
    host_verifications:        string[];
}

export interface Images {
    picture_url: string[];
}

export interface ReviewScores {
    review_scores_accuracy:      Accommodates;
    review_scores_cleanliness:   Accommodates;
    review_scores_checkin:       Accommodates;
    review_scores_communication: Accommodates;
    review_scores_location:      Accommodates;
    review_scores_value:         Accommodates;
    review_scores_rating:        Accommodates;
}

export interface Review {
    _id:           string;
    date:          CalendarLastScraped;
    listing_id:    string;
    reviewer_id:   string;
    reviewer_name: string;
    comments:      string;
}


// export interface Accommodates {
//     $numberInt: string;
// }

// export interface Address {
//     street:          string;
//     suburb:          string;
//     government_area: string;
//     market:          string;
//     country:         string;
//     country_code:    string;
//     location:        Location;
// }

// export interface Location {
//     type:              string;
//     coordinates:       Coordinate[];
//     is_location_exact: boolean;
// }

// export interface Coordinate {
//     $numberDouble: string;
// }

// export interface Availability {
//     availability_30:  Accommodates;
//     availability_60:  Accommodates;
//     availability_90:  Accommodates;
//     availability_365: Accommodates;
// }

// export interface Bathrooms {
//     $numberDecimal: string;
// }

// export interface CalendarLastScraped {
//     $date: DateClass;
// }

// export interface DateClass {
//     $numberLong: string;
// }

// export interface Host {
//     host_id:                   string;
//     host_url:                  string;
//     host_name:                 string;
//     host_location:             string;
//     host_about:                string;
//     host_response_time:        string;
//     host_thumbnail_url:        string;
//     host_picture_url:          string;
//     host_neighbourhood:        string;
//     host_response_rate:        Accommodates;
//     host_is_superhost:         boolean;
//     host_has_profile_pic:      boolean;
//     host_identity_verified:    boolean;
//     host_listings_count:       Accommodates;
//     host_total_listings_count: Accommodates;
//     host_verifications:        string[];
// }

// export interface Images {
//     picture_url: string[];
// }

// export interface ReviewScores {
//     review_scores_accuracy:      Accommodates;
//     review_scores_cleanliness:   Accommodates;
//     review_scores_checkin:       Accommodates;
//     review_scores_communication: Accommodates;
//     review_scores_location:      Accommodates;
//     review_scores_value:         Accommodates;
//     review_scores_rating:        Accommodates;
// }

// export interface Review {
//     _id:           string;
//     date:          CalendarLastScraped;
//     listing_id:    string;
//     reviewer_id:   string;
//     reviewer_name: string;
//     comments:      string;
// }
export interface IFormikValues{
    name:string,
    email:string,
    password:string
}
export interface IPostBody{
    name?:string,
    email:string,
    password:string

}
export interface IUserInfo {
    name:         string;
    email:        string;
    phone_number: string;
    created:      Created;
    uuid:         string;
}

export interface Created {
    date:          Date;
    timezone_type: number;
    timezone:      string;
}

export interface IUser{
    userInfo:IUserInfo | null,
    status: boolean,
    loading:boolean,
    message:string
}
export interface IErrors{
    nameError?:string,
    emailError?:string,
    passwordError?:string,
}