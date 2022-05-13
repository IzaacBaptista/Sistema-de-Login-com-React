// screens/LoginScreen.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Button, ImageBackground, Text, TextInput, View } from "react-native";

import styles from "../components/styles";
import { auth } from "../config/firebase";
import tw from "twrnc";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [temErro, setTemErro] = useState(false);

  const realizarLogin = async () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((credenciais) => {
        console.log(credenciais.user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode == "auth/user-not-found") {
          setTemErro("Não existe ninguém aqui com esse e-mail 💋");
        }
        if (errorCode == "auth/invalid-password") {
          setTemErro("Senha errada leitão! 🤔");
        }
        if (errorCode == "auth/wrong-password") {
          setTemErro("Senha errada leitão! 🤔");
        }
      });
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/login.jpg")}
    >
      <View style={styles.sub_container}>
        <Text>Faça seu Login</Text>
        <Text>Digite seu E-mail</Text>
        {temErro && (
          <View style={tw`bg-red p-3 w-full`}>
            <Text style={tw` text-center font-bold w-full`}>{temErro}</Text>
          </View>
        )}
        <TextInput style={styles.input} onChangeText={setEmail} />
        <Text>Digite sua Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <Button title={"Fazer Login"} onPress={realizarLogin} />
        <Button
          title={"Fazer Cadastro"}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
