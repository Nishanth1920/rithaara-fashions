import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { body, validationResult } from 'express-validator'
import nodemailer from 'nodemailer'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
})

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })
}

// Contact form endpoint
app.post(
  '/api/contact',
  limiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('phone').trim().notEmpty().withMessage('Phone number is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    try {
      // Validate input
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ 
          success: false,
          message: 'Validation failed',
          errors: errors.array() 
        })
      }

      const { name, email, phone, message } = req.body

      const transporter = createTransporter()

      // Email to owner
      const ownerMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #b8976c, #8a6d50); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .info-row { margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #b8976c; }
              .label { font-weight: bold; color: #8a6d50; }
              .value { margin-top: 5px; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>Rithaara Fashions</p>
              </div>
              <div class="content">
                <div class="info-row">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="info-row">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="info-row">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="info-row">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
                <div class="footer">
                  <p>This email was sent from the Rithaara Fashions contact form</p>
                  <p>Received on ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `
      }

      // Auto-reply email to customer
      const customerMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank You for Contacting Rithaara Fashions',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #b8976c, #8a6d50); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 40px; border-radius: 0 0 10px 10px; }
              .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
              .message { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .contact-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
              .btn { display: inline-block; padding: 12px 30px; background: #b8976c; color: white; text-decoration: none; border-radius: 5px; margin: 10px 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Rithaara Fashions</div>
                <p>Where Style Meets Elegance</p>
              </div>
              <div class="content">
                <h2 style="color: #8a6d50;">Thank You for Reaching Out!</h2>
                <div class="message">
                  <p>Dear ${name},</p>
                  <p>Thank you for contacting Rithaara Fashions. We have received your message and our team will get back to you within 24-48 hours.</p>
                  <p>We appreciate your interest in our exclusive fashion collections and look forward to assisting you.</p>
                </div>
                <div class="contact-info">
                  <h3 style="color: #8a6d50;">In the meantime, you can:</h3>
                  <ul style="color: #666;">
                    <li>Explore our latest collections on Instagram</li>
                    <li>Chat with us directly on WhatsApp for immediate assistance</li>
                    <li>Visit our store in Madurai</li>
                  </ul>
                  <div style="text-align: center; margin-top: 20px;">
                    <a href="https://www.instagram.com/rithaara_fashions/" class="btn">Visit Instagram</a>
                    <a href="https://wa.me/919876543210" class="btn">WhatsApp Us</a>
                  </div>
                </div>
                <div class="footer">
                  <p><strong>Rithaara Fashions</strong></p>
                  <p>Madurai, Tamil Nadu, India</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Email: info@rithaarafashions.com</p>
                  <p style="margin-top: 20px;">© ${new Date().getFullYear()} Rithaara Fashions. All rights reserved.</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `
      }

      // Send both emails
      await transporter.sendMail(ownerMailOptions)
      await transporter.sendMail(customerMailOptions)

      res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully!'
      })

    } catch (error) {
      console.error('Contact form error:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.'
      })
    }
  }
)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`)
  console.log(`🌐 API endpoint: http://localhost:${PORT}/api`)
})
