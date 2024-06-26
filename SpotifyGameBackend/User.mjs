export class User {
    static users = [];
    
    #name;
    #scores;
    
    getName() {
        return this.#name;
    }

    getScores() {
        return this.#scores.map((score) => score);
    }

    addScores(scores) {
        if(!User.scoresValid(scores))
            throw new Error("scores are not valid");
        scores.forEach((score) => {
            let currentArtists = this.#scores.map((score) => score.artist.id);
            let newArtist = score.artist.id;
            if(currentArtists.includes(newArtist)){
                let scoreToUpdate = this.#scores.find((score) => score.artist.id === newArtist)
                score.points.forEach((point) => scoreToUpdate.points.push(point));
            }
            else {
                this.#scores.push(score);
            }
        });
    }

    static scoresValid(scores) {
        scores.forEach((score) => {
            if(score.artist === null)
                return false;
            if(score.artist.name == null || score.artist.id === null)
                return false;
            if(score.points === null || score.points.length === 0)
                return false;
        })
        return true;
    }
    constructor(name, scores) {
        if(User.users.map((user) => user.getName()).includes(name))
            throw new Error("name already taken");
        this.#name = name;
        if(!User.scoresValid(scores))
            throw new Error("scores not in valid format");
        this.#scores = scores;
        User.users.push(this);
    }

}

