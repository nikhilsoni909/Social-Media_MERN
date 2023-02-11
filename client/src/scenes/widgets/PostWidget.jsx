import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostWidget from "./PostWidget";
const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);
    const getPosts = async () => {
        const response = await fetch("http://localhost:3001/posts", {
            method: "Get",
            headers: { Authorization: `Bearer ${token}`, }
        })
    }


};
export default PostsWidget;