import * as React from 'react';
import MailchimpSubscribe, { FormHooks } from "react-mailchimp-subscribe";
import { NewNameFormFields } from '../../utils/types/GlobalData'
import MailchimpCustomForm from '../Parts/MailchimpCustomForm';
import { MAILCHIMP_U, MAILCHIMP_ID } from '../../utils/constants/generalConstants';

const postUrl = `https://glimpseofromania.us11.list-manage.com/subscribe/post?u=${MAILCHIMP_U}&id=${MAILCHIMP_ID}`;

function ComingSoonPage() {
    return (
        <div id="ComingSoonPage">
            <h1>Coming soon</h1>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }: FormHooks<NewNameFormFields>) => (
                    <MailchimpCustomForm
                        status={status}
                        message={message}
                        onValidated={(formData: NewNameFormFields) => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
}

export default ComingSoonPage;