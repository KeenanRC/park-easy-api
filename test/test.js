const expect = require('chai').expect
const request = require('request')
/*
describe('User Register', () => {
    const url = 'http://localhost:3001/register'
    it('returns success equal to false if duplicate username provided', (done) => {
        request.post(url, { form: { username: 'test', password: 'test' } }, (err, res, body) => {
            body = JSON.parse(body)
            expect(body.success).to.equal(false)
            done()
        })
    })
    it('returns success equal to false if username not provided', (done) => {
        request.post(url, {}, (err, res, body) => {
            body = JSON.parse(body)
            expect(body.success).to.equal(false)
            done()
        })
    })
    it('returns success equal to false if password not provided', (done) => {
        request.post(url, { form: { username: 'test' } }, (err, res, body) => {
            body = JSON.parse(body)
            expect(body.success).to.equal(false)
            done()
        })
    })
})
*/
describe('Setting items', () => {
    const url = 'http://localhost:3001/settingItem'
    it('returns success equal to true if returns setting items', (done) => {
        request.get(url, (err, res, body) => {
            body = JSON.parse(body)
            expect(body.success).to.equal(true)
            done()
        })
    })
})

/*
describe('This test should fail', () => {
   
    it('Fail?!', () => {
            expect(1).to.equal(1)
          
    })
})


*/