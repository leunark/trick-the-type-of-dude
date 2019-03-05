import mongoose from 'mongoose';

const uri = 'mongodb://mongo:27017/';

// Define connection configuration
const options = {
    user: 'root',
    pass: 'root',
    dbName: 'db'
};

// Establish connection to MongoDB
mongoose.connect(uri, options, (err) => {
    if(err) {
        console.log(err.message);
    } else {
        console.log("MongoDB connection has been successfully established!");
    }
});

// Define a Schema for a comment regarding to Youtube API
const commentsSchema = new mongoose.Schema({
    kind: String,
    etag: String,
    id: String,
    snippet: {
        authorDisplayName: String,
        authorProfileImageUrl: String,
        authorChannelUrl: String,
        authorChannelId: {
            value: String
        },
        channelId: String,
        videoId: String,
        textDisplay: String,
        textOriginal: String,
        parentId: String,
        canRate: Boolean,
        viewerRating: String,
        likeCount: Number,
        moderationStatus: String,
        publishedAt: Date,
        updatedAt: Date
    }
});

// Convert commentSchema to a Model
const Comments = mongoose.model('Comments', commentsSchema, 'comments');

export default Comments;

