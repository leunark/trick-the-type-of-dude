import express from 'express';
import Comment from './comments';

// Initialize express router
const router = express.Router();

// Api endpoints

// Return a list of comments
router.get('/', (req, res) => {
    Comment.find(function(err, comments) {
        if (err) {
            res.send(err);
        } else {
            res.send(comments);
        }
    });
});

// Return a specific comment
router.get('/:id', (req, res) => {
    Comment.findOne({id: req.params.id}, function(err, comment) {
        if (err) {
            res.send(err);
        } else {
            res.send(comment);
        }
    });
});

// Default express.json() options are enough: ref. https://expressjs.com/en/4x/api.html

// Create a new comment
router.post('/', (req, res) => {
    const comment = new Comment(req.body);
    comment.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});

// Update a specific comment
router.put('/:id', (req, res) => {
    const data = req.params.body;
    Comment.findOneAndUpdate({id:req.params.id}, data, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});

// Delete all cars
router.delete('/', (req, res) => {
    Comment.deleteMany({}, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});

// Delete a specific comment
router.delete('/:id', (req, res) => {
    Comment.findOneAndDelete({id:req.params.id}, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});

// Export api routes
export { router };