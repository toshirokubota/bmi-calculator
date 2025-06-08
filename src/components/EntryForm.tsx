import MetricForm from "./MetricForm";
import ImperialForm from "./ImperialForm";


export default function EntryForm({setBMI, setHeight, setWeight, 
    measurementOption, setMeasurementOption}:
    {
        setBMI: React.Dispatch<React.SetStateAction<number>>,
        setHeight: React.Dispatch<React.SetStateAction<number>>,
        setWeight: React.Dispatch<React.SetStateAction<number>>,
        measurementOption: string,
        setMeasurementOption: React.Dispatch<React.SetStateAction<string>>
    }
) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if(value === 'metric' || value === 'imperial') {
            setMeasurementOption(value);
        }
    }

    return (
        <form className="p-4">
            <h2 className="text-2xl">Enter your details below</h2>
            <div className='flex items-center justify-around'>
                <div>
                    <input 
                        type='radio' 
                        id='metric-radio' 
                        name='measure-options' 
                        value='metric'
                        checked={measurementOption === 'metric'}
                        onChange={handleChange}
                    />
                    <label htmlFor="metric-radio">Metric</label>
                </div>
                <div>
                    <input 
                        type='radio' 
                        id='metric-radio' 
                        name='measure-options' 
                        value='imperial'
                        checked={measurementOption === 'imperial'}
                        onChange={handleChange}
                    />
                    <label htmlFor="metric-radio">Imperial</label>
                </div>
            </div>

            {measurementOption === 'metric' ? 
                <MetricForm setBMI={setBMI} setHeight={setHeight} setWeight={setWeight}/> 
                :
                <ImperialForm setBMI={setBMI} setHeight={setHeight} setWeight={setWeight}/>
            }
        </form>
    )
}