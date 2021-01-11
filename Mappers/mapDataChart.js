const mapDataChart = (data) => {

    const dataString = `{${data.toLocaleString()}}`
    const finalData = JSON.parse(dataString)
    return finalData
}

module.exports = mapDataChart