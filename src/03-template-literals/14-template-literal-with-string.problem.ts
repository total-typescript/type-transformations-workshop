// TODO: implement Route
// route must start with "/" and can have any number of characters after that
// reference: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
type Route = unknown;

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
