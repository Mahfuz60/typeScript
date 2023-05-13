"use strict";
//Nullable type
const searchName = (value) => {
    if (value === null) {
        console.log("there is nothing to search...");
    }
    else {
        console.log("searching.....");
    }
};
searchName(null);
//unknown type
const getCarSpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        const result = convertedSpeed.toFixed(4);
        console.log(`my car speed is: ${result} ms^-1`);
    }
    else if (typeof speed === "string") {
        const [value, unit] = speed.split(" "); //["10","kmh^-1"]
        const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
        const result = convertedSpeed.toFixed(4);
        console.log(`my car speed is: ${result} ms^-1`);
    }
    else {
        console.log("There is wrong type !try again");
    }
};
getCarSpeed(20);
getCarSpeed("20 kmh^-1");
// getCarSpeed(true);
//never type
function throwError(message) {
    throw new Error(message);
}
throwError("Error hoice ,try again and fixed it!");
