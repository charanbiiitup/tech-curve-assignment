import React from 'react';

import Error from './Error'

const CustomCheckWithText = ({ field, register, errors }) => {
    return (
        <div className="form-group">
            <label className="form-label">{field.label} {field.required ? '*' : ''}</label>
            <div className="grid2x2">

                {field?.options?.map((option, index) => (
                    <div className="form-check" key={index}>
                        <input
                            {...register(field.name, { required: field.required })}
                            type="checkbox"
                            className="form-check-input"
                            placeholder={field.placeholder}
                            required={field.required}
                            value={option.value}
                        />
                        <label className="form-check-label">{option.label}</label>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={field.name}
                                {...register(field.name + '_text', { required: field.required })}
                            />
                            <Error errors={errors} field={field} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomCheckWithText;
