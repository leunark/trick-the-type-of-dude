import express from 'express';
import Comments from './comments';

// Initialize express router
const router = express.Router();

// Api endpoints

// Return a list of comments
router.get('/', (req, res) => {
    Comments.find(function(err, comments) {
        if (err) {
            res.send("Error: " + err);
        } else {
            res.send("All Comments: " + comments);
        }
    });
});

// Return a specific comment
router.get('/:id', (req, res) => {
    Comments.findOne({id: req.params.id}, function(err, comment) {
        if (err) {
            res.send("Error: " + err);
        } else {
            res.send("Comment with id "+ req.params.id +": "+comment);
        }
    });
});

// Create a new comment
router.post('/', (req, res) => {
    
});

// Update a specific comment
router.put('/{id}', (req, res) => {
    
});

// Delete all cars
router.delete('/', (req, res) => {
    
});

// Delete a specific comment
router.post('/{id}', (req, res) => {
    
});

// Export api routes
export { router };