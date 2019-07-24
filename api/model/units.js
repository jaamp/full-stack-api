const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  kind: {
    type: String, enum: ['seat', 'desk', 'small office', 'large office', 'floor'],
    required: [true, 'Unit kind is required'] 
  },
  floor: {
    type: Number,
    required: [true, 'floor number is required'] 
  },
  special_monthly_offer: {
    type: Number,
  },
    company: [{
        name: {
            type: String,
            required: [true, 'name is required']},
        contact_email:{ 
            type: String,
            required: [true, 'email required'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email is not valid']
        },
        employee: [{
            first_name: {
                type: String,
                required: [true, 'first name is required']},
            last_name: {
                type: String,
                required: [true, 'last name is required']},
            preferred_name: String,
            position: String,
            birthdate: String,
            email: {
                type: String,
                required: [true, 'email required'],
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email is not valid']
            }
        }],
    }]
}, 


{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Units', schema)
