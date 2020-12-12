require('../src/db/mongoose')

const User = require('../src/models/user')

// User.findByIdAndUpdate('5fd5117a14b03041a846fad9', {age:20}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:20})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5fd5117a14b03041a846fad9',29).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
