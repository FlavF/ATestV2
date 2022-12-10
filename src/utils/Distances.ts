import {IDescription, IDatas} from "./Interfaces";

//? Distance between two coordinates
function degreesToRadians(degrees : number) {
    return (degrees * Math.PI) / 180;
}

export function distanceInKmBetweenEarthCoordinates(lat1 : number, lon1 : number, lat2 : number, lon2 : number) {
    var earthRadiusKm = 6371;
    
    var dLat = degreesToRadians(lat2 - lat1);
    var dLon = degreesToRadians(lon2 - lon1);
    
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
    
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
}

export function findTheClosestCoordinateToPointOfInterest(latitude : string, longitude : string, jsonFile : Array<IDescription>) {
    let parseLat = parseFloat(latitude);
    let parseLon = parseFloat(longitude);
    let newArray: number[] = [];
    
    //? if the coordinates matches
    for (let jFile of jsonFile) {
        if (parseLat === jFile.lat && parseLon === jFile.lon) {
            return jFile;
        }
    }
    //? if not the same coordinates
    for (let jFile of jsonFile) {
        //? Calculate the distance between the point gps given by the header and the ones in the json file
        
        let distance = distanceInKmBetweenEarthCoordinates(parseLat, parseLon, jFile.lat, jFile.lon);
        newArray.push(distance);
    }
    
    //? Find the key of the smallest distance
    let smallest = newArray.indexOf(Math.min(...newArray));
    
    return jsonFile[smallest];
}
