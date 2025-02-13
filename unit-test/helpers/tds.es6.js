/**
 * We don't have indexedDB for tds storage so we can
 * stub out the get and fallback functions
 */
const tdsStorage = require('../../shared/js/background/storage/tds.es6')
const tdsData = {
    tds: require('./../data/tds.json'),
    surrogates: require('./../data/surrogates.js').surrogates,
    ClickToLoadConfig: require('./../data/clickToLoadConfig.json'),
    config: {
        features: {
            referrer: {
                state: 'enabled',
                exceptions: require('./../data/fpExcludeLists.js').referrer.excludedReferrers
            },
            clickToPlay: {
                state: 'enabled'
            }
        },
        unprotectedTemporary: require('./../data/brokensites.js').brokenSites
    }
}

const stub = () => {
    spyOn(tdsStorage, 'getVersionParam').and.returnValue('')

    spyOn(tdsStorage, 'fallbackToDB')
        .and.callFake(key => Promise.resolve(tdsData[key]))

    spyOn(tdsStorage, 'getDataFromLocalDB')
        .and.callFake(key => Promise.resolve(tdsData[key]))

    spyOn(tdsStorage, 'getDataXHR')
        .and.callFake((list, etag, source) => Promise.resolve({ response: 200, data: tdsData[list] }))
}
module.exports = {
    stub
}
