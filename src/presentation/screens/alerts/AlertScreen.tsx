import { View, Text, Alert } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';

export const AlertScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    
    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

    const showPrompt = () =>{ //No funciona para android
        Alert.prompt(
            'Correo electronico',
            'Esto es un mensaje de ejemplo',
            (valor:string) => console.log({valor}),
            'secure-text',
            'Soy un valor por defecto',
            'number-pad'
        );
    };

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title safe text='Alertas' />

            <Button 
                text='Alerta - 2 Botones'
                onPress={createTwoButtonAlert}
            />

            <View style={{height: 10}} />

            <Button 
                text='Alerta - 3 Botones'
                onPress={createThreeButtonAlert}
            />

            <View style={{height: 10}} />

            <Button 
                text='Promp - Input'
                onPress={showPrompt}
            />
        </CustomView>
    );
};
