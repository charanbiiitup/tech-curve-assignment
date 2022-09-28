import React from 'react';
import { useForm } from "react-hook-form";

import Text from '../Forms/Text'
import File from '../Forms/File'
import Select from '../Forms/Select'
import CustomCheckWithText from '../Forms/CustomCheckWithText'
import Radio from '../Forms/Radio'
import TextArea from '../Forms/TextArea'

const DynamicForm = ({ data = { name: '', fields: [] }, currentStep, onTabChange, formsCount = 1 }) => {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();

    const getField = (field) => {
        switch (field.type) {
            case 'text':
                return (
                    <Text field={field} register={register} errors={errors} />
                )

            case 'file':
                return (
                    <File field={field} register={register} errors={errors} />
                )

            case 'select':
                return (
                    <Select field={field} register={register} errors={errors} />
                )

            case 'customCheckWithText':
                return (
                    <CustomCheckWithText field={field} register={register} errors={errors} />
                )

            case 'radio':
                return (
                    <Radio field={field} register={register} errors={errors} />
                )

            case 'textarea':
                return (
                    <TextArea field={field} register={register} errors={errors} />
                )

            default:
                return null;
        }
    }
    const onSubmit = (data) => {
        console.log(isValid, data)
        if (isValid) {
            if (currentStep === formsCount - 1) {
                onTabChange(0)
            } else {
                onTabChange(currentStep + 1)
            }
        }
    }
    return (
        <div className=''>
            <h1 className='form-title'>{data.sectionName}</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                {data.fields.map((field, index) => {
                    return getField(field)
                })}
                {currentStep === formsCount - 1 ? (
                    <button className='btn' type="submit">Confirm & Submit </button>
                ) : (
                    <button className='btn' type="submit">Save & Continue </button>
                )}
            </form>
        </div>

    );
}

export default DynamicForm;
