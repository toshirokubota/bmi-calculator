
export function staticAsset(assetName: string): string {
    return `${import.meta.env.BASE_URL}${assetName}`
}

export function strictParseFloat(str: string): number {
  return /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(str) ? parseFloat(str) : NaN;
}


export function BMI(height_meter: number, weight_kg: number): number {
    const bmi = weight_kg / (height_meter * height_meter);
    console.log('BMI: ', weight_kg, height_meter, bmi);
    return bmi;
}

export function meter2inch(meter: number): number {
    return 100 * meter / 2.54;
}
export function inch2meter(inch: number): number {
    return 2.54 * inch / 100.0;
}

export function metricHeight2ImperialHeightStr(meter: number): string {
    const inches = meter2inch(meter);
    const feet = Math.floor(inches / 12);
    const rem = inches - feet * 12;
    return '' + feet + 'feets ' + rem.toFixed(0) + 'inches'
}
export function metricWeight2ImperialWeightStr(kg: number): string {
    const lbs = kg2lbs(kg);
    const stone = Math.floor(lbs / 14);
    const rem = lbs - stone * 14;
    return '' + stone + 'st ' + rem.toFixed(0) + 'lbs'
}

export function lbs2kg(lbs: number): number {
    return lbs * 0.45359237;
}
export function kg2lbs(kg: number) : number {
    return 2.204622622 * kg;
}

export function BMISummary(bmi: number): string {
// - Underweight: BMI less than 18.5
// - Healthy weight: BMI 18.5 to 24.9
// - Overweight: BMI 25 to 29.9
// - Obese: BMI 30 or greater    
    if(bmi < 18.5) return 'a underweight';
    else if(bmi >= 18.5 && bmi < 25) return 'a healthy weight';
    else if(bmi >= 25 && bmi < 30) return 'an overweight';
    else if(bmi >= 30) return 'an obese weight';
    else return 'invalid BMI';
}

export function healthyWeightRange(height: number): number[] {
    const height2 = height * height;
    return [18.5 * height2, 24.9 * height2 ];
}

// export function BMISummaryStatement(bmi: number, height: number, weight: number, option: string): string {
//     console.log('BMISummaryStatement: ', bmi, height, weight, option);
//     const range = healthyWeightRange(height);
//     const summary = 
//         'Your BMI suggests you’re ' + BMISummary(bmi) + '. ' +
//         'Your ideal weight is between' + 
//         (option === 'metric' ? range[0].toFixed(1) + 'kgs': metricWeight2ImperialWeightStr(range[0])) +
//         '-' + 
//         (option === 'metric' ? range[1].toFixed(1) + 'kgs': metricWeight2ImperialWeightStr(range[1])) +
//         '.';
//     ;
//     return summary;
// }
