import React from 'react';

import Error from './Error'

const Radio = ({ field, register, errors }) => {
    return (
        <div className="form-group">
            <label className="form-label">{field.label} {field.required ? '*' : ''}</label>
            <div className="">
                {field?.options?.map((option, index) => (
                    <div className="form-radio" key={index}>
                        <input
                            {...register(field.name, { required: field.required })}
                            type="radio"
                            className="form-check-input"
                        />
                        <label className="form-check-label">{option.label}</label>
                    </div>
                ))}
            </div>
            <Error errors={errors} field={field} />
        </div>
    );
}

export default Radio;
