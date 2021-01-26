const mapTitleChart = (fileNames) => { 

    return fileNames.map(item => {
        item = item.replace('files/','')
        item = item.replace('.xlsx','')

        return item
    })
}

module.exports = mapTitleChart