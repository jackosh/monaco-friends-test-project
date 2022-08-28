import React, { useState } from 'react';

import SchletterFormStep0 from './schletter-form-step0';
import SchletterFormStep1 from './schletter-form-step1';
import SchletterFormStep2 from './schletter-form-step2';
import SchletterFormStep3 from './schletter-form-step3';

import { Button } from '@carbon/react';

export default function SchletterForm () {
    const stepsNumber = 3;
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        legalName: "",
        contactName: "",
        dbaTaxIdNumber: "",
        technicalAdvisorContact: "",
        contactEmail: "",
        phoneNumber: "",
        city: "",
        zipCode: "",
        technicalAdvisorContact_1: "",
        country: null,
        role: "Account Manager",
        projectNumber: "",
        projectName: "",
        totalProjectSizeDC: "",
        projectType: null,
        projectZipCode: "",
        projectCountry: null,
        moduleModel: "",
        modulePower: "",
        moduleHeight: 0, // mm
        moduleWidth: 0, // mm
        moduleFrameThickness: 0, // mm
        moduleWeight: 0, // mm
        groundClearanceToLowerEdge: 0, // mm
        tilt: "",
        moduleOrientation: null,
        stringSize: null,
    });
    const conditionalComponent = () => {
        switch (step) {
            case 0:
                return <SchletterFormStep0 step={step} formData={formData} setFormData={setFormData} />;
            case 1:
                return <SchletterFormStep1 step={step} formData={formData} setFormData={setFormData} />;
            case 2:
                return <SchletterFormStep2 step={step} formData={formData} setFormData={setFormData} />;
            case 3:
                return <SchletterFormStep3 step={step} formData={formData} setFormData={setFormData} />;
            default:
                return <SchletterFormStep0 step={step} formData={formData} setFormData={setFormData} />;
        }
    }; 


    function handleSubmit () {
        setStep(step + 1);
        if (step == stepsNumber) {
            console.log('handle submit');
            alert('input values: ' + JSON.stringify(formData));
        }
    }

    return (
        <>
            {conditionalComponent()}
            {
                step > 0 && <Button className="form-action-button" onClick={() => setStep(step - 1)}>Previous</Button>
            }
            <Button className="form-action-button" onClick={handleSubmit}>
                { step < stepsNumber ? "Next" : "Submit" }
            </Button>
        </>
  )
}