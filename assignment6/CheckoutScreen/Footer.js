import { StyleSheet, View, Text, Image} from "react-native";

export default function Footer(){
    return(
        <View style={styles.footer}>
            <View style={styles.checkoutButton}>
            <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')}></Image>
            <Text style={styles.checkout}>CHECKOUT</Text>
            </View>
            <View style={styles.total}>
                <Text style={styles.totalText}>EST. TOTAL</Text>
                <Text style={styles.totalAmount}>$ 240</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    checkoutButton: {
        flexDirection: 'row',
        backgroundColor: '#000000',
        borderWidth: 200,
        borderTopWidth: 30,
        borderBottomWidth: 30,
        left: 19,
        top: 113,  
    },
    shoppingBag: {
        tintColor: 'white',
        marginLeft: -80
    },
    checkout: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '300',
        letterSpacing: 6,
        width: 172,
        left: 35  
    },
    totalText: {
        fontSize: 18,
        fontWeight: '300',
        color: '#000000',
        bottom: -70,
        right: 279,
        letterSpacing: 4
    },
    totalAmount:{
        fontSize: 18,
        fontWeight: '300',
        color: '#D18035',
        bottom: -44,
        right: 35,
        letterSpacing: 4
    }
})