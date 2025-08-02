import { unMask } from "./unMask.js";
const DIGIT = '0';
const ALPHA = 'A';
const ALPHANUM = 'S';
const HOURS = 'H';
const MINUTES = 'm';
const SECONDS = 's';
export function mask(value, pattern = '', type = 'custom', options, autoCapitalize) {
    if (type === 'date') {
        return dateMasker(String(value), options);
    }
    if (type === 'time') {
        return timeMasker(String(value), options);
    }
    if (typeof pattern === 'string') {
        return masker(String(value), pattern || '', {
            autoCapitalize: autoCapitalize,
        });
    }
    return multimasker(String(value), pattern, {});
}
function multimasker(value, patterns, options) {
    return masker(value, patterns.reduce((memo, pattern) => value.length <= unMask(memo).length ? memo : pattern, patterns[0]), options);
}
function masker(value, pattern, options) {
    const { autoCapitalize } = options;
    const sentence = toPattern(value, { pattern, ...options });
    switch (autoCapitalize) {
        case 'characters':
            sentence.toUpperCase();
            break;
        case 'words':
            sentence.replace(/(?:^|\s)\S/g, (text) => text.toUpperCase());
            break;
        case 'sentences': {
            const lower = sentence.toLowerCase();
            lower.charAt(0).toUpperCase() + lower.substring(1);
            break;
        }
    }
    return sentence;
}
function dateMasker(value = '', options) {
    const { dateFormat = 'yyyy/mm/dd' } = options;
    const regex = /[a-zA-Z]/gi;
    const pattern = dateFormat.replaceAll(regex, '9');
    return masker(value, pattern, {});
}
function timeMasker(value = '', options) {
    const { timeFormat = 'HH:mm:ss' } = options;
    const pattern = timeFormat;
    return masker(value, pattern, {});
}
function toPattern(value, optionPattern) {
    const pattern = typeof optionPattern === 'object' ? optionPattern.pattern : optionPattern;
    const patternChars = pattern.replace(/\W/g, '');
    const output = pattern.split('');
    const values = value.toString().replace(/\W/g, '');
    const charsValues = values.replace(/\W/g, '');
    const placeholder = typeof optionPattern === 'object' ? optionPattern.placeholder : undefined;
    let charCounter = 0;
    let index;
    const outputLength = output.length;
    for (index = 0; index < outputLength; index++) {
        if (charCounter >= values.length) {
            if (patternChars.length === charsValues.length) {
                return output.join('');
            }
            if (placeholder !== undefined &&
                patternChars.length > charsValues.length) {
                return addPlaceholder(output, index, placeholder).join('');
            }
            break;
        }
        else if ((output[index] === DIGIT && values[charCounter].match(/[0-9]/)) ||
            (output[index] === ALPHA && values[charCounter].match(/[a-zA-Z]/)) ||
            (output[index] === ALPHANUM &&
                values[charCounter].match(/[0-9a-zA-Z]/)) ||
            (output[index] === HOURS && values[charCounter].match(/[0-23]/)) ||
            (output[index] === MINUTES && values[charCounter].match(/[0-59]/)) ||
            (output[index] === SECONDS && values[charCounter].match(/[0-59]/))) {
            output[index] = values[charCounter++];
        }
        else if (output[index] === DIGIT ||
            output[index] === ALPHA ||
            output[index] === ALPHANUM ||
            output[index] === HOURS ||
            output[index] === MINUTES ||
            output[index] === SECONDS) {
            if (placeholder !== undefined) {
                return addPlaceholder(output, index, placeholder).join('');
            }
            return output.slice(0, index).join('');
        }
        else if (output[index] === values[charCounter]) {
            charCounter++;
        }
    }
    return output.join('').substr(0, index);
}
function addPlaceholder(output, index, placeholder) {
    for (let newIndex = index; newIndex < output.length; newIndex++) {
        if (output[newIndex] === DIGIT ||
            output[newIndex] === ALPHA ||
            output[newIndex] === ALPHANUM) {
            output[newIndex] = placeholder;
        }
    }
    return output;
}
//# sourceMappingURL=mask.js.map