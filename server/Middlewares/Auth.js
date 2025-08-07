import  jwt  from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    try {
        // Debug: Log all headers to see what's being sent
        console.log("All headers:", req.headers);
        console.log("Authorization header:", req.headers.authorization);
        
        const authHeader = req.headers.authorization || req.headers.Authorization;
        
        // Also check for token in other common header formats
        const tokenFromHeader = req.headers.token || req.headers.Token;
        
        console.log("Authorization header:", authHeader);
        console.log("Token header:", tokenFromHeader);
        
        let token;
        
        if (authHeader && authHeader.startsWith('Bearer ')) {
            // Extract token from "Bearer <token>"
            token = authHeader.split(' ')[1];
        } else if (authHeader && authHeader.length > 10) {
            // Token sent directly in authorization header without "Bearer "
            token = authHeader;
        } else if (tokenFromHeader) {
            // Token sent directly in 'token' header
            token = tokenFromHeader;
        } else {
            console.log("No valid token found in any header format");
            return res.status(401).json({ 
                message: "No token provided or invalid format",
                debug: {
                    authHeader: authHeader,
                    tokenHeader: tokenFromHeader,
                    allHeaders: Object.keys(req.headers)
                }
            });
        }
        console.log("Extracted token:", token);
        console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);
        console.log("JWT_SECRET length:", process.env.JWT_SECRET?.length);
        
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.id){
            req.body.userId = decoded.id;
        }
        else{
            return res.status(401).json({ message: "Invalid token" });
        }
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(401).json({ message: "Invalid token" });
    }
}

export default userAuth;