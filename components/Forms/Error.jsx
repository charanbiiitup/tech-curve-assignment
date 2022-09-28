import React from 'react';

const Error = ({ errors, field }) => {
    return (
        <>
            {errors[field.name] ? <span className="form-error">This field is required</span> : (
                <>
                    {field.helperText && <p className="form-help-text">{field.helperText}</p>}
                </>
            )}
        </>
    );
}

export default Error;
