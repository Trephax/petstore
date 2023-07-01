/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddPetOverridesProps = {
    AddPet?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Add Pet"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Divider40583088?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField40583093?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40583094?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40583095?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40583126?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40583133?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40583140?: PrimitiveOverrideProps<TextFieldProps>;
    Divider40583096?: PrimitiveOverrideProps<DividerProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    SaveButton?: PrimitiveOverrideProps<ButtonProps>;
    UpdateButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddPetProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddPetOverridesProps | undefined | null;
}>;
export default function AddPet(props: AddPetProps): React.ReactElement;
