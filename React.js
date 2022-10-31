// Import lib "axios"
const axios = require('axios')

// Creating example of data to be passed and setting as state
const [nameEvent, setName] = useState(""); 


// Asynchronous function to pass data to the backend
async function postName(e) {
    // Prevent browser reload when submitting form (a great component)
    e.preventDefault()

    // I used a try/catch to make the connection
    try{
        // Sending data to this url
        await axios.post("http://localhost:4000/post_name", {
            // Data to be sent
            nameEvent,
        });
    }
    // In case of error
    catch(error){
        console.log(error)
    }
}

// This would be the input that would pass the data
/**
 * Notice that when changing the element (onchange), it will get the input value
 */
<input type="text" onChange={(e) => setName(e.target.value)} />
