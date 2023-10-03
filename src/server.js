const { PORT = 5000 } = process.env;

const app = require("./App");

app.listen(PORT, () => console.log(`Listening on Port ${PORT}!`));
