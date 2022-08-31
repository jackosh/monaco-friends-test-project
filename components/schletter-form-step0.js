import React, { Component } from 'react';

import {
    Grid,
    Column,
    Form,
    TextInput
 } from '@carbon/react';

import SelectCountry from './select-country';

import SchletterFormProgressIndicator from './schletter-form-progress-indicator';

import SchletterFormStepAbstract from './schletter-form-step-abstract';

export default class SchletterFormStep1 extends SchletterFormStepAbstract {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form className="form step-0">
                <div className="form-header">
                    <h1 className="form-header-1">Schletter Tracking Systems</h1>
                    <h2 className="form-header-2">Proposal Calculator</h2>
                </div>
                <Grid fullWidth>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <h2 className="form-inline-header">Who are you?</h2>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <SchletterFormProgressIndicator step={this.props.step} />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <p>Basic information needed to calculate a reference price for your project</p>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_legalName"
                            name="legalName"
                            value={this.props.formData.legalName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Legal name"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_contactName"
                            name="contactName"
                            value={this.props.formData.contactName}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Contact Name"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_dbaTaxIdNumber"
                            name="dbaTaxIdNumber"
                            value={this.props.formData.dbaTaxIdNumber}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="DBA / Tax-Id-Number"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_technicalAdvisorContact"
                            name="technicalAdvisorContact"
                            value={this.props.formData.technicalAdvisorContact}
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Technical Advisor Contact"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_contactEmail"
                            name="contactEmail"
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Contact email"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_phoneNumber"
                            name="phoneNumber"
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Phone number"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_city"
                            name="city"
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="City"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_zipCode"
                            name="zipCode"
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="ZIP Code"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <TextInput
                            id="formData_technicalAdvisorContact_1"
                            name="technicalAdvisorContact_1"
                            onChange={(e) => this.handleInput(e)}
                            invalidText="A valid value is required"
                            labelText="Technical Advisor Contact"
                            placeholder="Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <SelectCountry
                            formData={this.props.formData}
                            name="country"
                            labelText="Country"
                            handleInput={(e) => this.handleInput(e)}
                        />
                    </Column>
                </Grid>
            </Form>
        )
    }
}
