import { useEffect, useState } from "react";
import { BMI, strictParseFloat } from "../libs";

export default function MetricForm({setBMI, setHeight, setWeight}:
    {
        setBMI: React.Dispatch<React.SetStateAction<number>>,
        setHeight: React.Dispatch<React.SetStateAction<number>>,
        setWeight: React.Dispatch<React.SetStateAction<number>>
    }
){
    const [heightInput, setHeightInput] = useState<string>('0');
    const [weightInput, setWeightInput] = useState<string>('0');
    useEffect(()=>{
        const height0 = strictParseFloat(heightInput);
        const weight0 = strictParseFloat(weightInput);
        console.log('inside useEffect: ', heightInput, weightInput, height0, weight0);
        if(height0 === height0 && weight0 === weight0) {
            setBMI(BMI(height0 / 100, weight0));
            setHeight(height0 / 100); //save in Meter
            setWeight(weight0); //save in Kilogram
        } else {
            setBMI(NaN);
        }
    }, [heightInput, weightInput]);
    
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        if(name === 'height') {
            setHeightInput(value);
        } else if(name === 'weight') {
            setWeightInput(value);
        }
    }
    return (
        <div className='metric-form flex flex-col'>
            <div className='flex flex-col items-start my-4'>
                <label htmlFor="height-cm" className="text-sm text-gray-600 text-left">Height</label>
                <div className="input-wrapper">
                    <input 
                        type='text' 
                        id='height-cm'
                        value={heightInput} 
                        name='height'
                        className="w-full"
                        onChange={changeHandler}
                    />
                    <span>cm</span>
                </div>
            </div>
            <div className='flex flex-col items-start my-4'>
                <label htmlFor="weight-kg" className="text-sm text-gray-600 text-left">Weight</label>
                <div className="input-wrapper">
                    <input 
                        type='text' 
                        id='weight-kg'
                        value={weightInput} 
                        name='weight'
                        className="w-full"
                        onChange={changeHandler}
                    />
                    <span>kg</span>
                </div>
            </div>
        </div>
    )
}