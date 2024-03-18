import Login from "../../screens/auth/Login";

export default function navigationHelper() {
  const routes = [
    {
      component: Login,
      name: "Login"
    }
  ]

  return { routes }
}
