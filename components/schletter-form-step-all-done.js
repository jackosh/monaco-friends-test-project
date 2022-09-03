import React, { Component } from 'react';

import { Grid, Column } from '@carbon/react';
import { Form } from '@carbon/react';
import { Tile } from '@carbon/react';
import { TextInput, RadioButton } from '@carbon/react';
import { Button } from '@carbon/react';

import { ReactDebugHelper } from './helpers/ReactDebugHelper';

import SchletterFormProgressIndicator from './schletter-form-progress-indicator';

import SchletterFormStepAbstract from './schletter-form-step-abstract';

export default class SchletterFormStepAllDone extends SchletterFormStepAbstract {
    constructor(props) {
        super(props);
    }

    handleTerrainCategoryChange(terrainCategory) {
        this.props.setFormData({
            ...this.props.formData,
            terrainCategory 
        });
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
                        <h2 className="form-inline-header">Thank you for your request. We will provide you a first proposal via email.</h2>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <SchletterFormProgressIndicator step={this.props.step} />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <p>We will contact you by the next work day. In case you want to get a more detailed proposal, go on with the project refinement.</p>
                    </Column>
                </Grid>
                <ReactDebugHelper {...this.props.formData} />
            </Form>
        )
    }
}
