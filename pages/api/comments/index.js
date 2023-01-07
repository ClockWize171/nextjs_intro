import { comments } from "../../../data/comments";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
    const session = await getSession({ req })
    if (!session) {
        res.status(401).json({ error: 'Unauthenicated user!' })
    }
    if (req.method === 'GET') {
        res.status(200).json(comments)
    } else if (req.method === 'POST') {
        const comment = req.body.comment
        const newComment = {
            id: Date.now(),
            text: comment
        }
        comments.push(newComment)
        res.status(201).json(newComment)
    }
}

export default handler