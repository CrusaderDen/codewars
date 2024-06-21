// console.log(1)
// const pr = new Promise((res) => {
//    res()
//    console.log(2)
// })
// pr.then(() => console.log(3))
// pr.then(() => console.log(4))
// console.log(5)

// async function foo() {
//    return 5
// }
// const a = foo()
// console.log(a);

// function delay(ms) {
//    return new Promise(res => {
//       setTimeout(()=>res(),ms)
//    })
// }

//Не работает, разобрать порядок
// async function delay(ms) {
//    setTimeout(() => {
//       new Promise((res) => {
//          res()
//       })
//    }, ms)
// }

// delay(3000).then(() => console.log("hi"))

// const users = [
//    {id: "1", name: "Den"},
//    {id: "2", name: "Vovan"},
// ]

// const techs = {
//    1: ["CSS", "JS"],
//    2: ["Go", "Pyton"],
// }

// const common = [
//    {id: "1", name: "Den", techs: ["CSS", "JS"]},
//    {id: "2", name: "Vovan", techs: ["Go", "Pyton"]},
// ]

// function getUserTechs() {
//    setTimeout(() => {
//       const data = users
//       console.log(data)
//       setTimeout(() => {
//          const userTechs = techs[data[0].id]
//          console.log(userTechs)
//       }, 2000)
//    }, 2000)
// }

// getUserTechs()

// const str = "Deniska"
// let output = ""
// for (let char of str) {
//    setTimeout(() => {
//       console.clear()
//       console.log((output += char))
//    }, 1000)
// }

// const dataState = []

// function getDataFromServ() {
//    setTimeout(() => {
//       const user = {id: 1, name: "Den"}
//    }, 2000)
// }

/*

function getVideos(callback) {
   setTimeout(() => {
      const videos = [
         {id: 1, title: "Video 1"},
         {id: 2, title: "Video 2"},
         {id: 3, title: "Video 3"},
      ]
      console.log("videos uploaded")
      callback(videos)
   }, 1000)
}

function getVideoDescription(id, callback) {
   setTimeout(() => {
      if (id === 1) {
         const description = {
            id: 1,
            title: "Video 1",
            tags: ["js", "promise"],
            authorId: 77,
         }
         console.log("description uploaded")
         callback(description)
      }
   }, 1000)
}

function getAuthorDescription(authorId, callback) {
   setTimeout(() => {
      if (authorId === 77) {
         const author = {
            id: 77,
            name: "JS - it is easy",
            shortsIds: [33, 55, 99],
         }
         console.log("author uploaded")
         callback(author)
      }
   }, 1000)
}

function getShort(shortIndex, callback) {
   setTimeout(() => {
      if (shortIndex === 1) {
         const short = "You can watch it"
         console.log("short uploaded")
         callback(short)
      }
   }, 1000)
}

function upload() {
   getVideos((data) => {
      getVideoDescription(1, (data) => {
         getAuthorDescription(77, () => {
            getShort(1, (data) => {
               console.log("----->" + data + "<-----")
            })
         })
      })
   })
}

upload()

*/
/*
function getVideos() {
   return new Promise((res) => {
      setTimeout(() => {
         const videos = [
            {id: 1, title: "Video 1"},
            {id: 2, title: "Video 2"},
            {id: 3, title: "Video 3"},
         ]
         console.log("videos uploaded")
         res(videos)
      }, 1000)
   })
}

function getVideoDescription(id) {
   return new Promise((res) => {
      setTimeout(() => {
         if (id === 1) {
            const description = {
               id: 1,
               title: "Video 1",
               tags: ["js", "promise"],
               authorId: 77,
            }
            console.log("description uploaded")
            res(description)
         }
      }, 1000)
   })
}

function getAuthorDescription(authorId) {
   return new Promise((res) => {
      setTimeout(() => {
         if (authorId === 77) {
            const author = {
               id: 77,
               name: "JS - it is easy",
               shortsIds: [33, 55, 99],
            }
            console.log("author uploaded")
            res(author)
         }
      }, 1000)
   })
}

function getShort(shortIndex) {
   return new Promise((res) => {
      setTimeout(() => {
         if (shortIndex === 1) {
            const short = "You can watch it"
            console.log("short uploaded")
            res(short)
         }
      }, 1000)
   })
}

function upload() {
   getVideos()
      .then(() => {
         return getVideoDescription(1)
      })
      .then(() => {
         return getAuthorDescription(77)
      })
      .then(() => {
         return getShort(1)
      })
      .then((data) => {
         console.log("----->" + data + "<-----")
      })
}

upload()
*/


