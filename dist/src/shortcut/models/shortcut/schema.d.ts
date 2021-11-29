export declare const schema: {
    user: {
        type: any;
        ref: string;
    };
    shortlink: {
        type: StringConstructor;
        required: boolean;
    };
    description: {
        type: StringConstructor;
        default: null;
    };
    url: {
        type: StringConstructor;
        required: boolean;
    };
    tags: {
        type: ArrayConstructor;
        default: null;
    };
};
