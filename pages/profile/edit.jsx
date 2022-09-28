import React, { useState } from 'react';
import DynamicForm from '../../components/global/DynamicForm';
import SideCard from '../../components/profile/SideCard';

import ProfileHeader from '../../components/profile/ProfileHeader';

const Edit = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const [formData, setFormData] = useState([
        {
            "sectionName": "Basic Information",
            "fields": [
                {
                    "type": "file",
                    "name": "company_logo",
                    "label": "Company Logo / Profile Image",
                    "required": false,
                    "helperText": "300 x 300px recommended. JPGs, JPEGs, and PNGs supported."
                },
                {
                    "placeholder": "Add your business name or company name  ",
                    "type": "text",
                    "required": true,
                    "helperText": "Enter your name",
                    "name": "BusinessName",
                    "label": "Business Name / Company Name"
                },
                {
                    "placeholder": "Add your brand or alias name",
                    "type": "text",
                    "required": true,
                    "name": "Brand or Alias Name",
                    "label": "Brand or Alias Name"
                },
                {
                    "placeholder": "Select your country",
                    "type": "select",
                    "required": true,
                    "name": "Country",
                    "label": "Country",
                    "options": [
                        {
                            "label": "India",
                            "value": "India"
                        },
                        {
                            "label": "USA",
                            "value": "USA"
                        },
                        {
                            "label": "UK",
                            "value": "UK"
                        }
                    ]
                },
                {
                    type: "customCheckWithText",
                    name: "Social Media Handles",
                    label: "Social Media Handles",
                    options: [
                        {
                            label: "Instagram",
                            value: "instagram",
                            placeholder: "Add Link here"
                        },
                        {
                            label: "Own Website",
                            value: "Own Website",
                            placeholder: "Add link here"
                        },
                        {
                            label: "Fiver",
                            value: "Fiver",
                            placeholder: "Add link here"
                        },
                        {
                            label: "Relevent Website",
                            value: "Relevent Website",
                            placeholder: "Add link here"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName": "Profile Information",
            "fields": [
                {
                    "type": "radio",
                    "name": "What describes you best?",
                    "label": "What describes you best?",
                    "required": true,
                    "options": [
                        {
                            "type": "radio",
                            "name": "Solo/Freelancer",
                            "label": "Solo/Freelancer"
                        },
                        {
                            "type": "radio",
                            "name": "Team / Egency / Company",
                            "label": "Team / Egency / Company"
                        }
                    ]
                },
                {
                    "type": "select",
                    "name": "In Business Since",
                    "label": "In Business Since",
                    "placeholder": "select year",
                    "required": true,
                    "options": [
                        {
                            "label": "2000",
                            "value": "2000"
                        },
                        {
                            "label": "2001",
                            "value": "2001"
                        },
                        {
                            "label": "2002",
                            "value": "2002"
                        },
                        {
                            "label": "2003",
                            "value": "2003"
                        }
                    ]
                },
                {
                    "type": "select",
                    "name": "Categories",
                    "label": "Categories",
                    "required": true,
                    "options": [
                        {
                            "label": "Designer",
                            "value": "Designer"
                        },
                        {
                            "label": "Developer",
                            "value": "Developer"
                        },
                        {
                            "label": "Progammer",
                            "value": "Programmer"
                        }
                    ]
                },
                {
                    "type": "textarea",
                    "name": "Description",
                    "label": "Description",
                    "required": true,
                    "placeholder": "Add your description here",
                    "helperText": `Briefly describe what your organization does. This can be changed later.
                    120 maximum characters allowed.`
                },
                {
                    "type": "text",
                    "name": "Website",
                    "label": "Website",
                    "required": true,
                    "placeholder": "Add your website link"
                }
            ]
        },
        {
            "sectionName": "Contact Information",
            "fields": [
                {
                    "type": "text",
                    "name": "Contact Person Name",
                    "label": "Contact Person Name",
                    "required": true,
                    "placeholder": "Add your contact person name"
                },
                {
                    "type": "text",
                    "name": "Company Email Id",
                    "label": "Company Email Id",
                    "required": true,
                    "placeholder": "Add your company email Id"
                },
                {
                    "type": "text",
                    "name": "Contact Person Phone Number",
                    "label": "Contact Person Phone Number",
                    "required": true,
                    "placeholder": "Add your company phone number"

                },
                {
                    "type": "radio",
                    "name": "Preffered Time",
                    "label": "Preffered time",
                    "columns": 2,
                    "options": [
                        {
                            "type": "radio",
                            "name": "08:00 to 09:99 AM",
                            "label": "08:00 to 09:00 AM"
                        },
                        {
                            "type": "radio",
                            "name": "08:00 to 09:99 AM",
                            "label": "08:00 to 09:00 AM"
                        },
                        {
                            "type": "radio",
                            "name": "08:00 to 09:99 AM",
                            "label": "08:00 to 09:00 AM"
                        },
                        {
                            "type": "radio",
                            "name": "08:00 to 09:99 AM",
                            "label": "08:00 to 09:00 AM"
                        }
                    ]
                }
            ]
        },
        {
            "sectionName": "Support Details",
            "fields": [
                {
                    "type": "text",
                    "name": "Company Phone Number",
                    "label": "Company Phone Number",
                    required: false,
                    "placeholder": "Add your company phone number"

                },
                {
                    "type": "text",
                    "name": "Company Email Id",
                    "label": "Company Email Id",
                    "required": false,
                    "placeholder": "Add your company email Id"
                },
                {
                    "type": "text",
                    "name": "Company Address 1",
                    "label": "Company Address 1",

                    "placeholder": "Add your company address"
                },
                {
                    "type": "text",
                    "name": "Company Address 2",
                    "label": "Company Address 2",
                    "required":false,
                    "placeholder": "Add your company address"
                },
                {
                    "type": "select",
                    "name": "City",
                    "label": "City",
                    "required": false,
                    options: [
                        {
                            "label": "Hyderabad",
                            "value": "Hyderabad"
                        },
                        {
                            "label": "Delhi",
                            "value": "Delhi"
                        },
                        {
                            "label": "Kolkata",
                            "value": "Kolkata"
                        }
                    ]
                },
                {
                    "type": "select",
                    "name": "Country",
                    "label": "Country",
                    "required": false,
                    "options": [
                        {
                            "label": "india",
                            "value": "india"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "zip Code",
                    "label": "Zip code",
                    "required": false,
                    "placeholder": "Add zip code"
                },
                {
                    "required": false,
                    "type": "text",
                    "name": "Contact Link",
                    "label": "Contact Link",
                    "placeholder": "Add contact link here"
                }
            ]
        },
        {
            "sectionName": "Company Account Details",
            "fields": [
                {
                    "type": "text",
                    "name": "GST Number",
                    "label": "GST Number",
                    "required": true,
                    "placeholder": "Add GST number "
                },
                {
                    "type": "file",
                    "name": "Company Incorporation Certificate",
                    "label": "Company Incorporation Certificate",
                    "required": false,
                    "helperText": "300 x 300px recommended. JPGs, JPEGs, and PNGs supported."
                },
                {
                    "type": "file",
                    "name": "Last 3 years Balance Sheet",
                    "label": "Last 3 Years Balance Sheet",
                    "required": false,
                    "helperText": "300 x 300px recommended. JPGs, JPEGs, and PNGs supported."
                },
                {
                    "type": "file",
                    "name": "IOS Certificate",
                    "label": "IOS Certificate",
                    "required": false,
                    "helperText": "300 x 300px recommended. JPGs, JPEGs, and PNGs supported."
                },
                {
                    "type": "text",
                    "name": "Bank Name",
                    "label": "Bank Name",
                    "required": true,
                    "placeholder": "Add bank name"
                },
                {
                    "type": "text",
                    "name": "Account Number",
                    "label": "Account Number",
                    "required": true,
                    "placeholder": "Add account number"
                },
                {
                    "type": "text",
                    "name": "Account Type",
                    "label": "Account Type",
                    "required": true,
                    "placeholder": "Add account type"
                },
                {
                    "type": "text",
                    "name": "IFSC/SWIFT/RTGS CODE",
                    "label": "IFSC/SWIFT/RTGS CODE",
                    "required": true,
                    "placeholder": "Add IFSC/SWIFT/RTGS code here"
                },
                {
                    "type": "text",
                    "name": "Bank Branch Address/ Details",
                    "label": "Bank Branch Address/ Details",
                    "required": true,
                    "placeholder": "Add branch address here"
                },
                {
                    "type": "select",
                    "name": "UPI Details",
                    "label": "UPI Details",
                    "required": true,
                    "options": [
                        {
                            "label": "Phone pe",
                            "value": "Phone pe"
                        },
                        {
                            "label": "Paytm",
                            "value": "Paytm"
                        },
                        {
                            "label": "Google pay",
                            "value": "Google pay"
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <div>
            <ProfileHeader onTabChange={setCurrentStep} currentStep={currentStep} />

            <div className="container">
                <div className="grid">
                    <div className="card">
                        <DynamicForm
                            data={formData[currentStep]}
                            onTabChange={setCurrentStep}
                            currentStep={currentStep}
                            formsCount={formData.length}
                        />
                    </div>
                    <div className=''>
                        <SideCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
