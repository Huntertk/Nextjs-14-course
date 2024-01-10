import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
    try {
        connectToDb()
        const posts = await Post.find()
        return posts

    } catch (error) {
        console.log(error);       
        throw new Error("Failed to Fetch Post")
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb()
        const post = await Post.findOne({slug})
        return post

    } catch (error) {
        console.log(error);       
        throw new Error("Failed to Fetch Post")
    }
}


export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findOne({_id: id})
        return user

    } catch (error) {
        console.log(error);       
        throw new Error("Failed to Fetch user")
    }
}


export const getUsers = async (id) => {
    try {
        connectToDb()
        const users = await User.find({})
        return users

    } catch (error) {
        console.log(error);       
        throw new Error("Failed to Fetch users")
    }
}