import Breakfast from "../components/Breakfast"
import Lunch from "../components/Lunch"
import Dinner from "../components/Dinner"

export default function Fetch() {
  const fetching = async (collection) => {
    const response = await fetch(`http://localhost:3000/get${collection}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      return await response.json();
  }

  return <>
    <Breakfast fetching={fetching} />
    <Lunch fetching={fetching} />
    <Dinner fetching={fetching} />
  </>
}


