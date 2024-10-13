const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const recipeSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    ingredients:[
        {
            name:String,
            quantity:String
        }
    ],
    steps:[
        {
            number:Number,
            description:String
        }
    ],
    image:String,
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    likes:{
        type:Number,
        default:0
    },
    likeBy:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
})

const Recipe=model('Recipe',recipeSchema);

module.exports=Recipe