import React from 'react';

import Error from './Error'

const Text = ({ field, register, errors }) => {
    return (
        <div className="form-group">
            <label htmlFor={field.name} className="form-label">{field.label} {field.required ? '*' : ''}</label>
            <input
                id={field.name}
                type="text"
                className="form-control"
                placeholder={field.placeholder}
                {...register(field.name, { required: field.required })}
            />
            <Error errors={errors} field={field} />
        </div>
    );
}

export default Text;
