const express = require('express');
const router = express.Router();
const axios = require('axios');
//const yup = require('yup');


/* 
    Flow of events:
    1. Receive request to /main URI
    2. Pass request to back-end web service
    3. Receive TSV response
    4. Translate response to JSON
    5. Pass JSON back to response with 200 code
    6. If error,pass 400 status code back in response
*/

// get all objects
// no parms
router.get('/', async (req, res) => {
    try {
        // make call to back-end api and get response
        let axiosResponse = await axios.get('https://dog.ceo/api/breeds/list/all')
        //console.log(axiosResponse.data)    // DEBUGGING

        // translate response to json
        
        /*
            DO STUFF HERE
        */


        // send response back to client
        res.body = axiosResponse.data
        res.json(res.body)
        return
    } catch (err) {
        // if error, catch error and return it in response
        // this is very basic error handling and should be improved
        console.log(err)
        res.status(400).json(err)
        return
    } 
});

module.exports = router;