const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment") 
const comicSchema = mongoose.Schema({
    title : {type:String, required: true, unique: true},
    img: {type:String, required:true},
    chapters: {type:[Object], required: true},
})

// autoIncrement.initialize(mongoose.connection)
// postSchema.plugin(autoIncrement.plugin, "post")

// const Productster = mongoose.model("Product", productSchema)
// module.exports = Productster
// const virtual = productSchema.virtual("id")
// virtual.get(()=>{
//     return this._id
// })
// productSchema.set('toJSON',{
//     virtuals: true,
//     versionKey: true,
//     transform: function (doc, ret){delete ret._id}
// })

exports.Comic = mongoose.model("Comic", comicSchema)