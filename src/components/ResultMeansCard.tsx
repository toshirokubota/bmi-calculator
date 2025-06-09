import { staticAsset } from "../libs";

export default function ResultMeansCard() {
  return (
    <section className='result-means flex flex-col sm:flex-row'>
      <img src={staticAsset('/images/image-man-eating.webp')} alt='man eating'/>
      <div>
        <img src={staticAsset('/images/pattern-curved-line-left.svg')} alt='' 
            className="curved-pattern hidden ml-auto pr-12 lg:block"/>
        <h2 className="text-3xl font-semibold text-gray-900">What your BMI result means</h2>
        <p className="text-gray-500 text-left">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for a
            nutritious diet with reduced fat and sugar content, incorporating ample
            fruits and vegetables. Additionally, strive for regular physical
            activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
}
