import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Timeline() {
    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState([

      { id: '01', name: 'Book a Consultation', status: 'upcoming',     description: 'You have successfully booked your consultation.', isActive: true, image: '/allwhite.jpg'
 
    },
      { id: '02', name: 'Design your closet', status: 'upcoming',     description: 'Your closet design is being prepared.', isActive: false, image: '/allwhite.jpg'
    },
      { id: '03', name: 'Installation',  status: 'upcoming',    description: 'Set up an installation with us.', isActive: false, image: '/allwhite.jpg'
    },
      { id: '04', name: 'Enjoy your new space', status: 'upcoming',     description: 'Your closet design is being prepared.', isActive: false, image: '/allwhite.jpg'
    },
    
    ])
    
    const handleStepClick = (stepIdx) => {
      setCurrentStep(stepIdx);
      const updatedSteps = steps.map((step, index) => ({
        ...step,
        isActive: index === stepIdx,
      }));
      setSteps(updatedSteps); // Assuming you add a useState for steps
    };
  return (
       <div>
    <nav aria-label="Progress">
      <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
            <li key={step.name}  className={`relative md:flex md:flex-1 ${step.isActive ? 'bg-red-800' : ''}`}  onClick={() => handleStepClick(stepIdx)}>
            {step.status === 'complete' ? (
              <a href={step.href} className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                </span>
              </a>
            ) : step.status === 'current' ? (
              <a href={step.href} className="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                  <span className="text-indigo-600">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-indigo-600">{step.name}</span>
              </a>
            ) : (
              <a href={step.href} className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div className="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
              
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
      
    </nav>
    <div className="step-content my-24 grid grid-cols-2">
      <div>
        <img src={steps[currentStep].image} alt={steps[currentStep].title} />
        </div>
        <div>
        <h2>{steps[currentStep].title}</h2>
        <p>{steps[currentStep].description}</p>
        </div>
      </div>
    </div>
  )
}
