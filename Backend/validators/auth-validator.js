const {z} = require('zod');

const signupSchema = z.object({
    username: z.string({required_error: "Name is reqd"}).trim().min(3, {message: "Name atleast 3 chars"}),
    email: z.string({required_error: "Email is reqd"}).trim().email({message: "Invalid Email"}).min(3, {message: "Name atleast 3 chars"}),
    phone: z.string({required_error: "Phone is reqd"}).trim().min(10, {message: "Phone atleast 10 chars"}),
    password: z.string({required_error: "Password is reqd"}).min(6, {message: "Passowrd atleast 6 chars"}),
})

module.exports = signupSchema;