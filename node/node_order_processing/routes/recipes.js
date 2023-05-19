var recipes = require('../recipes.json');
var router = require('express').Router();


router.get('/', (req, res) => {
    const {context} = req;
    let results = [];
    if (context.searchTerm) {
        results = recipes.filter(({name}) => name.match(context.search))
    } else {
        results = recipes
    }
    results = results.slice(context.skip, (context.skip + context.limit))
    res.json({
        page: context.page,
        limit: context.limit,
        skip: context.skip,
        search: context.searchTerm,
        data: results
    });
});

module.exports = router;

