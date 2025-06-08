import { staticAsset } from "../libs";

export default function RecommendationCard() {
  return (
    <section className='recommendation-section grad-bg mt-4'>
      <div className='flex flex-col'>
        <img src={staticAsset("/images/icon-eating.svg")} alt="" 
            className='w-16 my-8'/>
        <div>
            <h3 className="text-2xl text-gray-900 text-left">Healthy eating</h3>
            <p className="text-gray-500 text-left">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
            </p>
        </div>
      </div>
      <div className='flex flex-col'>
        <img src={staticAsset("/images/icon-exercise.svg")} alt=""  
            className='w-16 my-8'/>
        <div>
        <h3 className="text-2xl text-gray-900 text-left">Regular exercise</h3>
        <p className="text-gray-500 text-left">
          Exercise improves fitness, aids weight control, elevates mood, and
          reduces disease risk, fostering wellness and longevity.
        </p>
        </div>
      </div>
      <div className='flex flex-col'>
        <img src={staticAsset("/images/icon-sleep.svg")} alt=""  
            className='w-16 my-8'/>
        <div>
        <h3 className="text-2xl text-gray-900 text-left">Adequate sleep</h3>
        <p className="text-gray-500 text-left">
          Sleep enhances mental clarity, emotional stability, and physical
          wellness, promoting overall restoration and rejuvenation.
        </p>
        </div>
      </div>
    </section>
  );
}
