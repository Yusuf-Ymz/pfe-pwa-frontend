const environment = { production: false, serverUrl: "http://localhost:8080" };
if (process.env.ENV === "dev") {
  environment.serverUrl = 'https://pfe-api-backend-dev.herokuapp.com/'
}
else if (process.env.ENV === "production") {
  environment.production = true;
  environment.serverUrl = 'https://pfe-api-backend.herokuapp.com/'
}
export { environment };
