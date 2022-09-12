import React from 'react';

type Props = {
    label: string;
}

interface SubmitProps extends Props {
    type: 'submit';
    formValues: string[];
}

interface TextInputProps extends Props {
    type: 'email' | 'text' | 'textarea';
    value: string;
    onChangeHandler(value: string): void;
    name?: string;
    isRequired: boolean;
    placeholder: string;
}

const MailchimpInputField = (props: SubmitProps | TextInputProps) => {

    const validateInput = (values: string[]) => {
        if (values.some((f: string) => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    if (props.type === "submit") {
        return (
            <input
                className='primaryBtn primaryBtn--big g__justify-self-center'
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
        )
    } else if (props.type === "textarea") {
        return (
            <label className="inputField__label">
                {props.label}
                <textarea
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field"
                    rows={7}
                    name={props.name}
                />
            </label>
        );
    } else {
        return (
            <label className="inputField__label">
                {props.label}
                <input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field"
                    name={props.name}
                />
            </label>
        );
    }


};

export default React.memo(MailchimpInputField);