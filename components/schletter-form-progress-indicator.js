import React, { Component } from 'react';

import { ProgressIndicator } from '@carbon/react';
import { ProgressStep } from '@carbon/react';

export default class SchletterFormProgressIndicator extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <div>
                Step: {this.props.step}
                <ProgressIndicator className="form-progress-indicator" spaceEqually>
                    <ProgressStep
                        current={this.props.step == 0}
                        complete={this.props.step > 0}
                        min-width="16rem"
                        label="Contact"
                        description="Step 1: Conatct"
                    />
                    <ProgressStep
                        current={this.props.step == 1}
                        complete={this.props.step > 1}
                        label="About you"
                        description="Step 2: About you"
                    />
                    <ProgressStep
                        current={this.props.step == 2}
                        complete={this.props.step > 2}
                        label="About the project"
                        description="Step 3: About the project"
                    />
                    <ProgressStep
                        current={this.props.step == 3}
                        complete={this.props.step > 3}
                        label="Modules &amp; Systeme"
                        description="Step 4: Modules &amp; Systeme"
                    />
                    <ProgressStep
                        current={this.props.step == 4}
                        complete={this.props.step > 4}
                        label="Terrain category"
                        description="Step 5: Terrain category"
                    />
                </ProgressIndicator>

            </div>
        )
    }
}