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
  name: "production",
};

module.exports = development;
