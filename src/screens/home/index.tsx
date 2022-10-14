import { useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, ActivityIndicator, Image } from 'react-native'
import { Todo } from '../../components/Todo'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Todo {
    id: string;
    text: string;
}

export function Home() {
    const [todos, setTodos] = useState<Todo[]>([] as Todo[])
    const [text, setText] = useState('')
    const [checkeds, setCheckeds] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadVaribles = async () => {
            const checkeds = await AsyncStorage.getItem('@checkeds')
            if (checkeds) setCheckeds(JSON.parse(checkeds) as string[])
            const todos = await AsyncStorage.getItem('@todos')
            if (todos) setTodos(JSON.parse(todos) as Todo[])
            setIsLoading(false)
        }

        loadVaribles()
    }, [])
    async function handleParticipantAdd() {
        const newTodo = {
            id: (new Date().getSeconds() * Math.random()).toString(),
            text: text
        }

        await AsyncStorage.setItem('@todos', JSON.stringify([...todos, newTodo]))
        setTodos(prevState => [...prevState, newTodo])
        setText('')
    }
    function handleParticipantRemove(id: string) {
        Alert.alert('Remover', `Remover todo?`, [
            {
                text: 'Sim',
                onPress: async () => {
                    await AsyncStorage.setItem('@todos', JSON.stringify(todos.filter(todo => todo.id !== id)))
                    setTodos(prevState => prevState.filter(todo => todo.id !== id))
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function verifyChecked(id: string) {
        const checked = checkeds.find(checked => checked === id)
        if (checked) return true
        return false
    }

    async function handleChecked(id: string) {
        if (checkeds.find(checked => checked === id)) {

            await AsyncStorage.setItem('@checkeds', JSON.stringify(checkeds.filter(checked => checked !== id)))
            setCheckeds(prevState => prevState.filter(checked => checked !== id))
        } else {
            await AsyncStorage.setItem('@checkeds', JSON.stringify([...checkeds, id]))
            setCheckeds(prevState => [...prevState, id])
        }

    }


    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Nome do participante'
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setText}
                    value={text}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.eventName}>Criadas<View><Text style={styles.eventName}>{todos.length}</Text></View></Text>
                <Text style={styles.eventName}>Concluídas<View><Text style={styles.eventName}>{checkeds.length}</Text></View></Text>
            </View>
            {isLoading ? <ActivityIndicator /> : <FlatList data={todos} keyExtractor={item => item.id} renderItem={({ item }) => (
                <Todo key={item.id} text={item.text} checked={verifyChecked(item.id)} onRemove={() => handleParticipantRemove(item.id)} setChecked={() => handleChecked(item.id)} />
            )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View>
                        {/* <Image source={ } /> */}
                        <Text style={styles.listEmpthyText}> Ninguem chegou no evento ainda, adicione os participantes a sua lista de presença</Text>
                    </View>

                )} />}




        </View>
    )
}
