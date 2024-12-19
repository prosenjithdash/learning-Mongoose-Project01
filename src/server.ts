// import app from "./app";
// import config from "./app/config";
// import mongoose from "mongoose";

// async function main() {

//     try {
//         await mongoose.connect(config.database_url as string);
//         // now need to connect with mongoose
//         app.listen(config.port, () => {
//             // console.log(`Example app listening on port ${config.port}`)
//             console.log('app listening on port 8000')

//         })
//     } catch (err) {
//         console.log(err)
//     }
//     //local host use korbo na amra mongodb atlas use korbo
// }
// main()


///////////

import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();