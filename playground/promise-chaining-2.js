require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5fd51456c9f9eb4704de3982').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
   const task = await Task.findByIdAndDelete(id)
   const count = await Task.countDocuments({completed:false})
   return count
}

deleteTaskAndCount('5fd515db38d17042f4d6a6dc').then((count)=>{
   console.log(count)
}).catch((e)=>{
    console.log(e)
})