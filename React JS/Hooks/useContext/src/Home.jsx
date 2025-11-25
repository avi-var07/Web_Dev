import { useContext } from "react";
import { a } from "./context";

const Home =()=>{
    const value = useContext(a);

    return <h2>Hello {value.name}</h2>
}

export default Home;