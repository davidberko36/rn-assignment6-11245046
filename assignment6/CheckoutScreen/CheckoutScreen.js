import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./Header";
import Checkout from "./Checkout"
import Footer from "./Footer"


export default function CheckoutScreen(){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Header/>
                <Checkout/>
                <Footer/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    },

    scroll: {
        flex: 1,
    }
})