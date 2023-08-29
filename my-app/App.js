import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigation from "./app/navigation/TabNavigation";
import NoInternet from "./app/components/NoInternet";
import { useNetInfo } from "@react-native-community/netinfo";

const CUSTOM_THEME = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#ffffff" },
};

const App = () => {
  const [noInternet, setNoInternet] = useState(false);
  console.log(netInfo);
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

  if (noInternet) {
    return <NoInternet onRefreshPress={fetchNetInfo}></NoInternet>;
  }

  return (
    <NavigationContainer theme={CUSTOM_THEME}>
      <TabNavigation></TabNavigation>
    </NavigationContainer>
  );
};

export default App;
