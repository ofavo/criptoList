import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window")

export const cardListStyle = StyleSheet.create({
    body: {
        width: width * 0.95,
        height: height * 0.1,
        backgroundColor: 'white',
        marginVertical: 5,
        marginHorizontal: width * 0.025,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    symbol: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Color de texto
        alignItems: "flex-start"
    },
    name: {
        fontSize: 16,
        color: '#666',
    },
    price_btc: {
        fontSize: 14,
        color: '#888',
    },
    price_usd: {
        fontSize: 14,
        color: '#888',
    }
})