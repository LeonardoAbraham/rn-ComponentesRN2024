import { ReactNode } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';

interface Props {
    style?:StyleProp<ViewStyle>;
    children?: ReactNode;
}

export const CustomView = ({style, children}: Props) => {
    return (
        <View style={[ globalStyles.mainContainer, style ]}>
            { children }
        </View>
    );
};