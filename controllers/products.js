const Product = require('../model/productSchema')
const getAllProducts = async(req,res) =>{
    const myData = await Product.find({})
    res.status(200).json({myData});
}

const getAllIntensity = async(req,res) =>{
        const min = parseInt(req.query.min);
        const max = parseInt(req.query.max);  
        if(isNaN(min) && isNaN(max)){
            try {
                var documents = await Product.find({}).select("intensity");
                res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
        else{
            try {
                documents = await Product.find({
                intensity: {
                    $gte: min,
                    $lte: max
                }
            });
            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
}

const getAllLikelihood = async(req,res) => {
        const min = parseInt(req.query.min);
        const max = parseInt(req.query.max); 
        if(isNaN(min) && isNaN(max)){
            try {
                var documents = await Product.find({}).select("likelihood");
                res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
        else{
            try {
                documents = await Product.find({
                likelihood: {
                    $gte: min,
                    $lte: max
                }
            });
            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
} 

const getAllRelevance = async(req,res) => {
        const min = parseInt(req.query.min);
        const max = parseInt(req.query.max);  
        if(isNaN(min) && isNaN(max)){
            try {
                var documents = await Product.find({}).select("relevance");
                res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
        else{
            try {
                documents = await Product.find({
                relevance: {
                    $gte: min,
                    $lte: max
                }
            })
            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
} 

const getAllYear = async (req, res) => {
    const start = parseInt(req.query.start);
    const end = parseInt(req.query.end);

    try {
        let documents;

        if (isNaN(start) && isNaN(end)) {
            // No start or end provided, return all documents
            documents = await Product.find({}).select("start_year end_year");
        } else {
            // Only start provided
            if (!isNaN(start) && isNaN(end)) {
                documents = await Product.find({
                    start_year: { $gte: start }
                });
            }
            // Only end provided
            else if (isNaN(start) && !isNaN(end)) {
                documents = await Product.find({
                    end_year: { $lte: end }
                });
            }
            // Both start and end provided
            else {
                documents = await Product.find({
                    $or: [
                        { start_year: { $gte: start } },
                        { end_year: { $lte: end } }
                    ]
                });
            }
        }

        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllCountry = async(req,res) => {
        if(req.query.country == null){
        try {
                var documents = await Product.find({}).select("country");
                res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
        else{
            try {
                documents = await Product.find({country: req.query.country});
            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
}

const getAllTopics = async(req,res) => {
    if(req.query.topic == null){
        try {
                var documents = await Product.find({}).select("topic");
                res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
        else{
            try {
                documents = await Product.find({topic: req.query.topic});
            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
}

const getAllRegion = async(req,res) => {
    if(req.query.region == null){
        try {
                var documents = await Product.find({}).select("region");
                res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
        else{
            try {
                documents = await Product.find({region: req.query.region});
                res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
        }
}


module.exports = {
    getAllProducts,
    getAllIntensity,
    getAllLikelihood,
    getAllRelevance,
    getAllYear,
    getAllCountry,
    getAllTopics,
    getAllRegion,
};
 
