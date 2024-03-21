import React, { useState } from 'react';

const ourPeople = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div className='w-screen  flex justify-center'>
    <div className=' w-full sm:w-5/12 '>
    <div id="accordion-collapse" data-accordion="collapse">
      {accordionData.map((item, index) => (
        <div key={index}>
          <h2
            id={`accordion-collapse-heading-${index}`}
            onClick={() => handleAccordionClick(index)}
            className={`cursor-pointer ${
              activeAccordion === index ? 'bg-gray-100 dark:bg-gray-800' : ''
            }`}
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={activeAccordion === index}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <span>{item.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-180 shrink-0 ${
                  activeAccordion === index ? 'transform rotate-180' : ''
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${
              activeAccordion === index ? 'block' : 'hidden'
            }`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

const accordionData = [
  {
    question: 'What is ATX?',
    answer:
      'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
  },
  {
    question: 'Is there a Health Products?',
    answer:
      'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
  },
  {
    question: 'What are the differences Mass Gainer and Protein?',
    answer:
      'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
  },
];

export default ourPeople;
