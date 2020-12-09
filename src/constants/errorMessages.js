export const errorMessage = (errorCode) => {
    const errorsCode = {
        AUTH_FAILED: 'Tài khoản không tồn tại, vui lòng kiểm tra lại.',
        NOT_UUID: 'Sai URL, vui lòng kiểm tra lại.',
    };
    return errorsCode.hasOwnProperty(errorCode) ? errorsCode[errorCode] : errorCode;
};
