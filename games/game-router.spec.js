const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

describe('server "/"', () => {

    it('should return { hello:"world" }', () => {
        const expected = { hello: 'world' };
        return request(server)
            .get('/')
            .then(res => {
              expect(res.body).toEqual(expected);
            });
    });

    it('should return 200', () => {
        return request(server)
            .get('/')
            .expect(200);
    });

    it('should return JSON using done callback', done => {
        request(server)
            .get('/')
            .then(res => {
                expect(res.type).toBe('application/json');
                done();
            })
    });
    
})

describe('POST /games', () => {
    it('should return status 201 if successful', () => {
        return request(server)
            .post('/games')
            .send({
                title: 'Mario Cart',
                genre: 'Racing',
                releaseYear: 1992
            })
            .then(res => {
                expect(res.status).toBe(201)
            })
    })
    it('should fail with code 422 when information is missing', () => {
        return request(server)
            .post('/games')
            .send({
                genre: 'Arcade',
                releaseYear: 1990
            })
            .then(res => {
                expect(res.status).toBe(422)
            })
    })
})

describe('GET /games', () => {
    it('should return status 500 if game could not be found', () => {
        return request(server)
            .get('/games/999')
            .then(res => {
                expect(res.status).toBe(500)
            })
    });

    it('should return JSON when games are requested', done => {
        request(server)
            .get('/games')
            .then(res => {
                expect(res.type).toBe('application/json');
                done();
            })
    });

    it('should return an array', () => {
        request(server)
            .get('/games')
            .then(res => {
                expect(Array.isArray(res.body)).toBeTruthy
            })
    })
})

