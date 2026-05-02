import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: Integrate email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'CCOI SERVICES <noreply@ccoi-services.com>',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New message from ${name} — ${company}`,
    //   html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Company:</b> ${company}</p><p><b>Message:</b> ${message}</p>`
    // })

    console.log('Contact form submission:', { name, email, company, message })

    return NextResponse.json({ success: true, message: 'Message received successfully' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
