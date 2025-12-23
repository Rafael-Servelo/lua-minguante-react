import { v4 as uuidv4 } from "uuid";

const myID = uuidv4();

function Body() {
  return <div>Body - {myID.split("-")[4]}</div>;
}

export default Body;
