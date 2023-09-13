import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone desejado

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
      <TouchableOpacity style={styles.option} onPress={handleProfile}>
        <Icon name="user" size={24} color="#F0997D" style={styles.icon} />{" "}
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          Perfil
        </Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>
      </View>
      <TouchableOpacity style={styles.option} onPress={handleProfile}>
        <Icon name="mail" size={24} color="#F0997D" style={styles.icon} />{" "}
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          E-mail
        </Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre</Text>
      </View>

      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        {/* Ícone de saída */}
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          Ajuda
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        {/* Ícone de saída */}
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          Termos de Serviço
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        {/* Ícone de saída */}
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          Política de Privacidade
        </Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Login</Text>
      </View>
      <TouchableOpacity style={styles.option} onPress={handleLogout}>
      <Icon name="log-out" size={24} color="#F0997D" style={styles.icon} />{" "}
        <Text style={[styles.optionText, { fontSize: responsiveFontSize(18) }]}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  section: {
    marginBottom: 10,
    backgroundColor: "#F2F2F2",
    padding: 5,
    marginLeft: 4,
  },
  sectionTitle: {
    fontSize: 20,
    //fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 10,
    color: "#F0997D",
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
});

export default SettingsScreen;
