import { staticAsset } from "../libs";

export default function LimitationCard() {
  return (
    <section className="limitation-section mt-4">
      <div>
        <h2 className="text-3xl text-gray-900 font-bold">Limitations of BMI</h2>
        <p className="text-center">
            Although BMI is often a practical indicator of healthy weight, it is not
            suited for every person. Specific groups should carefully consider their
            BMI outcomes, and in certain cases, the measurement may not be
            beneficial to use.
        </p>
      </div>

      <div className="limitation-card p-6 mb-2 bg-white rounded-lg">
        <div className='flex flex-row items-center gap-4'>
        <img src={staticAsset("/images/icon-gender.svg")} alt="gender icon" />
        <h4 className='text-xl text-slate-900'>Gender</h4>
        </div>
        <p className='text-gray-500 text-left'>
          The development and body fat composition of girls and boys vary with
          age. Consequently, a child's age and gender are considered when
          evaluating their BMI.
        </p>
      </div>
      <img src={staticAsset('/images/pattern-curved-line-right.svg')} alt=''
        className="hidden lg:block"/>
      <div className="limitation-card p-6 mb-2 bg-white rounded-lg">
        <div className='flex flex-row items-center gap-4'>
        <img src={staticAsset("/images/icon-age.svg")} alt="age icon" />
        <h4 className='text-xl text-slate-900'>Age</h4>
        </div>
        <p className='text-gray-500 text-left'>
          In aging individuals, increased body fat and muscle loss may cause BMI
          to underestimate body fat content.
        </p>
      </div>
      <div className="limitation-card p-6 mb-2 bg-white rounded-lg">
        <div className='flex flex-row items-center gap-4'>
        <img src={staticAsset("/images/icon-muscle.svg")} alt="muscle icon" />
        <h4 className='text-xl text-slate-900'>Muscle</h4>
        </div>
        <p className='text-gray-500 text-left'>
          BMI may misclassify muscular individuals as overweight or obese, as it
          doesn't differentiate muscle from fat.
        </p>
      </div>
      <div className="limitation-card p-6 mb-2 bg-white rounded-lg">
        <div className='flex flex-row items-center gap-4'>
        <img
          src={staticAsset("/images/icon-pregnancy.svg")}
          alt="pregnancy icon"
        />
        <h4 className='text-xl text-slate-900'>Pregnancy</h4>
        </div>
        <p className='text-gray-500 text-left'>
          Expectant mothers experience weight gain due to their growing baby.
          Maintaining a healthy pre-pregnancy BMI is advisable to minimise
          health risks for both mother and child.
        </p>
      </div>
      <div className="limitation-card p-6 mb-2 bg-white rounded-lg">
        <div className='flex flex-row items-center gap-4'>
        <img src={staticAsset("/images/icon-race.svg")} alt="race icon" />
        <h4 className='text-xl text-slate-900'>Race</h4>
        </div>
        <p className='text-gray-500 text-left'>
          Certain health concerns may affect individuals of some Black and Asian
          origins at lower BMIs than others. To learn more, it is advised to
          discuss this with your GP or practice nurse.
        </p>
      </div>
    </section>
  );
}
