import Principal from "../layouts/Principal";
import { View } from 'react-native';
import { HomeProps } from "../layouts/types";
import Tela from "../layouts/Tela_Login";

const HomeScreen = ({ navigation, route }: HomeProps) => {
    return (
        <View style={{
            flex: 1,
        }}>
                 <Tela navigation={navigation} route={route}/> 
             {/* <Principal navigation={navigation} route={route} />  */}
        </View>
    );
};

export default HomeScreen;