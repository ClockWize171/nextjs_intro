const handler = async (req, res) => {
    res.status(200).json({ name: "Home API Route" })
}

export default handler