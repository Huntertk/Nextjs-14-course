import { Post } from "./models";
import { connectToDb } from "./utils";
import {revalidatePath} from 'next/cache'

export const addPost = async (formData) => {
    "use server"
    const {title, desc, slug, userId} = Object.fromEntries(formData)
    // console.log(formData);
    console.log({title, desc, slug, userId});

    try {
        connectToDb()
        // const newPost = await Post.create({title, desc, slug, userId})
        const newPost = new Post({title, desc, slug, userId})
        await newPost.save();
        revalidatePath("/blog")
        console.log(newPost);
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (formData) => {
    "use server"
    const {id} = Object.fromEntries(formData)
    // console.log(formData);

    try {
        connectToDb()
        await Post.findByIdAndDelete(id)
        revalidatePath("/blog")
        console.log("Deleted from db");
    } catch (error) {
        console.log(error);
    }
}