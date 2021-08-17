interface DebounceSettings {
    leading?: boolean;
    wait?: number;
    trailing?: boolean;
}
declare type ValidateMessage = string | (() => string);
export interface ValidateMessages {
    default?: ValidateMessage;
    required?: ValidateMessage;
    enum?: ValidateMessage;
    whitespace?: ValidateMessage;
    date?: {
        format?: ValidateMessage;
        parse?: ValidateMessage;
        invalid?: ValidateMessage;
    };
    types?: {
        string?: ValidateMessage;
        method?: ValidateMessage;
        array?: ValidateMessage;
        object?: ValidateMessage;
        number?: ValidateMessage;
        date?: ValidateMessage;
        boolean?: ValidateMessage;
        integer?: ValidateMessage;
        float?: ValidateMessage;
        regexp?: ValidateMessage;
        email?: ValidateMessage;
        url?: ValidateMessage;
        hex?: ValidateMessage;
    };
    string?: {
        len?: ValidateMessage;
        min?: ValidateMessage;
        max?: ValidateMessage;
        range?: ValidateMessage;
    };
    number?: {
        len?: ValidateMessage;
        min?: ValidateMessage;
        max?: ValidateMessage;
        range?: ValidateMessage;
    };
    array?: {
        len?: ValidateMessage;
        min?: ValidateMessage;
        max?: ValidateMessage;
        range?: ValidateMessage;
    };
    pattern?: {
        mismatch?: ValidateMessage;
    };
}
export interface Props {
    [key: string]: any;
}
export interface validateOptions {
    validateFirst?: boolean;
    validateMessages?: ValidateMessages;
    trigger?: 'change' | 'blur' | string | string[];
}
declare const validateStatus: ["", "success", "warning", "error", "validating"];
export declare type ValidateStatus = typeof validateStatus[number];
declare type namesType = string | string[];
export interface validateInfo {
    autoLink?: boolean;
    required?: boolean;
    validateStatus?: ValidateStatus;
    help?: string;
}
export interface validateInfos {
    [key: string]: validateInfo;
}
declare function useForm(modelRef: Props, rulesRef?: Props, options?: {
    immediate?: boolean;
    deep?: boolean;
    validateOnRuleChange?: boolean;
    debounce?: DebounceSettings;
}): {
    modelRef: Props;
    rulesRef: Props;
    initialModel: Props;
    validateInfos: validateInfos;
    resetFields: (newValues?: Props) => void;
    validate: <T = any>(names?: namesType, option?: validateOptions) => Promise<T>;
    validateField: <T = any>(name?: string, value?: any, rules?: [Record<string, unknown>], option?: validateOptions) => Promise<T>;
    mergeValidateInfo: (items: validateInfo | validateInfo[]) => validateInfo;
    clearValidate: (names?: namesType) => void;
};
export default useForm;
