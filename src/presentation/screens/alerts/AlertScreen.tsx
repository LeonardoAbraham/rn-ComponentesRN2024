import { View, Text, Alert } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';
import prompt from 'react-native-prompt-android';
import { showPrompt } from '../../../config/adapters/prompt.adapter';

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

    const onShowPrompt = () =>{ 

        showPrompt({
            title: 'Lorem Ipsum',
            subTitle: 'Esto es un texto para el subtitulo',
            buttons:[
                { text: 'Ok', onPress: () => console.log('ok') }
            ],
            placeholder: 'Placeholder'
        });

        // ! Código nativo
        // No funciona para android 
        //Alert.prompt(
        //    'Correo electronico',
        //    'Esto es un mensaje de ejemplo',
        //    (valor:string) => console.log({valor}),
        //    'secure-text',
        //    'Soy un valor por defecto',
        //    'number-pad'
        //);
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
                onPress={onShowPrompt}
            />
        </CustomView>
    );
};