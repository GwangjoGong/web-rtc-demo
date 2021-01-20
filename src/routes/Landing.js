import { useForm } from "react-hook-form";
import styled from "styled-components";
import { fb } from "../firebase";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 10px;
  margin-top: 20px;
`;

const Landing = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const {
        user: { uid },
      } = await fb.auth().signInWithEmailAndPassword(email, password);
      window.localStorage.setItem("uid", uid);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        const {
          user: { uid },
        } = await fb.auth().createUserWithEmailAndPassword(email, password);
        window.localStorage.setItem("uid", uid);
      } else {
        alert(err);
      }
    } finally {
      window.location.reload();
    }
  };
  return (
    <Container>
      <Logo>
        Awesome
        <br />
        Title
      </Logo>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          defaultValue=""
          ref={register({ required: true })}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          minLength={6}
          required
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </Form>
    </Container>
  );
};

export default Landing;
