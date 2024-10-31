import { Schema, model } from 'mongoose';

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
    category:{
        type:String,
        enum:['breakfast','lunch','dinner','snack','dessert']
    },
    nutrition:{
        calories:{
            type:Number,
            default:0
        },
        fat:String,
        carbohydrates:String,
        protein:String
    },
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

const Recipe = model('Recipe', recipeSchema);
export {
    Recipe
}