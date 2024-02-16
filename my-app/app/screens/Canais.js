import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone desejado
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;

const SettingsScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Lógica para fazer logout
    // Por exemplo, limpar o token de autenticação e redirecionar para a tela de login
    navigation.navigate("Login");
  };

  const handleProfile = () => {
    // Navegar para a tela de perfil ou realizar ação relacionada ao perfil
    navigation.navigate("Profile");
  };

  const handleNotifications = () => {
    // Navegar para a tela de configurações de notificações ou realizar ação relacionada às notificações
    navigation.navigate("Notifications");
  };

  // Função para calcular o tamanho responsivo da fonte com base na largura da tela
  const responsiveFontSize = (size) => {
    return (size * windowWidth) / 375; // 375 é a largura da tela de referência
  };

  return (
    <View style={styles.container}>
      <View >
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: responsiveFontSize(18),
            marginTop: 30,
            padding: windowWidth * 0.05,
          }}
        >
          NESSA SESSAO VOCE PODE ENCONTRAR.....
        </Text>
      </View>

      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        <MaterialCommunityIcons name="file-search" size={24} color="black" style={styles.icon} />
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          Pesquisas
        </Text>
        <AntDesign name="right" size={22} color="black"  style={styles.end_icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        <MaterialCommunityIcons name="gender-female" size={24} color="black" style={styles.icon} />
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          Organizações Feministas
        </Text>
        <AntDesign name="right" size={22} color="black"  style={styles.end_icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        <MaterialCommunityIcons name="contacts" size={24} color="black" style={styles.icon} />
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          Contatos
        </Text>
        <AntDesign name="right" size={22} color="black" style={styles.end_icon}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        <MaterialCommunityIcons name="forum-outline" size={24} color="black" style={styles.icon} />
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          Fórum
        </Text>
        <AntDesign name="right" size={22} color="black"  style={styles.end_icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 10,
    color: "black",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  optionText: {
    marginLeft: 30,
  },
  icon: {
    marginLeft: 30,
  },
  end_icon: {
    position: 'absolute',
    right: 0,
    marginRight: 30,
  },
});

export default SettingsScreen;
