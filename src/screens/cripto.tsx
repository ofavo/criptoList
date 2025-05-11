import { useRoute } from "@react-navigation/native";
import { Text, View, ScrollView, StyleSheet } from "react-native";

const Cripto = ()=> {
    const route = useRoute();
    const { item } = route.params;
    return (    <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.text}>ID: {item.id}</Text>
          <Text style={styles.text}>Símbolo: {item.symbol}</Text>
          <Text style={styles.text}>Name ID: {item.nameid}</Text>
          <Text style={styles.text}>Rank: {item.rank}</Text>
          <Text style={styles.text}>Precio USD: {item.price_usd}</Text>
          <Text style={styles.text}>Cambio (24h): {item.percent_change_24h}</Text>
          <Text style={styles.text}>Cambio (1h): {item.percent_change_1h}</Text>
          <Text style={styles.text}>Cambio (7d): {item.percent_change_7d}</Text>
          <Text style={styles.text}>Precio BTC: {item.price_btc}</Text>
          <Text style={styles.text}>Capitalización de Mercado USD: {item.market_cap_usd}</Text>
          <Text style={styles.text}>Volumen (24h): {item.volume24}</Text>
           <Text style={styles.text}>Volumen (24h) A: {item.volume24a}</Text>
          <Text style={styles.text}>Circulación de Oferta: {item.csupply}</Text>
          <Text style={styles.text}>Oferta Total: {item.tsupply}</Text>
          <Text style={styles.text}>Oferta Máxima: {item.msupply}</Text>
        </View>
      </ScrollView>)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f0f0'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: '100%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center'
    },
    text: {
      fontSize: 18,
      marginVertical: 5,
    },
  });
export default Cripto