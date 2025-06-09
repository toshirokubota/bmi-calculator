import { useEffect, useState } from 'react';
import './App.css'
import TitleCard from './components/TitleCard'
import BMICard from './components/BMICard';
import { staticAsset } from './libs';
import ResultMeansCard from './components/ResultMeansCard';
import RecommendationCard from './components/RecommendationCard';
import EntryForm from './components/EntryForm';
import WelcomeCard from './components/WelcomeCard';
import LimitationCard from './components/LimitationCard';

function App() {
  const [bmi, setBMI] = useState<number>(NaN);
  const [height, setHeight] = useState<number>(0);
  const [_weight, setWeight] = useState<number>(0);
  const [measurementOption, setMeasurementOption] = useState<string>('metric');
  const [formEmpty, setFormEmpty] = useState<boolean>(true);

  useEffect(() => {
    if (bmi === bmi) {
      setFormEmpty(false);
    }
  }, [bmi]);


  return (
    <main className='flex flex-col justify-center'>
      <div className='top-container flex flex-col'>
        <div className='top-area grad-bg flex flex-col items-center lg:items-start'>
          <img src={staticAsset('/images/logo.svg')} alt='bmi calculator logo' 
            className='w-10 lg:mt-4'/>
          <TitleCard />
        </div>
        <section className='entry-section bg-white rounded-xl'>
          <EntryForm 
            setBMI={setBMI} setHeight={setHeight} setWeight={setWeight}
            measurementOption={measurementOption} setMeasurementOption={setMeasurementOption}
            />
          {
            formEmpty ?
              <div aria-hidden={!formEmpty}>
                <WelcomeCard />
              </div>
              :
              <div aria-hidden={formEmpty}>
                <BMICard bmi={bmi} height={height} option={measurementOption}/>
              </div>
          }
        </section>
      </div>
      <ResultMeansCard />
      <RecommendationCard />
      <LimitationCard />
    </main>
  )
}

export default App
