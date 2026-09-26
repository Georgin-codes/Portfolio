import { rateLimit } from 'express-rate-limit'

export const limiter = rateLimit({
	windowMs: 24*60 * 60 * 1000, 
	limit: 2, 
	standardHeaders: 'draft-8', 
	legacyHeaders: false, 
	ipv6Subnet: 64, 
    handler: (req, res)=>{
        console.log("Rate limit reached")
        console.log("IP:", req.ip)
        res.status(429).json({message: "Too many form submission, try again later"})
    }
})