// WaterConsumption
// generate dynamic array
const wcArr = Array.from({length: 8+1}, (_, i) => `${i} / ${i * 26} oz`)
export const waterConsumptionData = {
    componentName: 'waterconsumption',
    question: 'How many WATER bottles did you drink?',
    arrOptions: wcArr
}

// PhysicalActivity
// generate dynamic array
const paArr = Array.from({length: 5+1}, (_, i) => `${i} hours`)
export const physicalActivityData = {
    componentName: 'physactivity',
    question: 'Hours of Physical Activity?',
    arrOptions: paArr
}

// EventHeadache
const EHArr = ['No', 'Light', 'Moderate', 'Severe']
export const EventHeadacheData = {
    componentName: 'headache',
    question: 'Headache?  If YES, select severity.',
    arrOptions: EHArr
}

// EHeadacheDuration
const ehdArr = Array.from({length: 10+1}, (_, i) => `${i} min`)
export const EHeadacheDurationData = {
    componentName: 'duration',
    question: 'Headache Duration?',
    arrOptions: ehdArr
}

// EventIntensity
const EIArr = ['Light', 'Moderate', 'Severe']
export const EventIntensityData = {
    componentName: 'intensity',
    question: 'How intense was the event? ',
    arrOptions: EIArr
}