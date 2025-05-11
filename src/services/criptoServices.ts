import { api } from "../../enviroment";
import { ResposeApi } from "../interfaces/response.interface";

export const getData = async (start : number) => {

    try {
        const response = await fetch(api+`?start=${start}&limit=100`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData : ResposeApi= await response.json();
        return jsonData.data
    } catch (error) {

        console.log(error)
        return []
    }
}
