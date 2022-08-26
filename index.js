// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    let hqLocation = 42
    return Math.abs(hqLocation - pickupLocation)
}

function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination) * 264)

}