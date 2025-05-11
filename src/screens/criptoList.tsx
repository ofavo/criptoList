import {useCallback, useEffect, useState} from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native"
import useCriptos from "../hooks/criptohooks";
import CardList from "../components/cardList";
import { Cripto } from "../interfaces/cripto.interface";
import { criptoListStyle } from "../styles/criptoList.style";
import Filtros from "../components/filters.tsx";

const CriptoList = () => {
    const [start, setStart] = useState(0)


    const [sortType, setSortType] = useState<'usd' | 'btc' | null>(null);
    const {criptosList, isFetchingMore} = useCriptos(start, sortType)

    const renderFooter = () => {
        if (!isFetchingMore) return null;
        return (
          <View style={criptoListStyle.footer}>
            <ActivityIndicator size="large" color="#007BFF" />
            <Text style={criptoListStyle.text}>Cargando más datos...</Text>
          </View>
        );
      };


    return (
        <>
            <Filtros  sortType={sortType} setSortType={setSortType}/>
            <FlatList
                data={criptosList}
                renderItem={({item})=> <CardList dato={item} />}
                keyExtractor={()=> Math.random().toString()}
                onEndReached={() => {setStart(start+100); setSortType(null)}}
                onEndReachedThreshold={1}
                ListFooterComponent={renderFooter}
                style={{flex: 1}}
            />
        </>
    )
}



export default CriptoList;
