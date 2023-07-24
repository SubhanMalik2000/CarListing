import { useSelector } from "react-redux";
function CarValue() {
  const totalcost = useSelector(({ cars: { data, searchTerm } }) => {
    const filtedCar = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return filtedCar.reduce((acc, car) => {
      return acc + car.cost;
    }, 0);
  });
  return <div className="car-value">Total Cost: ${totalcost}</div>;
}
export default CarValue;
