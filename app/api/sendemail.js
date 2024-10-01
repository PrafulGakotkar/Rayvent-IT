import nodemailer from 'nodemailer';

export async function POST(req) {
    const { username, company, email, regards, country, phone, message } = await req.json();

    try {
        // Set up nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address from environment variable
                pass: process.env.EMAIL_PASS, // Your Gmail password or app password from environment variable
            },
        });

        // Email options
        const mailOptions = {
            from: email, // The email of the sender
            to: process.env.EMAIL_USER, // Your email address
            subject: 'Contact Form Submission',
            text: `Name: ${username}\nCompany: ${company}\nEmail: ${email}\nRegards: ${regards}\nCountry: ${country}\nPhone: ${phone}\nMessage: ${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Respond with success message
        return new Response(JSON.stringify({ status: 'success', message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ status: 'error', message: 'Error sending email. Please try again later.' }), { status: 500 });
    }
}
