import { Stack, Button, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import MyInput from "../components/input";
import { useNavigate, useLocation } from "react-router-dom";
interface UserData {
  name: string;
  email: string;
  phoneNumber: string;
}

function Home() {
  const navigator = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (state?.message == "Please Fill The Form to go Page2") {
      setErr(state.message);
    }
  }, []);
  const [name, setName] = useState<any | null>();
  const [email, setEmail] = useState<any | null>();
  const [phoneNumber, setPhoneNumber] = useState<any | null>();
  const [err, setErr] = useState<any | null>(null);
  return (
    <form
      style={{ width: "50%", margin: "auto", paddingTop: "2rem" }}
      onSubmit={(e) => {
        e.preventDefault();
        let userData: UserData = { name, email, phoneNumber };
        localStorage.setItem("userData", JSON.stringify(userData));
        navigator("/pg2");
      }}
    >
      <Stack spacing={5}>
        {err && <Alert severity="error">{err}</Alert>}

        <MyInput
          req={true}
          inputLabel="Name"
          helperText="eg: Bob B"
          forId="Name"
          type="text"
          onChangeHandler={(e) => setName(e.target.value)}
        />
        <MyInput
          req={true}
          inputLabel="Phone Number"
          helperText="Enter your Phone Number"
          forId="phoneNumber"
          type="text"
          onChangeHandler={(e) => setPhoneNumber(e.target.value)}
        />
        <MyInput
          req={true}
          inputLabel="Email Address"
          helperText="We will never share your Email id"
          forId="email"
          type="email"
          onChangeHandler={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default Home;
