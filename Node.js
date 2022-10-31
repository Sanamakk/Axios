// This would be the part of the node that would receive the data
app.post("/post_name", async (req, res) => {
    // Receiving a data
    let {nameEvent} = req.body 

    // After that it is necessary to pass this data to the database
});
