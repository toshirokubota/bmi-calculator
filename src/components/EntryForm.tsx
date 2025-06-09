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
        <form>
            <h2 className="text-2xl font-semibold mb-4">Enter your details below</h2>
            <div className='flex flex-row items-center gap-4 mb-4'>
                <div className="w-1/2 flex items-center gap-2">
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
                <div className="w-1/2 flex items-center gap-2">
                    <input 
                        type='radio' 
                        id='imperial-radio' 
                        name='measure-options' 
                        value='imperial'
                        checked={measurementOption === 'imperial'}
                        onChange={handleChange}
                    />
                    <label htmlFor="imperial-radio">Imperial</label>
                </div>
            </div>

            {measurementOption === 'metric' ? 
                <div aria-hidden={measurementOption !== 'metric'}>
                    <MetricForm setBMI={setBMI} setHeight={setHeight} setWeight={setWeight}/> 
                </div>
                :
                <div aria-hidden={measurementOption === 'metric'}>
                    <ImperialForm setBMI={setBMI} setHeight={setHeight} setWeight={setWeight}/>
                </div>
            }
        </form>
    )
}