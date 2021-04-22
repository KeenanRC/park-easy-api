const expect = require('chai').expect
const request = require('request')

// Declare test category
describe('User Login', () => {
    const url = 'http://localhost:3000/login'
    // Declare test case
    it('returns success equal to true if login api works', (done) => {
        request.post(url, { form: { username: 'test', password: 'test' } }, (err, res, body) => {
            body = JSON.parse(body)
            expect(body.success).to.equal(true)
            done()
        })
    })
    it('returns success equal to false if login api works with incorrect credentials', (done) => {
        request.post(url, { form: { username: 'test', password: 'test1' } }, (err, res, body) => {
            body = JSON.parse(body)
            expect(body.success).to.equal(false)
            done()
        })
    })
})

describe('User Register', () => {
    const url = 'http://localhost:3000/register'
    it('returns success equal to false if register api works with duplicate user detection', (done) => {
        request.post(url, { form: { username: 'test', password: 'test' } }, (err, res, body) => {
            body = JSON.parse(body)
            expect(body.success).to.equal(false)
            done()
        })
    })
})

describe('Location Service', () => {
    const url = 'https://1b662c15.us-south.apigw.appdomain.cloud/park-easy-data/location'
    it('returns success equal to true if location service works', (done) => {
        request(url,(err, res, body) => {
            body = JSON.parse(body)
            expect(body.success).to.equal(true)
            done()
        })
    })
})