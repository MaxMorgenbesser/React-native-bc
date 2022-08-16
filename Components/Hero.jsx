import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Hero() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>IG Clone</Text>
    </View>
  );
}
export default Hero;

const styles = StyleSheet.create({
  header: { height: 50, backgroundColor: "white" },
  headerText: { fontSize: 18, fontWeight: "900", textAlign: "center" },
});
