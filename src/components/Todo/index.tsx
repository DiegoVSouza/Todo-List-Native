import { Text, View, TouchableOpacity, } from 'react-native'
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
            <Checkbox value={checked} onValueChange={setChecked} />
            <Text style={checked ? styles.name : styles.name}>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove} >
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}
