import client from "./Bari";

export const getPosts = async (slug) => {
    try {
        const { data } = await client(`/post/posts`);
        return data
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return response.data;
        }
        return { error: error.message || error };
    }
};