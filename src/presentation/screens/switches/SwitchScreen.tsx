import { Switch } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { useState } from 'react';
import { CustomSwitch } from '../../components/ui/CustomSwitch';

export const SwitchScreen = () => {

    //const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    })

    return (
        <CustomView style={{ marginTop: 100, paddingHorizontal:10, }}>
            <Card>
                <CustomSwitch 
                    isOn={state.isActive}
                    onChange={value => setState({...state, isActive: value})}
                    text='¿Está activo?'
                />

                <CustomSwitch 
                    isOn={state.isHungry}
                    onChange={value => setState({...state, isHungry: value})}
                    text='¿Tiene hambre?'
                />

                <CustomSwitch 
                    isOn={state.isHappy}
                    onChange={value => setState({...state, isHappy: value})}
                    text='¿Es feliz?'
                />
                {/* <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#08fd14' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                /> */}
            </Card>
        </CustomView>
    );
};
