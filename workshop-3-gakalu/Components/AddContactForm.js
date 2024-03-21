import { constants } from "buffer";
import { StyleSheet, Text, View } from "react-native";
import { Alert, TextInput, Touchable } from "react-native-web";
import contacts from "../contacts";
export default function AddContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const changeNameHandeler = (singleName) => {
    setName(singleName);
  };
  const changePhoneHandeler = (singlePhone) => {
    setPhone(singlePhone);
  };
  const saveHandeler = () => {
    if (phone.length != 10) {
      Alert.alert("Only 10 digits allowed");
      return;
    }
  };
  return (
    <view>
      Name:
      <TextInput value={name} onChangeText={changeNameHandeler} />
      Phone:
      <TextInput value={phone} onChangeText={changePhoneHandeler} />
      <Touchable onPress={saveHandeler}>
        <Text>Add New Contact</Text>
      </Touchable>
    </view>
  );
}
AddContactForm.protoTypes = {
  name: propTypes.string,
  phone: propTypes.string,
};
