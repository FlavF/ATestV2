

// datas.map((data) => ({
//   lat: findTheClosestCoordinateToPointOfInterest(data.lat, data.lon, pointsOfInterest).lat,
//   lon: findTheClosestCoordinateToPointOfInterest(data.lat, data.lon, pointsOfInterest).lon,
//   name: findTheClosestCoordinateToPointOfInterest(data.lat, data.lon, pointsOfInterest).name,
//   impressions: data.event_type === "imp"
//     ? 1
//     : 0,
//   clicks: data.event_type === "click"
//     ? 1
//     : 0
// }));


export function reduceArray(array = []) {
  const res = array.reduce((accumulator, currentValue) => {
    let check: boolean = false;
    for (let acc of accumulator) {
      if (acc.name === currentValue.name) {
        check = true;
        currentValue.impressions === 1
        ? acc.impressions++
        : acc.clicks++;
      }
    }
    if (!check) {
      currentValue.impressions === 1 || currentValue.clicks === 1;
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  return res;
}