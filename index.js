import Koa from 'koa'
import router from 'koa-router'
const app = new Koa();

app.use(router(app))

app.listen(3000,()=>{
    console.log('listen')
})
