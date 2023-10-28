import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../utils/types";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
// import CadastroUsuarioScreen from "../screens/CadastroUsuarioScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;