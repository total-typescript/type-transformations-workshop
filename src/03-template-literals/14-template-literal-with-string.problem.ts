
/**
 * Here we can use template literals as type, to give restrictions on a string template. In this example we only want to allow strings
 * that start with a slash (/) as the first character followed by any string. We could also put "number" and then it would only allow
 * number after the slash. Pretty cool!
 */
type Route = `/${string}`;

export const goToRoute = (route: Route) => {};

// Should succeed:

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// Should error:

// @ts-expect-error
goToRoute("users/1");
// @ts-expect-error
goToRoute("http://facebook.com");
