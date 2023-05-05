//axiosを使う、todoApiを定義し、getAll関数、post、delete,patch(put)、引数todoとする
import axios from "axios";

const ENDPOINT_URL = 'http://localhost:3003/todo'

//定数resultを定義しNDPOINT_URLを取ってくる。定義したtodoApi.getAll();を実行
const todoApi = {
    async getAll(){
      const result = await axios.get(ENDPOINT_URL);
      return result.data
    },
    async post(todo){
      const result = await axios.post(ENDPOINT_URL,todo);
      return result.data
    },
    async delete(todo){
      const result = await axios.delete(ENDPOINT_URL+'/'+todo.id);
      return result.data
    },
    async patch(todo){
      const result = await axios.put(ENDPOINT_URL+'/'+todo.id,todo);
      return result.data
    },
}

export default todoApi;
