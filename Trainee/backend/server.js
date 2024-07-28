// const express = require("express");
// const { MongoClient } = require("mongodb");

// const app = express();
// const port = 3000;

// // Replace the following with your MongoDB connection string
// const uri =
//   "mongodb+srv://Suresh:Dover2024@companycluster18.vcbaskz.mongodb.net/check?retryWrites=true&w=majority&appName=CompanyCluster18";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected to database");

//     const database = client.db("check"); // Replace with your database name
//     const collection = database.collection("quiz_results"); // Replace with your collection name

//     app.get("/", async (req, res) => {
//       try {
//         const data = await collection.find({}).toArray();
//         // console.log("Data from database:");
//         // console.log(data);
//         // res.json(data);
//         // Get the last entry
//         const lastEntry = data[data.length - 1];
//         const { user_name, score, total_questions } = lastEntry;

//         // Calculate the percentage
//         const percentage = (score / total_questions) * 100;

//         // Log the last entry and the calculated percentage
//         console.log("Last entry from database:");
//         console.log(lastEntry);
//         console.log(`Percentage for ${user_name}: ${percentage.toFixed(2)}%`);
//       } catch (error) {
//         // res.status(500).send(error.toString());
//       }
//     });

//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// run().catch(console.dir);

const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
// Replace the following with your MongoDB connection string
const uri =
  "mongodb+srv://Suresh:Dover2024@companycluster18.vcbaskz.mongodb.net/check?retryWrites=true&w=majority&appName=CompanyCluster18";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to database");

    const database = client.db("check"); // Replace with your database name
    const collection = database.collection("quiz_results"); // Replace with your collection name

    app.get("/exam-score", async (req, res) => {
      try {
        const data = await collection.find({}).toArray();

        // Get the last entry
        const lastEntry = data[data.length - 1];
        const { user_name, score, total_questions } = lastEntry;

        // Calculate the percentage
        const percentage = (score / total_questions) * 100;

        // Send the percentage as JSON
        res.json({ user_name, percentage: percentage.toFixed(2) });
      } catch (error) {
        res.status(500).send(error.toString());
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);
