// WaterConsumption
// generate dynamic array
const wcMax = Array.from({length: 8+1}, (_, i) => `${i} / ${i * 26} oz`)
export const waterConsumptionData = {
    componentName: 'waterconsumption',
    question: 'How many WATER bottles did you drink?',
    maxOptions: wcMax
}

// PhysicalActivity
// generate dynamic array
const paMax = Array.from({length: 5+1}, (_, i) => `${i} hours`)
export const physicalActivityData = {
    componentName: 'physactivity',
    question: 'Hours of Physical Activity?',
    maxOptions: paMax
}