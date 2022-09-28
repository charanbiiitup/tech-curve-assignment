import React from 'react';

import Error from './Error'

const File = ({ field, register, errors }) => {
    return (
        <div className="form-group">
            <h3 className='form-label'>{field.label}</h3>
            <label for={field.name} className="form-file-control">Choose file 
           <span className='text-danger'> {field.required ? '*' : ''}</span></label>
            <input
                {...register(field.name, { required: field.required })}
                type="file"
                id={field.name}
                placeholder={field.placeholder}
                required={field.required}
            />
            <Error errors={errors} field={field} />
        </div>
    );
}

export default File;
