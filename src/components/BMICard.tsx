import { BMISummary, healthyWeightRange, metricWeight2ImperialWeightStr } from "../libs";

export default function BMICard({bmi, height, weight, option}: 
    {bmi: number, height: number, weight: number, option: string}) {
        const summary: string = bmi === bmi ? 'Your BMI suggests you’re ' + BMISummary(bmi) + '. ': '';
        let weightSummary: React.JSX.Element = <></>;
        if(height === height) {
            const range = healthyWeightRange(height);
            const rangeLow: string = option === 'metric' ? range[0].toFixed(1) + 'kgs': metricWeight2ImperialWeightStr(range[0]);
            const rangeHigh: string = option === 'metric' ? range[1].toFixed(1) + 'kgs': metricWeight2ImperialWeightStr(range[1]);
            weightSummary = (
                <>
                Your ideal weight is between <span className="font-bold">{rangeLow} - {rangeHigh}</span>.
                </>
            );

        }

    return (
      <div className="result-card flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col">
            <p className="text-left">Your BMI is...</p>
            <p className="text-5xl text-left font-bold">{bmi === bmi ? bmi.toFixed(1): ''}</p>
        </div>
        <p className="text-left">
          {bmi === bmi && summary }
          {height === height && weightSummary }
        </p>
      </div>
    );
}