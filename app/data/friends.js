
// ===============================================================================
// DATA
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendsData = [

  {
  "name":"Jackson",
  "photo":"https://quindry.com/wp-content/gallery/people/dynamic/Annual-Meeting-2014-110_pp.jpg-nggid03947-ngg0dyn-1999x1500x100-00f0w010c010r110f110r010t010.jpg",
  "scores":[
     5,
     4,
     1,
     4,
     5,
     1,
     2,
     4,
     1,
     1
      ]
},

{
 "name":"Lisa",
  "photo":"https://quindry.com/wp-content/gallery/people/dynamic/Kelli-10_.jpg-nggid03941-ngg0dyn-1565x1500x100-00f0w010c010r110f110r010t010.jpg",
  "scores":[
     4,
     1,
     4,
     1,
     2,
     3,
     9,
     8,
     9,
     9
      ]
}
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;
