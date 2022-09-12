import React, { useState } from 'react';

import MailchimpInputField from "./MailchimpInputField";
import { NewNameFormFields } from '../../utils/types/GlobalData'

type Props = {
    status: "sending" | "error" | "success" | null;
    message: string | Error | null;
    onValidated: (formData: NewNameFormFields) => void;
}

const MailchimpCustomForm = ({ status, message, onValidated }: Props) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        email &&
            firstName &&
            lastName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
                MERGE2: lastName,
            });
    }

    return (
        <form className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="mc__title">Join our email list for future updates.</h3>

            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">
                    sending...
                </div>
            )}
            {status === "error" && message && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message.toString() }}
                />
            )}
            {status === "success" && message && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message.toString() }}
                />
            )}

            <div className="mc__field-container">
                <MailchimpInputField
                    label="First Name"
                    onChangeHandler={setFirstName}
                    type="text"
                    value={firstName}
                    placeholder="Jane"
                    isRequired
                />

                <MailchimpInputField
                    label="Last Name"
                    onChangeHandler={setLastName}
                    type="text"
                    value={lastName}
                    placeholder="Doe"
                    isRequired
                />

                <MailchimpInputField
                    label="Email"
                    onChangeHandler={setEmail}
                    type="email"
                    value={email}
                    placeholder="your@email.com"
                    isRequired
                />

            </div>

            <MailchimpInputField
                label="subscribe"
                type="submit"
                formValues={[email, firstName, lastName]}
            />
        </form>
    );
};

export default MailchimpCustomForm;