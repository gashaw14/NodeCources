const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


// const me = new User({
//    name:'gashaw',
//    email:'gashaw@',
//    age:33
// })

// me.save().then(()=>{
//  console.log(me)
// }).catch((error)=>{
// console.log('Error', error)
// })

