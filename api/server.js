import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.text());

app.post('/api/server', async (req, res) => {
    const question = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New question from the shool-jobs.vercel.app',
            text: question
        };
        
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email was send!');
    } catch (error) {
        console.error('Error while sending email:', error);
        res.status(500).send('Can not send this email');
    }
});

if (process.env.VERCEL !== '1') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

export default app;