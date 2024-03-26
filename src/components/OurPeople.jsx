import React, { useState } from 'react';

const ourPeople = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div className='w-full  flex justify-center p-0 sm:p-5'>
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
    question:"What is ATX Premium Mass Gainer Chocolate 1KG?",
    answer:
      'ATX Premium Mass Gainer Chocolate 1KG is a high-calorie supplement formulated to support muscle growth and weight gain goals.',
  },
  {
    question: "ATX Premium Mass Gainer Chocolate 1KG is a high-calorie supplement formulated to support muscle growth and weight gain goals.",
    answer:
      'Follow the serving size instructions provided on the product packaging or consult with a healthcare professional for personalized recommendations.',
  },
  {
    question:"How do I choose the right mass gainer from ATX NUTRITION for my goals?",
    answer:
      'Consider factors such as your fitness goals (e.g., muscle building, weight gain), calorie needs, protein and carbohydrate content preferences, and any dietary restrictions when selecting a mass gainer product from ATX NUTRITION.',
  },

  {
    question:"Are ATX NUTRITION's mass gainer products suitable for beginners or advanced athletes?",
    answer:
      'ATX NUTRITION offers mass gainer options suitable for individuals at various fitness levels, from beginners to advanced athletes. The products are designed to support diverse fitness goals and training intensities.',
  },

  {
    question:"What is the recommended usage of ATX NUTRITION's mass gainer supplements?",
    answer:
      'ATX NUTRITION offers mass gainer options suitable for individuals at various fitness levels, from beginners to advanced athletes. The products are designed to support diverse fitness goals and training intensities.',
  },

  {
    question:"What types of proteins are used in ATX NUTRITION's protein powders?",
    answer:
      'ATX NUTRITION s protein powders may contain a blend of whey protein isolate, whey protein concentrate, casein protein, or plant-based proteins like pea protein, soy protein, or rice protein, depending on the product.',
  }
];

export default ourPeople;
