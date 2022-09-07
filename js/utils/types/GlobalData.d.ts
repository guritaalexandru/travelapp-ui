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
};
