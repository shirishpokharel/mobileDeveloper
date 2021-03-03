import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

const App = () => {
  const [items, setItems] = React.useState([
    {text: 'Go shopping', key: '1'},
    {text: 'Go shopping', key: '2'},
    {text: 'Go shopping', key: '3'},
    {text: 'Go shopping', key: '4'},
  ]);
  const [todoValues, settodoValues] = React.useState('');

  const addTodo = () => {
    setItems((prevItems) => {
      return [...prevItems, {text: todoValues, key: Math.random().toString()}];
    });
  };
 
  const onTextChange = (val) => {
    settodoValues(val);
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, alignSelf: 'center', color: "blue"}}>Add a TODO</Text>

      <TextInput style={styles.textinput} onChangeText={onTextChange} />
      <Button title="Add TODO" onPress={addTodo} color="coral" />
      <View style={{padding: 10, margin: 5, borderWidth: 1 , borderColor: "green"}}>
        {items.map((item) => {
          return <Text>{item.text}</Text>;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  textinput: {
    borderColor: 'red',
    borderWidth: 1,
    margin: 10,
  },
});

export default App;
