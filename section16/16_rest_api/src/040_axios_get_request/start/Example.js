import { useEffect,useState } from "react";

import axios from "axios";
//usersをmap関数で取得
const Example = () => {
  const [users,setUsers] = useState([]);
  useEffect(() =>{
    const getUser = async () =>{
      const res = await axios.get('http://localhost:3003/user');
      setUsers(res.data);
    }
    getUser();
  },[])

  return(
  <>
    {users?.map((user) => {
      return(
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>age: {user.age}</p>
          <p>hobby: {user.hobbies.join(',')}</p>
        </div>
      )
    })}
  </>
  )
};
export default Example;
