module.exports = {
    database: {
        mongoURL: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://127.0.0.1:27017/ANGULARdb',
        use: 'mongodb' // specify db =>  mongodb , mysql
    },

 
}