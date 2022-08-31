import { Component } from 'react';

export default class SchletterFormStepAbstract extends Component {
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

}
