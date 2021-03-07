import express from 'express'

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    console.log('I got here')
})


export { router as signinRouter }