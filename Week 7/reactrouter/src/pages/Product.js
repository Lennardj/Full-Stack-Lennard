import { useParams } from "react-router-dom";
export default function Product() {
  useParams();
  const params = useParams();

  return <div>This is the About Product ID {params.productID}</div>;
}
