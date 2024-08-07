// src/components/Collection.jsx
import React from 'react';
import a from "../../assets/1.jpeg";
import b from "../../assets/2.jpeg";
import c from "../../assets/3.jpeg";
import d from "../../assets/4.jpg";
import e from "../../assets/5.jpeg";

const Collection = () => {
  return (
    <section className="relative py-16 px-4 mt-8 mb-8 bg-gray-100">
      <h1 className='text-center text-5xl font-light mb-40 italic'>New Collections</h1>
      <div className="container mx-auto relative mt-8">
        <div className="relative">
          {/* Card Container */}
          <div className="flex justify-center items-end relative space-x-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center translate-y-12">
              <div className="card bg-base-100 w-48 h-72 shadow-xl flex flex-col z-10 rounded-none">
                <figure className="relative h-full overflow-hidden">
                  <img src={a} alt="Card 1" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="mt-2 text-center">
                <div className="rating rating-md">
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p>Wedding Dress</p>
                <p className='font-bold text-red-600'>Morning Wedding Dress</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center">
              <div className="card bg-base-100 w-52 h-80 shadow-xl flex flex-col z-20 rounded-none">
                <figure className="relative h-full overflow-hidden">
                  <img src={b} alt="Card 2" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="mt-2 text-center">
                <div className="rating rating-md">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p>Stylish Dress</p>
                <p className='font-bold text-red-600'>Elegant Summer Dress</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center -translate-y-12">
              <div className="card bg-base-100 w-60 h-96 shadow-xl flex flex-col z-30 rounded-none">
                <figure className="relative h-full overflow-hidden">
                  <img src={c} alt="Card 3" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="mt-2 text-center">
                <div className="rating rating-md">
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p>Wedding Dress</p>
                <p className='font-bold text-red-600'>Night Wedding Dress</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center">
              <div className="card bg-base-100 w-52 h-80 shadow-xl flex flex-col z-20 rounded-none">
                <figure className="relative h-full overflow-hidden">
                  <img src={d} alt="Card 4" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="mt-2 text-center">
                <div className="rating rating-md">
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p>Chic Dress</p>
                <p className='font-bold text-red-600'>Elegant Evening Dress</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center translate-y-12">
              <div className="card bg-base-100 w-48 max-h-72 shadow-xl flex flex-col z-10 rounded-none">
                <figure className="relative h-full overflow-hidden">
                  <img src={e} alt="Card 5" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="mt-2 text-center">
                <div className="rating rating-md">
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p>Classic Dress</p>
                <p className='font-bold text-red-600'>Timeless Classic Dress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
