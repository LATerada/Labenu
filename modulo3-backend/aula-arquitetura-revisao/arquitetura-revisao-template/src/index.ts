import express from 'express'
import cors from 'cors'
import { pingRouter } from './routers/pingRouter'
import { brandRouter } from './routers/brandRouter'
import { productRouter } from './routers/productRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Server running on port: ${3003}`)
})
app.use("/ping", pingRouter)
app.use("/products", productRouter);

app.use("/brands", brandRouter);
