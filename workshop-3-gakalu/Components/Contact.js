import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
export default function Contact({ name, phone }) {
  return (
    <View>
      <p>{name}</p>
      <p>{phone}</p>
    </View>
  );
}
Contact.prototype = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
