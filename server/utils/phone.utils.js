const dataPath = './../../data/phones.json'


const getPhoneData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)
}