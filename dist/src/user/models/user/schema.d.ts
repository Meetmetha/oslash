export declare const schema: {
    firstName: {
        type: StringConstructor;
        default: any;
    };
    lastName: {
        type: StringConstructor;
        default: any;
    };
    email: {
        type: StringConstructor;
        default: any;
        lowercase: boolean;
        index: boolean;
    };
    password: {
        type: StringConstructor;
        default: any;
    };
    username: {
        type: StringConstructor;
        default: any;
    };
};
