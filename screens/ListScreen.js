import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Item 1', description: 'This is the detail of Item 1' },
  { id: '2', title: 'Item 2', description: 'This is the detail of Item 2' },
  { id: '3', title: 'Item 3', description: 'This is the detail of Item 3' },
];

const ListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detail', { item })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  title: { fontSize: 18 },
});

export default ListScreen;
