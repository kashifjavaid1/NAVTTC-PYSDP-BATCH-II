const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();

// Ensure uploads folder exists
const uploadFolder = 'uploads';
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
}

// Storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

// File filter for custom types (images and PDFs)
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Accept
    } else {
        cb(new Error('Only JPG, PNG, and PDF files are allowed!'), false); // Reject
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
}).single('user_file'); // change to .array() or .fields() for multiple files

// Upload route
app.post('/upload', (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ message: err.message });
        } else if (err) {
            return res.status(400).json({ message: err.message });
        }

        res.send('File uploaded successfully!');
    });
});

// Start server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});