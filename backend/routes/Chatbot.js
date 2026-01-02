import express from 'express'
import OpenAI from 'openai'


const router = express.Router()
const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY })


router.post('/', async (req, res) => {
const completion = await openai.chat.completions.create({
model: 'gpt-3.5-turbo',
messages: [{ role:'system', content:'You are Bujji, a friendly developer' },{ role:'user', content:req.body.msg }]
})
res.json({ reply: completion.choices[0].message.content })
})


export default router