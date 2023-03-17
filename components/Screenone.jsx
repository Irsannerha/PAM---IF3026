import { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Input from "./DataInput";

export default class FlightScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Hiling.id</Text>
        </View>
        <View style={styles.form}>
          <Input
            changeAsal={this.setAsal}
            changeTujuan={this.setTujuan}
            changeTanggal={this.setTanggal}
            navigation={this.props.navigation}
          />
        </View>
        <View>
          <Text style={{ marginTop: 400 }}>
            IRSAN ROMARDI HARAHAP - 120140043
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#6FB23E",
    minHeight: 410,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  form: {
    position: "absolute",
    backgroundColor: "white",
    top: 100,
    width: "85%",
    borderRadius: 10,
    padding: 15,
    elevation: 10,
    minHeight: 350,
  },
});
