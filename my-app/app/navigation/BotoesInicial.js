import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Search from "../components/Search";

export default function BotoesInicial() {
  return (
    <View>
      <View>
        <Search />
      </View>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.button1]}>
            <Text style={styles.buttonText}>Políticas Públicas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.button2]}>
            <Text style={styles.buttonText}>Redes de Direitos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.button3]}>
            <Text style={styles.buttonText}>Organizações Feministas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.button4]}>
            <Text style={styles.buttonText}>Experiências Inovadoras</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.button5]}>
            <Text style={styles.buttonText}>Fórum</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.button6]}>
            <Text style={styles.buttonText}>Contatos</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: wp("5%")
  },
  buttonContainer: {
    marginTop: hp("10%"),
    //paddingHorizontal: wp("5%"),
  },
  button: {
    height: hp("8%"),
    borderRadius: wp("1%"),
    alignItems: "center",
    justifyContent: "center",
    //marginBottom: hp("2%"),
    elevation: 3,
    paddingHorizontal: wp('25%'),
    padding: wp('7%')
    
  },
  buttonText: {
    color: "white",
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    textAlign: "center",
  },
  button1: {
    backgroundColor: "#D3756B",
  },
  button2: {
    backgroundColor: "#A75D5D",
  },
  button3: {
    backgroundColor: "#D3756B",
  },
  button4: {
    backgroundColor: "#A75D5D",
  },
  button5: {
    backgroundColor: "#D3756B",
  },
  button6: {
    backgroundColor: "#A75D5D",
  },
});
