import { Text, TouchableOpacity, View } from "react-native"
import { Cripto } from "../interfaces/cripto.interface"
import { cardListStyle } from "../styles/cardList.style";
import { useNavigation } from "@react-navigation/native";

const CardList = ({ dato }: { dato: Cripto }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={cardListStyle.body}
            onPress={()=> navigation.navigate("Detail", {item:dato})}
        >
            <Text style={cardListStyle.symbol}>{dato.symbol}</Text>
            <Text style={cardListStyle.name}>{dato.name}</Text>
            <View>
                <Text style={cardListStyle.price_usd}>{dato.price_usd} usd</Text>
                <Text style={cardListStyle.price_btc}>{dato.price_btc} btc</Text>

            </View>

        </TouchableOpacity>
    )
}

export default CardList;