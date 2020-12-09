import {
    random, isEmpty, isObject,
} from 'lodash';

//Random number
export const ldRandomNum = (min, max) => {
    return random(min, max);
};

//Checks if value is an empty object, collection, map, or set.
export const ldIsEmpty = (value) => {
    return isEmpty(value);
};

//Returns true if value is an object, else false.
export const ldIsObject = (obj) => {
    return isObject(obj);
};

//upper first word of string
export const upperFirst = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

//upper first per word
export const upperFirstPerWord = (text) => {
    return text
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
};

//get url params
export const getUrlParam = (param) => {
    let url = new URL(window.location.href);
    let paramUrl = url.searchParams.get(param);
    if (paramUrl) {
        return paramUrl.replace(/[^a-zA-Z0-9\s]/gi, '');
    }
    return null;
};
