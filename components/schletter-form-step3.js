import React, { Component } from 'react';

import { Grid, Column } from '@carbon/react';
import { Button } from '@carbon/react';
import { Form } from '@carbon/react';
import { TextInput, Select, SelectItem } from '@carbon/react';

import SchletterFormProgressIndicator from './schletter-form-progress-indicator';

export default class SchletterFormStep2 extends Component {
    constructor(props) {
        super(props);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;

        this.props.setFormData({
            ...this.props.formData,
            [name]: value,
        });
    }
  
    handleSubmit(e) {
        e.preventDefault();
        let formData = this.props.formData;
        console.log('handle submit');
        alert('input values: ' + JSON.stringify(formData));
    }
  
    render() {
        return (
            <Form className="form step-3">
                <div className="form-header">
                    <h1 className="form-header-1">Schletter Tracking Systems</h1>
                    <h2 className="form-header-2">Proposal Calculator</h2>
                </div>
                <Grid fullWidth>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <h2 className="form-inline-header">What kind of modules and system do you want to use?</h2>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <SchletterFormProgressIndicator step={this.props.step} />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <p>Please provide details regarding the modules you intend to use for your project.</p>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_moduleModel"
                            name="moduleModel"
                            value={this.props.formData.legalName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Module model"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_modulePower"
                            name="modulePower"
                            value={this.props.formData.contactName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Module Power"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_moduleHeight"
                            name="moduleHeight"
                            value={this.props.formData.legalName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Module Height (mm)"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_moduleWidth"
                            name="moduleWidth"
                            value={this.props.formData.contactName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Module Width (mm)"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_moduleFrameThickness"
                            name="moduleFrameThickness"
                            value={this.props.formData.legalName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Module Frame Thickness (mm)"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_moduleWeight"
                            name="moduleWeight"
                            value={this.props.formData.contactName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Module Weight"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_groundClearanceToLowerEdge"
                            name="groundClearanceToLowerEdge"
                            value={this.props.formData.legalName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Ground Clearance to Lower Edge (mm)"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_tilt"
                            name="tilt"
                            value={this.props.formData.contactName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Tilt"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <Select
                            id="formData_moduleOrientation"
                            defaultValue="placeholder-item"
                            labelText="Module Orientation"
                            value={this.props.formData.moduleOrientation}
                            onChange={(e) => this.handleInput(e)}
                            name="moduleOrientation"
                            className="cds--text-input-wrapper"
                        >
                            <SelectItem
                                disabled
                                hidden
                                value="placeholder-item"
                                text="Choose an option"
                            />
                            <SelectItem value="option-1" text="Option 1" />
                            <SelectItem value="option-2" text="Option 2" />
                        </Select>
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <Select
                            id="formData_stringSize"
                            defaultValue="placeholder-item"
                            labelText="String Size"
                            value={this.props.formData.stringSize}
                            onChange={(e) => this.handleInput(e)}
                            name="stringSize"
                            className="cds--text-input-wrapper"
                        >
                            <SelectItem
                                disabled
                                hidden
                                value="placeholder-item"
                                text="Choose an option"
                            />
                            <SelectItem value="option-1" text="Option 1" />
                            <SelectItem value="option-2" text="Option 2" />
                        </Select>
                    </Column>
                </Grid>
            </Form>
        )
    }
}
