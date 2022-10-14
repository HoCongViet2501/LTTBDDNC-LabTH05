import { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState();

  const getDataMock = async () => {
    try {
      const response = await fetch("https://633fa986d1fcddf69ca70176.mockapi.io/api/person");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  

  useEffect(() => {
    getDataMock();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Item item={item} />
    )
  }

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: url }}></Image>
      <View style={styles.centerItem}>
        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}>{item.productName}</Text>
        <Text style={{ marginLeft: 10 }}>Shop: {item.shopName}</Text>
      </View>
      <TouchableOpacity style={styles.buttonDelete}  >
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginTop: 10, textAlign: "center" }}>
          Delete
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonUpdate}  >
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginTop: 10, textAlign: "center" }}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10, width: 300, textAlign: "center" }}>Ban co thac mac gi dung ngai chat voi shop</Text>
      </View>
      <FlatList
        data={data}
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
    marginVertical: 8,
    marginHorizontal: 15,
    flexDirection: "row",
    backgroundColor: "#1BA9BC",
    borderRadius: 7
  },
  centerItem: {
    flex: 1,
    flexDirection: 'column',
    fontSize: 14,
  },
  buttonDelete: {
    backgroundColor: "red",
    height: 45,
    borderRadius: 5,
    width: 60,
    marginTop: 15
  },
  buttonUpdate: {
    backgroundColor: "blue",
    height: 45,
    borderRadius: 5,
    width: 60,
    marginTop: 15,
    marginLeft: 10
  }
})


