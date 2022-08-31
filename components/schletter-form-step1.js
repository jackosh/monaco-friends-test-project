import React, { Component } from 'react';

import {
    Column,
    Form,
    Grid,
    RadioButton,
    Tile
} from '@carbon/react';

import SchletterFormProgressIndicator from './schletter-form-progress-indicator';

import SchletterFormStepAbstract from './schletter-form-step-abstract';

export default class SchletterFormStep2 extends SchletterFormStepAbstract {
    constructor(props) {
        super(props);
    }

    handleRoleChange(role) {
        this.props.setFormData({
            ...this.props.formData,
            role 
        });

    }
  
    render() {
        return (
            <Form className="form step-1">
                <div className="form-header">
                    <h1 className="form-header-1">Schletter Tracking Systems</h1>
                    <h2 className="form-header-2">Proposal Calculator</h2>
                </div>
                <Grid fullWidth>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <h2 className="form-inline-header">What is your role?</h2>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <SchletterFormProgressIndicator step={this.props.step} />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <p>Let us now your role in the project, so we can provide you with right documents and information.</p>
                    </Column>
                </Grid>
                <div className="form-tiles-wrapper">
                            <Tile onClick={() => this.handleRoleChange("Account Manager")} className="form-tile">
                                <img className="account-manager-icon" src="/images/account-manager.svg" />
                                <div className="spacing-06"></div>
                                <RadioButton
                                    id="formData_accountManager"
                                    labelText="Account Manager"
                                    value="Account Manager"
                                    checked={this.props.formData.role === 'Account Manager'}
                                    onChange={(role) => this.handleRoleChange(role)}
                                />
                            </Tile>
                            <Tile onClick={() => this.handleRoleChange("Legal entity")} className="form-tile">
                                <img className="legal-entity-icon" src="/images/legal-entity.svg" />
                                <div className="spacing-06"></div>
                                <RadioButton
                                    id="formData_LegalEntity"
                                    labelText="Legal entity"
                                    value="Legal entity"
                                    checked={this.props.formData.role === 'Legal entity'}
                                    onChange={(role) => this.handleRoleChange(role)}
                                />
                            </Tile>
                            <Tile onClick={() => this.handleRoleChange("Technical Manager")} className="form-tile">
                                <img className="technical-manager-icon" src="/images/technical-manager.svg" />
                                <div className="spacing-06"></div>
                                <RadioButton
                                    id="formData_technicalManager"
                                    labelText="Technical Manager"
                                    value="Technical Manager"
                                    checked={this.props.formData.role === 'Technical Manager'}
                                    onChange={(role) => this.handleRoleChange(role)}
                                />
                            </Tile>
                </div>
            </Form>
        )
    }
}
