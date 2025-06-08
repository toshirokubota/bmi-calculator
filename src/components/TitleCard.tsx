import { staticAsset } from "../libs";

export default function TitleCard() {
    return (
        <section className='title-section flex flex-col'>
            <h1 className="text-5xl">Body Mass Index Calculator</h1>
            <p className="text-gray-500">
                Better understand your weight in relation to your height using our body mass index 
                (BM) calculator. While BMI is not the sole determinant of a healthy weight, 
                it offers a valuable starting point to evaluate your overall health and well-being.
            </p>
        </section>
    )
}