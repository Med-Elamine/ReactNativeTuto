import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  const pressHandler = (id) => {
    setPeople((updatedPeople) =>  {return updatedPeople.filter(person => person.id != id)});
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.smallcontainer}>
        {people.map(item => (
            <View key={item.id}>
              <TouchableOpacity onPress={() => pressHandler(item.id)}>
                <Text style={styles.itemx}>Name nº{item.id} : {item.name}</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
            </View>
          )
        )}
      </ScrollView>
      
      <FlatList
        numColumns={2}
        style={styles.smallcontainer} 
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.itemx}>Name nº{item.id} : {item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (<View style={styles.line}></View>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
  },
  smallcontainer: {
    flex: 1,
    marginBottom: 20,
  },
  line: {
    height: 2,
    backgroundColor: 'red',
    marginTop: 20,
    marginBottom: 20,
  },
  itemx: {
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 13,
    color: 'black',
    marginHorizontal: 20,
  },
});