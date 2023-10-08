import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(251, 203, 0, 1)", "rgba(191, 154, 0, 1)"]}
        style={styles.gradient}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 50,
              marginTop: 50,
            }}
          >
            {" "}
            Login{" "}
          </Text>{" "}
        </View>{" "}
        <View
          style={[
            {
              width: 330,
              height: 54,
              marginLeft: 28,
              border: 1,
              marginTop: 80,
              backgroundColor: "#C4C4C4",
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <Image
            source={require("/icon.png")}
            style={{ width: 20, height: 20, marginLeft: 5, marginRight: 10 }}
          />{" "}
          <Text style={{ fontWeight: "bold", fontSize: 20 }}> Name </Text>{" "}
        </View>{" "}
        <View
          style={[
            {
              width: 330,
              height: 54,
              margin: 10,
              marginLeft: 28,
              border: 1,
              marginTop: 30,
              backgroundColor: "#C4C4C4",
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <Image
            source={require("/iconlock.png")}
            style={{ width: 30, height: 30, marginLeft: 5, marginRight: 10 }}
          />{" "}
          <Text style={{ fontWeight: "bold", fontSize: 20 }}> PassWord </Text>{" "}
          <Image
            source={require("/eye.png")}
            style={{ width: 30, height: 30, marginLeft: 140, marginRight: 10 }}
          />
        </View>{" "}
        <View
          style={[
            {
              width: 330,
              height: 54,
              margin: 40,
              marginLeft: 28,
              border: 1,
              backgroundColor: "rgba(6, 0, 0, 1)",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          {" "}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            {" "}
            Login{" "}
          </Text>{" "}
        </View>{" "}
        <View
          style={{
            width: 239,
            height: 27,
            marginLeft: 61,
            marginTop: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Forgot your password ?
          </Text>
        </View>
      </LinearGradient>{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
