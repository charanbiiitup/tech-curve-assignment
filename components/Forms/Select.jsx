import React from 'react';

import Error from './Error'

const Select = ({ register, errors, field }) => {
    return (
        <div className="form-group">
            <label className="form-label">{field.label} {field.required ? '*' : ''}</label>
            <select
                {...register(field.name, { required: field.required })}
                className="form-control"
                placeholder={field.placeholder}
                required={field.required}
            >
                {field?.options?.map((option, index) => (
                    <option value={option.value} key={index}>{option.label}</option>
                ))}
            </select>
            <Error errors={errors} field={field} />
        </div>
    );
}

export default Select;
