import express from "express"
import cors  from "cors"
import { learner } from "./routes/learner";
import { router } from "./routes/instructer";
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());  

app.use("/learner", learner)
app.use("/instructer",router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("health cheack")
})

