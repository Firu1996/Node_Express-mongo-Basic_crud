const app = require('./app');

const connectDatabase = require('./config/connectDatabase');

const dotenv = require('dotenv');

dotenv.config({ path : 'config/config.env' });

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT : ${process.env.PORT}`);
})