

const validation = (schema)=>{
    return(req,res,next)=>{
        // console.log(schema)

        const validateResult = schema.body.validate(req.body);
        console.log(validateResult);
    }
}

module.exports = {validation}