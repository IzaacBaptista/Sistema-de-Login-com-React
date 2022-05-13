// screens/LoginScreen.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import styles from "../components/styles";
import { db, auth } from "../config/firebase";
import tw from "twrnc";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [temErro, setTemErro] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const realizarRegistro = async () => {
    const user = await createUserWithEmailAndPassword(auth, email, senha)
      .then((credenciais) => {
        setTemErro(false);
        return setDoc(doc(db, "usuarios", credenciais.user.uid), {
          nome: nome,
          telefone: telefone,
        });
      })
      // .then(() => navigation.navigate('Login'))
      .then(() => setSucesso(true))
      .catch((error) => {
        const errorCode = error.code;
        const errorMensagem = error.message;
        setTemErro(errorMensagem);

        if (errorCode == "auth/email-already-in-use") {
          setTemErro("Poxa já se cadastraram com este e-mail 😢");
        }
        if (errorCode == "auth/weak-password") {
          setTemErro("Senha muito curta 😢");
        }
        if (errorCode == "auth/invalid-password") {
          setTemErro("Senha muito curta 😢");
        }
        if (errorCode == "auth/invalid-email") {
          setTemErro("E-mail inválido 😢");
        }
      });

    // const docRef = await addDoc(
    //   collection(db, "usuario", {
    //     nome: nome,
    //     email: email,
    //     senha: senha
    //   })
    // )
    // console.log("Document written with ID: ", docRef.id);
    // return docRef;
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/login.jpg")}
    >
      <View style={styles.sub_container}>
        {sucesso && (
          <View>
            <Text>Congratulations!!!</Text>
            <Button
              title={"Fazer Login"}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        )}
        {!sucesso && (
          <View>
            <Text>Faça seu Cadastro</Text>
            {temErro && (
              <View style={tw`bg-red p-3 w-full`}>
                <Text style={tw` text-center font-bold w-full`}>{temErro}</Text>
              </View>
            )}
            <Text>Digite seu Nome</Text>
            <TextInput style={styles.input} onChangeText={setNome} />
            <Text>Digite seu Telefone</Text>
            <TextInput style={styles.input} onChangeText={setTelefone} />
            <Text>Digite seu E-mail</Text>
            <TextInput style={styles.input} onChangeText={setEmail} />
            <Text>Digite sua Senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={setSenha}
              secureTextEntry={true}
            />
            <Button title={"Realizar Cadastro"} onPress={realizarRegistro} />
            <Button
              title={"Fazer Login"}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
