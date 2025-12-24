import { v4 as uuidv4 } from "uuid";

function Body() {
  return (
    <div className="bg-beige flex flex-col gap-2 p-4">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((item) => (
        <div className="p-2 border" key={item}>
          Produto {item} - ID: {uuidv4().split("-")[0]}
        </div>
      ))}
    </div>
  );
}

export default Body;
