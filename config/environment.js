const development = {
  name: "development",
  asset_path: "/assets",
  session_cookie_key: "something",
  db: "codieal_development",
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: "587",
    secure: false,
    auth: {
      user: "mayurnegi1999",
      pass: "Datainsta@123",
    },
  },
  google_client_id:
    "732270039092-oa1d976o6tmocsbld91kgnafsnauk9aq.apps.googleusercontent.com",
  google_client_secret: "TLSxpueISbqbL0z0mpqzywRL",
  google_callback_url: "http://localhost:8000/users/auth/google/callback",
  jwt_secret: "codeial",
};

const production = {
  name: process.env.CODEIAL_ENVIRONMENT,
  asset_path: process.env.CODEIAL_ASSET_PATH,
  session_cookie_key: process.env.CODEIAL_SESSION_COOKIE,
  db: "codieal_production",
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: "587",
    secure: false,
    auth: {
      user: process.env.CODEIAL_GMAIL_USERNAME,
      pass: process.env.CODEIAL_GMAIL_PASSWORD,
    },
  },
  google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
  google_client_secret: process.env.CODEIAL_CLIENT_ID_SECRET,
  google_callback_url: process.env.CODEIAL_GOOGLE_CALLBACK_URL,
  jwt_secret: process.env.CODEIAL_JWT_SECRET,
};

module.exports = production;
// eval(process.env.CODEIAL_ENVIRONMENT) == undefined
//   ? development
//   : eval(process.env.CODEIAL_ENVIRONMENT);
