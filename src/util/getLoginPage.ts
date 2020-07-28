import { createPath, Location } from "history";
import { LOGIN_PAGE, LOGOUT_PAGE } from "./constants";

function shouldRedirect(location: Location) {
  if (!location) {
    return false;
  }
  return location.pathname !== LOGOUT_PAGE;
}

export function getLoginPage(location: Location) {
  const query = !shouldRedirect(location)
    ? undefined
    : {
        redirectTo: createPath({
          pathname: location.pathname,
          search: location.search,
        }),
      };
  return {
    pathname: LOGIN_PAGE,
    query: query,
  };
}
