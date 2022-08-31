import React, { Component } from 'react';

import { Grid, Column } from '@carbon/react';
import { Form } from '@carbon/react';
import { Tile } from '@carbon/react';
import { RadioButton } from '@carbon/react';

import SchletterFormProgressIndicator from './schletter-form-progress-indicator';

import SchletterFormStepAbstract from './schletter-form-step-abstract';

export default class SchletterFormStep2 extends SchletterFormStepAbstract {
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
                        <h2 className="form-inline-header">What kind of category is the terrain of your project?</h2>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <SchletterFormProgressIndicator step={this.props.step} />
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={16} md={8} sm={4} className="landing-page__banner">
                        <p>The surrounding terrain of your project is a mandatory factor for our setup. </p>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <Tile onClick={() => this.handleTerrainCategoryChange("Category I")} className="form-tile terrain-category terrain-category-1">
                            <RadioButton
                                id="formData_terrainCategory-1"
                                labelText="Category I"
                                value="Category I"
                                checked={this.props.formData.terrainCategory === 'Category I'}
                                onChange={(e) => this.handleTerrainCategoryChange(e)}
                            />
                            <p>Lake, coastal area exposed to open water</p>
                        </Tile>
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <Tile onClick={() => this.handleTerrainCategoryChange("Category II")} className="form-tile terrain-category terrain-category-2">
                            <RadioButton
                                id="formData_terrainCategory-2"
                                labelText="Category II"
                                value="Category II"
                                checked={this.props.formData.terrainCategory === 'Category II'}
                                onChange={(e) => this.handleTerrainCategoryChange(e)}
                            />
                            <p>Even, flat land without obstacles</p>
                        </Tile>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <Tile onClick={() => this.handleTerrainCategoryChange("Category II / III")} className="form-tile terrain-category terrain-category-2-3">
                            <RadioButton
                                id="formData_terrainCategory-2-3"
                                labelText="Category II / III"
                                value="Category II / III"
                                checked={this.props.formData.terrainCategory === 'Category II / III'}
                                onChange={(e) => this.handleTerrainCategoryChange(e)}
                            />
                            <p>Land with hedges, individual farmsteads,<br /> houses or trees, e.g. agricultural area, with seperations<br /> of at least 20 obstacle heights</p>
                        </Tile>
                    </Column>
                    <Column lg={8} md={8} sm={4}>
                        <Tile onClick={() => this.handleTerrainCategoryChange("Category III")} className="form-tile terrain-category terrain-category-3">
                            <RadioButton
                                id="formData_terrainCategory-3"
                                labelText="Category III"
                                value="Category III"
                                checked={this.props.formData.terrainCategory === 'Category III'}
                                onChange={(e) => this.handleTerrainCategoryChange(e)}
                            />
                            <p>Suburbs, industrial or commercial areas, forests,<br /> with seperations of maximum 20 obstacle heights</p>
                        </Tile>
                    </Column>
                </Grid>
                <Grid>
                    <Column lg={8} md={8} sm={4}>
                        <Tile onClick={() => this.handleTerrainCategoryChange("Category IV")} className="form-tile terrain-category terrain-category-4">
                            <RadioButton
                                id="formData_terrainCategory-4"
                                labelText="Category IV"
                                value="Category IV"
                                checked={this.props.formData.terrainCategory === 'Category IV'}
                                onChange={(e) => this.handleTerrainCategoryChange(e)}
                            />
                            <p>City areas; 15 &percnt; of the area is occupied with buildings,<br /> the average height of which exceeds 15 m</p>
                        </Tile>
                    </Column>
                </Grid>
            </Form>
        )
    }
}
