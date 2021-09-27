import { data } from 'autoprefixer';
import { connectToDatabase } from 'utils/mongodb';
// const ObjectId = require('mongodb').ObjectId;
var mongodb = require('mongodb');

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        // case 'GET_ONE': {
        //     return getPost(req, res);
        // }

        case 'GET': {
            return getPosts(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}

async function getPost(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();

        // Deleting the post
        const res = await db.collection('company_list').findOne({
            _id: new mongodb.ObjectId(req.body.toString()),
        });

        // returning a message
        return res.json(...res);
    } catch (error) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function getPosts(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        if (req.query.id) {
            // Deleting the post
            const post = await db.collection('company_list').findOne({
                _id: new mongodb.ObjectId(req.query.id.toString()),
            });

            // returning a message
            return res.json({
                person: post
            });
        } else {
            // fetch the posts
            const posts = await db
                .collection('company_list')
                .find({})
                .toArray();
            // return the posts
            return res.json({
                message: JSON.parse(JSON.stringify(posts)),
                success: true,
            });
        }

    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function addPost(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        await db.collection('company_list').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Person added successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function updatePost(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        // update the published status of the post
        await db.collection('company_list').updateOne(
            {
                _id: new mongodb.ObjectId(req.req.body.id.toString()),
            },
            {
                $set: {...req.body}
            }
        );

        // return a message
        return res.json({
            message: 'Person updated successfully',
            success: true,
        });
    } catch (error) {

        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


async function deletePost(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();

        // Deleting the post
        await db.collection('company_list').deleteOne({
            _id: new mongodb.ObjectId(req.body.toString())
        });

        // returning a message
        return res.json({
            message: 'Person deleted successfully',
            success: true,
        });
    } catch (error) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}