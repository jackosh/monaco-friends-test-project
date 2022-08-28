import React, { Component } from 'react';

import { Grid, Column } from '@carbon/react';
import { Button } from '@carbon/react';
import { Form } from '@carbon/react';
import { TextInput, Select, SelectItem } from '@carbon/react';
import SelectCountry from './select-country';


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
            <Form className="form step-2">
                <div className="form-header">
                    <h1 className="form-header-1">Schletter Tracking Systems</h1>
                    <h2 className="form-header-2">Proposal Calculator</h2>
                </div>
                <Grid fullWidth>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <h2 className="form-inline-header">What can you tell us about the project?</h2>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <SchletterFormProgressIndicator step={this.props.step} />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <p>Please share some basic details about your project so we can make sure our offer perfectly matches your needs.</p>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_projectNumber"
                            name="projectNumber"
                            value={this.props.formData.projectNumber}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Project number"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_projectName"
                            name="projectName"
                            value={this.props.formData.projectName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Project name"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_totalProjectSizeDC"
                            name="totalProjectSizeDC"
                            value={this.props.formData.totalProjectSizeDC}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Total Project Size (DC)"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <Select
                            id="formData_projectType"
                            defaultValue="placeholder-item"
                            labelText="Project type"
                            value={this.props.formData.projectType}
                            onChange={(e) => this.handleInput(e)}
                            name="projectType"
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
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_projectZipCode"
                            name="projectZipCode"
                            value={this.props.formData.projectZipCode}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Project ZIP Code"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <SelectCountry
                            formData={this.props.formData}
                            name="projectCountry"
                            labelText="Project country"
                            handleInput={(e) => this.handleInput(e)}
                        />
                    </Column>
                </Grid>
            </Form>
        )
    }
}
