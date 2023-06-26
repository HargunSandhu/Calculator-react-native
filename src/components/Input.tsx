import React from "react";
import { Button, StyleSheet, View } from "react-native";

const Input = () => {
    return (
        <View>
            <View style={styles.btnGrey}>
                <Button title="AC"></Button>
            </View>
            <View style={styles.btnGrey}>
                <Button title="Erase"></Button>
            </View>
            <View style={styles.btnBlue}>
                <Button title="/"></Button>
            </View>
            <View style={styles.btnBlue}>
                <Button title="*"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="7"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="8"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="9"></Button>
            </View>
            <View style={styles.btnBlue}>
                <Button title="-"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="4"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="5"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="6"></Button>
            </View>
            <View style={styles.btnBlue}>
                <Button title="+"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="1"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="2"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="3"></Button>
            </View>
            <View style={styles.btnBlack}>
                <Button title="0"></Button>
            </View>
            <View style={styles.btnBlue}>
                <Button title="."></Button>
            </View>
            <View style={styles.btnEqual}>
                <Button title="="></Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    btnBlack: {
        height: 50,
        width: 50,
        padding: 0,
        borderRadius: 16,
    },
    btnGrey: {
        height: 50,
        width: 50,
        padding: 0,
        borderRadius: 16,
    },
    btnBlue: {
        height: 50,
        width: 50,
        padding: 0,
        borderRadius: 16,
    },
    btnEqual: {
        height: 50,
        width: 50,
        padding: 0,
        borderRadius: 16,
    }
})

export default Input;