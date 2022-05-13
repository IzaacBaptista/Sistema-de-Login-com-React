import { View } from "react-native";
import styles from "../components/styles";

export default function InicialScreen(){
    return (
        <View
            style={styles.container}
        >
            <Text>Hello, você logou com sucesso!</Text>
        </View>
    )
}