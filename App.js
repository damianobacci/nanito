import { StyleSheet, Text, View, Button, Pressable, Image } from "react-native";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";

export default function App() {
  // const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sounds/infatti.mp3")
    );
    // setSound(sound);

    await sound.playAsync();
  }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, marginBottom: 50 }}>Nanito App</Text>
      <View style={styles.image}>
        <Pressable onPress={playSound}>
          <Image source={require("./assets/images/nano-emoji.png")} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {},
});
