import { createServer, Model, Response } from "miragejs";

createServer({
  models: {
    users: Model,
  },

  seeds(server) {
    server.create("user", {
      id: "123",
      email: "guy@react.com",
      password: "react123",
      name: "Guy",
    });
  },

  routes() {
    this.namespace = "api";
    this.passthrough("https://firestore.googleapis.com/**");
    this.logging = false;
    this.timing = 2000;

    this.post(
      "/login",
      (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        const foundUser = schema.users.findBy({ email, password });
        if (!foundUser) {
          return new Response(
            401,
            {},
            { message: "No user with those credentials found!" }
          );
        }

        foundUser.password = undefined;
        return {
          user: foundUser,
          token: "Enjoy your pizza, here's your tokens.",
        };
      },
      { timing: 2000 }
    );
  },
});

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error({
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    });
  }

  return data;
}
