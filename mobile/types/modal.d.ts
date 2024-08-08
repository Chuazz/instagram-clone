type ModalStackParamsList = {
    LogOut: undefined;
    CropImage: {
        file: {
            uri: string | undefined;
            width: number | undefined;
            height: number | undefined;
        };
        width?: number;
        height?: number;
    };
};

export { ModalStackParamsList };
