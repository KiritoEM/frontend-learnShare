import Login from "../../screens/auth/Login";
import Welcoming from "../../screens/welcoming/Welcoming";

export default function navigationHelper() {
  const routes = [
    {
      component: Welcoming,
      name: "Welcoming"
    },
    {
      component: Login,
      name: "Login"
    }
  ]

  return { routes }
}
