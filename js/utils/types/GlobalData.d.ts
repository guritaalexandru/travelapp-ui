import { EmailFormFields } from "react-mailchimp-subscribe";

interface NewNameFormFields extends EmailFormFields {
    MERGE1: string;
    MERGE2: string;
}

interface UrlParamsProps {
    params: {
        pid: string
    };
}

interface StaticPath {
    params: {
        pid: string;
    };
}

interface SimpleButtonData {
    text: string;
    href: string;
}

export {
    UrlParamsProps,
    StaticPath,
    SimpleButtonData,
    NewNameFormFields
};
