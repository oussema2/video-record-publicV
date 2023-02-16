import { VideoMimeTypes } from "../Data/commons"

export const getSupportedMimeType = () => {
    const browser = fnBrowserDetect()
    return VideoMimeTypes[browser as keyof typeof VideoMimeTypes].mime

}

export const fnBrowserDetect = () => {

    let userAgent = navigator.userAgent;
    if (userAgent.match(/chrome|chromium|crios/i)) {
        return "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        return "firefox";
    } else if (userAgent.match(/safari/i)) {
        return "safari";
    } else if (userAgent.match(/opr\//i)) {
        return "opera";
    } else if (userAgent.match(/edg/i)) {
        return "edge";
    } else {
        return "No browser detection";
    }

}