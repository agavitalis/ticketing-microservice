import express from 'express'

const router = express.Router();

router.get('/api/users/currentUser', (req, res) => {
    res.send('I got here')
})


export { router as currentUserRouter }