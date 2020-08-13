// Mood Provider

let moods = []

export const getMoods = () => {
    return fetch(`http://localhost:3000/moods`)
        .then(moods => moods.json())
        .then(parsedMoods => {
            moods = parsedMoods
        })
}


export const useMoods = () => {
    return moods.slice()
} 

