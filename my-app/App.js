import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigation from "./app/navigation/TabNavigation";
import NoInternet from "./app/components/NoInternet";
import { useNetInfo } from "@react-native-community/netinfo";
import { View, Text, TextInput, Button } from "react-native";


const CUSTOM_THEME = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#ffffff" },
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [noInternet, setNoInternet] = useState(false);
  //console.log(netInfo);
  const netInfo = useNetInfo();
  
  const fetchNetInfo = () => {
    const { isConnected, isInternetReachable } = netInfo;
    if (isConnected === false && isInternetReachable === false) {
      setNoInternet(true);
    } else {
      setNoInternet(false);
    }
  };

  useEffect(() => {
    fetchNetInfo();
  }, [netInfo]);

  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação fictícia - aqui você deve verificar as credenciais
    if (username === 'user123') {
      setLoggedIn(true);
    } else {
      alert('Credenciais inválidas');
    }
  };

  if (noInternet) {
    return <NoInternet onRefreshPress={fetchNetInfo}></NoInternet>;
    
  }

  if (!isLoggedIn) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Por favor, faça login</Text>
        <TextInput
          placeholder="Nome de usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{ borderWidth: 1, padding: 8, margin: 8, width: 200 }}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={CUSTOM_THEME}>
      <TabNavigation></TabNavigation>
    </NavigationContainer>
  );
};

export default App;
