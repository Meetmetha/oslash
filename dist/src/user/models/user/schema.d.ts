export declare const schema: {
    firstName: {
        type: StringConstructor;
        default: null;
    };
    lastName: {
        type: StringConstructor;
        default: null;
    };
    email: {
        type: StringConstructor;
        default: null;
        lowercase: boolean;
        index: boolean;
    };
    password: {
        type: StringConstructor;
        default: null;
    };
    username: {
        type: StringConstructor;
        default: null;
    };
};
