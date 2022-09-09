import * as React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import MailchimpCustomForm from '../Parts/MailchimpCustomForm';
import { MAILCHIMP_U, MAILCHIMP_ID } from '../../utils/constants/generalConstants';

const postUrl = `https://glimpseofromania.us11.list-manage.com/subscribe/post?u=${MAILCHIMP_U}&id=${MAILCHIMP_ID}`;

function ComingSoonPage() {
    return (
        <div id="ComingSoonPage">
            <h1>Coming soon</h1>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <MailchimpCustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
}

export default ComingSoonPage;