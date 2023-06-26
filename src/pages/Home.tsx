import React from "react";
import { View, StyleSheet } from "react-native";
import Output from "../components/Output";
import Input from "../components/Input";

const Home = () => {
    return (
        <View style={styles.main}>
            <Output />
            <Input />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#17181A",
        height: 900, 
    }
})

export default Home;