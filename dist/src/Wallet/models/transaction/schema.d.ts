export declare const schema: {
    wallet: {
        type: any;
        ref: string;
        index: boolean;
    };
    amount: {
        type: NumberConstructor;
        default: any;
    };
    isCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    meta: {
        event: StringConstructor;
        device: StringConstructor;
    };
};
