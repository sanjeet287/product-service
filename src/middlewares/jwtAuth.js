import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    //console.log("Token: "+token);
    
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
};

export const isVendorOrSeller = (req, res, next) => {
    console.log("User Role: "+req.user.role);
    
    if (req.user.role !== 'Vendor' && req.user.role !== 'Seller') {
        return res.status(403).json({ message: 'Access denied. Only vendors or sellers can perform this action' });
    }
    next();
};
