import React, { useState } from 'react';

import SchletterFormStep0 from './schletter-form-step0';
import SchletterFormStep1 from './schletter-form-step1';
import SchletterFormStep2 from './schletter-form-step2';
import SchletterFormStep3 from './schletter-form-step3';
import SchletterFormStep4 from './schletter-form-step4';
import SchletterFormStepAllDone from './schletter-form-step-all-done';

import { Button } from '@carbon/react';

export default function SchletterForm () {
    const stepsNumber = 5;
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
        country: "placeholder-item",
        role: "Account Manager",
        projectNumber: "",
        projectName: "",
        totalProjectSizeDC: "",
        projectType: "placeholder-item",
        projectZipCode: "",
        projectCountry: "placeholder-item",
        moduleModel: "",
        modulePower: "",
        moduleHeight: 0, // mm
        moduleWidth: 0, // mm
        moduleFrameThickness: 0, // mm
        moduleWeight: 0, // mm
        groundClearanceToLowerEdge: 0, // mm
        tilt: "",
        moduleOrientation: "placeholder-item",
        stringSize: "placeholder-item",
        terrainCategory: ""
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
            case 4:
                return <SchletterFormStep4 step={step} formData={formData} setFormData={setFormData} />;
            case 5:
                return <SchletterFormStepAllDone step={step} formData={formData} setFormData={setFormData} />;
            default:
                return <SchletterFormStep0 step={step} formData={formData} setFormData={setFormData} />;
        }
    }; 


    function handleSubmit () {
        setStep(step + 1);
        if (step == stepsNumber - 1) {
            // sumbit form to backend
            console.log('submit Form:', formData);
        }
    }

    return (
        <>
            {conditionalComponent()}
            {/* Previous */}
            {
                step > 0 && step < stepsNumber &&
                <Button kind="secondary" className="form-action-button" onClick={() => setStep(step - 1)}>Previous</Button>
            }
            {/* Next/Submit Button */}
            {
                step < stepsNumber &&
                <Button
                    kind="primary"
                    className={`form-action-button ${step == 0? 'start': ''}`}
                    onClick={handleSubmit}
                >
                    { step < stepsNumber - 1 ? "Next" : "Submit Form" }
                </Button>
            }
            {/* Last step */}
            {
                step == stepsNumber &&
                <Button className="form-action-button-submit">
                    Continue with the refinement
                </Button>
            }
        </>
  )
}