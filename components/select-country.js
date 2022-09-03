import { Select, SelectItem } from '@carbon/react';

export default function SelectCountry(props) {
    return (
        <>
            <Select
                id={`formData_${props.name}`}
                labelText={props.labelText}
                value={props.formData[props.name]}
                onChange={(e) => props.handleInput(e)}
                name={props.name}
                className="cds--text-input-wrapper"
            >
                <SelectItem
                    disabled
                    hidden
                    value="placeholder-item"
                    text="Choose an option"
                />
                <SelectItem value="Country-1" text="Country 1" />
                <SelectItem value="Country-2" text="Country 2" />
            </Select>
        </>
    )
}
