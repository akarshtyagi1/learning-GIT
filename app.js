require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const blogs = require('./blogs');
const app = express();

mongoose.connect("mongodb+srv://root:admin@mysampleproject.qvmgg.mongodb.net/blogs?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
        console.log("Database Connected")
    );


const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connection Established Successfully"));

const newBlog = new blogs({
    title: "My second Blog",
    author: "Akarsh Tyagi",
    blog: " There is nothing yet to add to the blog",
    date: Date.now()
});

async function getData() {
    const data = await db.collection('blog').find({});
    console.log(data);
    console.log("Data fetched Successfully");
};

async function insertData() {
    await db.collection('blogs').insertOne(newBlog).then(
        () => {
            console.log("Data added successfully");
        }
    ).catch(
        () => {
            console.log("failed");
        }
    )
}

async function getData() {
    await blog.find({}, (err, blog) => {
        if (err) return console.warn(err);
        console.log(blog);
    });
};

getData();
// insertData();

app.listen(3001, () => console.log("Server is running on port:3001"));