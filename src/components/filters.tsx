import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Filtros = ({setSortType, sortType} : { setSortType:any, sortType:any}) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[
                    styles.sortButton,
                    sortType === 'usd' && styles.activeSortButton,
                ]}
                onPress={() => setSortType('usd')}
            >
                <Text
                    style={[
                        styles.sortButtonText,
                        sortType === 'usd' && styles.activeSortButtonText,
                    ]}
                >
                    Precio USD
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.sortButton,
                    sortType === 'btc' && styles.activeSortButton,
                ]}
                onPress={() => setSortType('btc')}
            >
                <Text
                    style={[
                        styles.sortButtonText,
                        sortType === 'btc' && styles.activeSortButtonText,
                    ]}
                >
                    Precio BTC
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    sortButton: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 5,
    },
    activeSortButton: {
        backgroundColor: '#007bff',
    },
    sortButtonText: {
        color: '#333',
        fontWeight: 'bold',
    },
    activeSortButtonText: {
        color: '#fff',
    },
})
export default Filtros;
