export const getParamsFromObject = (obj: object):string => {
    return Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&');
}