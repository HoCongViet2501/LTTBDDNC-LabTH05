import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import data from './Data';

const DATA = data;
const Item = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.img}></Image>
    <View style={styles.centerItem}>
      <Text>{item.title}</Text>
      <Text>Shop:{item.shopName}</Text>
    </View>
    <TouchableOpacity style={{ backgroundColor: "red", borderRadius: 5 }}>
      <Text>Chat</Text>
    </TouchableOpacity>
  </View>
)

export default function App() {
  const renderItem = ({ item }) => {
    return (
      <Item item={item} />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Ban co thac mac gi dung ngai chat voi shop</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}>
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    display: 'flex',
    borderBottomColor: "gray",
    borderTopColor: "gray",
    backgroundColor: "green"
  },
  centerItem: {
    flex: 1,
    fontSize: 14
  }
})


