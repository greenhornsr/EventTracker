// Sample Data
// Tracking what we estimate to be relevant to the events currently.  If data is logged, a lightheadedness event is considered to have occurred and the information shared is in accompaniment of the lightheaded event.

module.exports = {
    options, 
    tfOptions,
    tenScale,
    posture,
    location,
    lightHeadedEvent
}

// OPTIONS:
const options = {
    "tfOptions" : ["False", "True"],
    "tenScale"  : [1,2,3,4,5,6,7,8,9,10],
    "posture"   : ["Laying", "Sitting", "Standing"],
    "location"  : ["Inside", "Outside"]
}


// Boolean Options: 
const tfOptions = ["False", "True"]

// Scale 1-10:
const tenScale = [1,2,3,4,5,6,7,8,9,10]

// Posture Options: 
const posture = ["Laying", "Sitting", "Standing"]

// Location Options: 
const location = ["Inside", "Outside"]

// single event outline
const lightHeadedEvent = {
    "headache": true,               // boolean  options: "True" / "False"           ?(1, 0)?
    "severity": 5,                  // number   scale of 1-10? light = 1-3, medium = 4-7, heavy = 8-10...?
    "duration": 180,                // number   logged in seconds
    "waterconsumption": 2,          // number   whole number equivalent to 20oz 
    "posture": 'standing',          // string   options: "Laying", "Sitting", "Standing"
    "transitioning": true,          // boolean  options: "True" / "False"
    "location": 'inside'            // string   options: "Inside" vs "Outside"
}