const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const sinon = require('sinon');
const middleware = require('../middleware');
const {Request, Response} = require('./mock');

chai.use(chaiHttp);

describe('express_pagination_middleware', () => {
    let req, res, next;
    beforeEach(() => {
        req = new Request({
            url: '/recipes',
            query: {}
        });
        res = new Response();
        next = sinon.stub()
    });

    it('Should have the context object in the request', () => {
        middleware(req, res, next);
        req.should.have.property('context');
    });

    it('Should have property id, timestamp, path in trace object', () => {
        middleware(req, res, next);
        req.context.should.have.property('page');
        req.context.should.have.property('limit');
        req.context.should.have.property('skip');
        req.context.should.have.property('search');
        req.context.should.have.property('searchTerm');
    });

    it('Should have the default page, limit and skip property values', () => {
        middleware(req, res, next);
        req.context.page.should.equal(1);
        req.context.skip.should.equal(0);
        req.context.limit.should.equal(3);
    });

    it('Should set the correct skip value based on page and limit', () => {
        req.query.page = 6;
        req.query.limit = 25;
        middleware(req, res, next);
        req.context.page.should.equal(6);
        req.context.skip.should.equal(125);
        req.context.limit.should.equal(25);
    });


    it('Should have a valid search property in context object', () => {
        const term = [...Array(10)].map(_ => (Math.random() * 36 | 0).toString(36)).join``;
        req.query.q = term;
        middleware(req, res, next);
        req.context.searchTerm.should.equal(term);
    })

    it('Should respond with the correct data - 1 ', (done) => {
        chai.request(server)
            .get('/recipes?q=c&page=1&limit=4')
            .then(({body}) => {
                body.page.should.equal(1);
                body.skip.should.equal(0);
                body.limit.should.equal(4);
                body.search.should.equal('c');
                body.data.length.should.equal(4);
                body.data.forEach(d => {
                    switch (d.id) {
                        case 1:
                            d.name.should.equal('Crock Pot Roast')
                            break;

                        case 3:
                            d.name.should.equal('Curried Lentils and Rice');
                            break;

                        case 5:
                            d.name.should.equal('Cranberry and Apple Stuffed Acorn Squash Recipe');
                            break;

                        case 6:
                            d.name.should.equal("Mic's Yorkshire Puds")
                            break;
                    }
                })
                done();
            })
    });

    it('Should respond with the correct data - 2', (done) => {
        chai.request(server)
            .get('/recipes?page=3&limit=4')
            .then(({body}) => {
                body.data.length.should.equal(1);
                body.data[0].name.should.equal('Curried chicken salad');
                done();
            })
    });
});
