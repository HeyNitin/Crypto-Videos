import { useDocumentTitle } from "hooks/useDocumentTitle";

const Login = (): JSX.Element => {
  useDocumentTitle("Login");
  return <div>This is login page</div>;
};

export { Login };
