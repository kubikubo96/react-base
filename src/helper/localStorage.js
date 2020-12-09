export const loadStorage = (storageName, defaultValue) => {
    try {
        const serializedState = localStorage.getItem(storageName);
        if (serializedState === null) {
            if (typeof defaultValue !== 'undefined') {
                return defaultValue;
            } else {
                return undefined;
            }
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveStorage = (storageName, data) => {
    try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem(storageName, serializedState);
    } catch {
        // ignore write errors
    }
};

export const removeStorage = (storageName) => {
    localStorage.removeItem(storageName);
};

export const clearAllStorage = () => {
    localStorage.clear();
};
