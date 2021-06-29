import React ,{useEffect,useState} from 'react';
import axios from 'axios';

const divStyle ={
    width:"50%",
    border:"blue solid 2px",
    height:"300px",
    margin:"10px ",
    backgroundColor:"#2554",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center"
}



const UserList = () => {
    const [listOfUser,setListOfUser] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get
            ("https://jsonplaceholder.typicode.com/users");
            setListOfUser(result.data);
            

        };
        fetchData();
    }, []);
   
    return (
        
            <div>
                {listOfUser.map(list=>(
                    <div style={divStyle}>
                    <h1>{list.name}</h1>
                    <h3>{list.username}</h3>
                    <h5>{list.email}</h5>
                    
                    </div>)
                    )}
            </div>
    )
         
        
    
}

export default UserList;
