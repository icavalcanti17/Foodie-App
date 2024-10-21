import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./screens/principal/principal.jsx";
import Cardapio from "./screens/cardapio/cardapio.jsx";
import Busca from "./screens/busca/busca.jsx";
import DetalheProduto from "./screens/detalhe-produto/detalhe-produto.jsx";
import DetalhePedido from "./screens/detalhe-pedido/detalhe-pedido.jsx";
import Checkout from "./screens/checkout/checkout.jsx";
import { Image, Text, TouchableOpacity } from "react-native";
import { COLORS } from "./constants/theme.js";
import icons from "./constants/icons.js";

const Stack = createNativeStackNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="principal"
          component={Principal}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="checkout"
          component={Checkout}
          options={{
            headerShadowVisible: false,
            title: "Meu Pedido",
            headerTitleAlign: "center",
            animation: "fade_from_bottom",
            headerRight: () => {
              return <TouchableOpacity onPress={() => alert("Show Papai")} style={{ alignItems: "center" }}>
                <Image source={icons.remove} style={{ width: 20, height: 20 }} />
                <Text style={{ color: COLORS.red }} >Limpar</Text>
              </TouchableOpacity>;
            },
          }}
        />

        <Stack.Screen
          name="detalhe-pedido"
          component={DetalhePedido}
          options={{
            headerShadowVisible: false,
            title: "Detalhes do Pedido",
            headerTitleAlign: "center",
            animation: "fade_from_bottom",
          }}
        />

        <Stack.Screen
          name="detalhe-produto"
          component={DetalheProduto}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="cardapio"
          component={Cardapio}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="busca"
          component={Busca}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;
