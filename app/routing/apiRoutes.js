// LOAD DATA
const friendData = require("../data/friends");


// ROUTING
module.exports = (app) => {

    // API GET Requests
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    // API POST Requests
    app.post("/api/friends", (req, res) => {
        let userScore = req.body.scores;
        const scoresArr = [];
        let bestMatch = 0;


        for (var i = 0; i < friendData.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScore[j])))
            }
            scoresArr.push(scoreDiff);
        }

        // loop through ours scoresArr
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        // return the best match
        let soulMate = friendData[bestMatch];
        res.json(soulMate);
        friendData.push(req.body)

    });


    app.post("/api/clear", (req, res) => {
        // Empty out the arrays of data
        friendData.length = [];
        res.json({
            ok: true
        });
    });
};