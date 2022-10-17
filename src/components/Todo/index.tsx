import { Text, View, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import Checkbox from 'expo-checkbox';

interface TodoProps {
    text: string;
    checked: boolean;
    setChecked: () => void
    onRemove: () => void;
}
export function Todo({ text, onRemove, checked, setChecked }: TodoProps) {

    return (
        <View style={styles.container}>
            <Checkbox style={styles.checkBox} color={checked ? '#5E60CE' : '#4EA8DE'} value={checked} onValueChange={setChecked} />
            <Text style={checked ? styles.name : styles.name}>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove} >
                <Image source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}
