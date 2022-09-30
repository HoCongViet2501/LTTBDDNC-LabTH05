import { Button, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import data from './Data';

const DATA = data;
const Item = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.img}></Image>
    <View style={styles.centerItem}>
      <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{item.title}</Text>
      <Text style={{ marginLeft: 10 }}>Shop: {item.shopName}</Text>
    </View>
    <TouchableOpacity style={styles.button}  >
      <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginTop: 10, textAlign: "center" }}>Chat</Text>
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
        keyExtractor={item => item.id}
        style={styles.list}>
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {

  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#E5E5E5"
  },
  item: {
    padding: 17,
    marginVertical: 10,
    marginHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    lineHeight: 20,
  },
  centerItem: {
    flex: 1,
    flexDirection: 'column',
    fontSize: 14,
  },
  button: {
    backgroundColor: "red",
    height: 45,
    borderRadius: 5,
    width: 70,
    marginTop: 15
  }
})


