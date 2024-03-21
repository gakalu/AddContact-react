import { StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView, Touchable } from "react-native-web";
import Contact from "./Components.Contact";
import { compareNames } from "./contacts";
export default function App() {
  const [list, setList] = useState([]);

  const sortHandler = () => {
    const newList = [...list.sort(compareNames)];
    setList(newList);
  };
  const showForm = () => {};
  return (
    <View>
      <ScrollView>
        {list.map((contact) => (
          <Contact contact={contact} />
        ))}
      </ScrollView>
      <Touchable onPress={sortHandler}>
        <Text>SortContact</Text>
      </Touchable>
      <Touchable onPress={showForm}>
        <Text>Show/Hide Form</Text>
      </Touchable>
      <FlatList>
        {list.map((contact) => (
          <Contact contact={contact} />
        ))}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
