import express from 'express';
import Comments from './comments';

// Initialize express router
const router = express.Router();

// Api endpoints

// Return a list of comments
router.get('/', (req, res) => {
    res.send("Return a list of comments");
});

// Return a specific comment
router.get('/:id', (req, res) => {
    res.send("Return a specific comment with id " + req.params.id);
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