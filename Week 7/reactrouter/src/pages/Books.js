import { useParams } from "react-router-dom";
export default function Books() {
  useParams();
  const params = useParams();

  return <div>You are about to access book {params.bookID}</div>;
}
