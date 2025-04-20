import React from 'react';
import support from '../images/output-onlinepngtools (1).png';
import privacy from '../images/output-onlinepngtools.png';
import affordable from '../images/output-onlinepngtools (2).png';

const features = [
  {
    title: 'Experienced and Reliable',
    description:
      'We’re not an agency, but a young startup run by a passionate group of professionals. We train our workers at certified training centers.',
    image: privacy,
  },
  {
    title: 'Transparent Pricing',
    description:
      'You get what you pay for. Additionally, you get replacement guarantee, Covid-19 test reports, verification documents and more!',
    image: affordable,
  },
  {
    title: 'Customer Support',
    description:
      'Our executives will always be there to hear you out and solve your issues.',
    image: support,
  },
];

const Feature = () => {
  return (
    <section className='py-16 px-4 bg-richblack-900 text-white'>
      <h2 className='text-4xl sm:text-5xl font-bold text-center mb-16 tracking-wide'>
        Why Choose Us?
      </h2>

      <div className='flex flex-wrap justify-center gap-10 max-w-7xl mx-auto'>
        {features.map((item, index) => (
          <div
            key={index}
            className='max-w-[320px] text-center bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-yellow-200/20 transition-all duration-300 hover:scale-105 animate-fade-in'
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-[100px] h-[100px] object-contain mx-auto mb-6'
            />
            <h3 className='text-xl font-semibold text-yellow-50 mb-3'>{item.title}</h3>
            <p className='text-richblack-100 text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
