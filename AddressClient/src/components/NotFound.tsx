import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound({ message }: any) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="m-5 p-5 text-center">
      {message ? <div>{message}</div> : <p>Page not found</p>}

      <Button variant="outline-info" onClick={goBack}>
        Return
      </Button>
    </div>
  );
}
