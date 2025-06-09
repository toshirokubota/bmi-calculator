import { useEffect, useState } from "react";
import { BMI, inch2meter, lbs2kg, strictParseFloat } from "../libs";

export default function ImperialForm({setBMI, setHeight, setWeight}:
    {
        setBMI: React.Dispatch<React.SetStateAction<number>>,
        setHeight: React.Dispatch<React.SetStateAction<number>>,
        setWeight: React.Dispatch<React.SetStateAction<number>>
    }
){
    const [heightInputInch, setHeightInputInch] = useState<string>('');
    const [heightInputFeet, setHeightInputFeet] = useState<string>('');
    const [weightInputStone, setWeightInputStone] = useState<string>('');
    const [weightInputLbs, setWeightInputLbs] = useState<string>('');

    useEffect(()=>{
        const heightFeet = strictParseFloat(heightInputFeet);
        const heightInch = strictParseFloat(heightInputInch);
        const weightStone = strictParseFloat(weightInputStone);
        const weightLbs = strictParseFloat(weightInputLbs);
        if(heightFeet === heightFeet && heightInch === heightInch &&
            weightStone === weightStone && weightLbs === weightLbs
        ) {
            const heightMetric = inch2meter(heightFeet * 12 + heightInch);
            const weightMetric = lbs2kg(weightStone * 14 + weightLbs);
            setBMI(BMI(heightMetric, weightMetric));
            setHeight(heightMetric);
            setWeight(weightMetric);
        } else {
            setBMI(NaN);
        }
    }, [heightInputInch, heightInputFeet, weightInputStone, weightInputLbs]);
    
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        if(name === 'height-feet') {
            setHeightInputFeet(value);
        } else if(name === 'height-inch') {
            setHeightInputInch(value);
        } else if(name === 'weight-stone') {
            setWeightInputStone(value);
        } else if(name === 'weight-lbs') {
            setWeightInputLbs(value);
        }
    }

    return (
        <div className='imperial-form'>
            <label htmlFor="height-feet" className="text-sm text-gray-600 text-left block">Height<span className="sr-only"> feet</span></label>
            <div className="flex flex-row items-center gap-4 mb-4">
                <div className="input-wrapper">
                <input 
                    type='text' 
                    id='height-feet'
                    value={heightInputFeet} 
                    name='height-feet'
                    onChange={changeHandler}
                />
                <span>ft</span>
                </div>

                <label htmlFor="height-inch" className="sr-only">Height inches</label>
                <div className="input-wrapper">
                <input 
                    type='text' 
                    id='height-inch'
                    value={heightInputInch} 
                    name='height-inch'
                    onChange={changeHandler}
                />
                <span>in</span>
                </div>
            </div>

            <label htmlFor="weight-stone" className="text-sm text-gray-600 text-left block">Weight <span className="sr-only">stones</span></label>
            <div className="flex flex-row gap-4 mb-4">
            <div className="input-wrapper">
            <input 
                type='text' 
                id='weight-stone'
                value={weightInputStone} 
                name='weight-stone'
                onChange={changeHandler}
            />
            <span>st</span>
            </div>

            <label htmlFor="weight-lbs" className="sr-only">Weight lbs</label>
            <div className="input-wrapper">
            <input 
                type='text' 
                id='weight-lbs'
                value={weightInputLbs} 
                name='weight-lbs'
                onChange={changeHandler}
            />
            <span>lbs</span>
            </div>
            </div>

        </div>
    )
}