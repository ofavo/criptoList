import { Cripto } from "./cripto.interface";

export interface ResposeApi  {
    data: Array<Cripto>,
    info: Info
}

interface Info {
    "coins_num": number;
    "time": number
}