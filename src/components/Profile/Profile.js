import { useEffect } from "react";
import { Button } from "reactstrap";
import { useContext } from "react";
import { AuthContext } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { authState, logout, isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated() === false) {
      return navigate("/");
    }
  }, []);

  return (
    <div>
      <p>صفحه پروفایل</p>
      <div>
        <Button color="danger" onClick={() => logout}>
          خروج
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
