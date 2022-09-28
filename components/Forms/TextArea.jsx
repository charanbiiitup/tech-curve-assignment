import React from 'react';

import Error from './Error'

const TextArea = ({ register, errors, field }) => {
    return (
        <div className="form-group">
            <label className="form-label">{field.label} {field.required ? '*' : ''}</label>
            <textarea
                {...register(field.name, { required: field.required })}
                className="form-control"
                placeholder={field.placeholder}
            />
            <Error errors={errors} field={field} />
        </div>
    );
}

export default TextArea;
