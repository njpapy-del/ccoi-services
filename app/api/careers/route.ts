import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_EMAIL || 'ccoiservice28@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, position, linkedin, motivation } = body

    if (!name || !email || !position || !motivation) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }

    // Notification email to CCOI SERVICES
    await resend.emails.send({
      from: 'CCOI SERVICES <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `[CANDIDATURE] ${position} — ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#050508;color:#f1f5f9;padding:32px;border-radius:16px;border:1px solid rgba(0,180,255,0.2)">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:32px">
            <div style="width:40px;height:40px;background:linear-gradient(135deg,#00B4FF,#7C3AED);border-radius:10px;display:flex;align-items:center;justify-content:center">
              <span style="color:white;font-weight:900;font-size:14px">CC</span>
            </div>
            <div>
              <div style="font-weight:900;font-size:18px;letter-spacing:0.1em">CCOI SERVICES</div>
              <div style="font-size:11px;color:#64748b">Nouvelle candidature reçue</div>
            </div>
          </div>

          <div style="background:rgba(0,180,255,0.08);border:1px solid rgba(0,180,255,0.25);border-radius:10px;padding:12px 18px;margin-bottom:24px;font-size:15px;font-weight:700;color:#00B4FF">
            Poste visé : ${position}
          </div>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr>
              <td style="padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;width:110px">Nom</td>
              <td style="padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">Email</td>
              <td style="padding:10px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);color:#00B4FF">${email}</td>
            </tr>
            ${phone ? `<tr>
              <td style="padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">Téléphone</td>
              <td style="padding:10px 14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">${phone}</td>
            </tr>` : ''}
            ${linkedin ? `<tr>
              <td style="padding:10px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">LinkedIn</td>
              <td style="padding:10px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06)"><a href="${linkedin}" style="color:#00B4FF;text-decoration:none">${linkedin}</a></td>
            </tr>` : ''}
          </table>

          <div style="background:rgba(124,58,237,0.06);border:1px solid rgba(124,58,237,0.2);border-radius:12px;padding:20px;margin-bottom:24px">
            <div style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px">Lettre de motivation</div>
            <div style="line-height:1.8;color:#e2e8f0;white-space:pre-wrap">${motivation}</div>
          </div>

          <div style="text-align:center;color:#475569;font-size:12px">
            Répondez directement à cet email pour contacter le candidat.<br/>
            CCOI SERVICES · Rue Omar Kaddeh, Montplaisir 1073, Tunis · MF 1867691/N
          </div>
        </div>
      `,
    })

    // Auto-reply to the candidate
    await resend.emails.send({
      from: 'CCOI SERVICES <onboarding@resend.dev>',
      to: email,
      subject: `Candidature reçue — ${position} | CCOI SERVICES`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#050508;color:#f1f5f9;padding:32px;border-radius:16px;border:1px solid rgba(0,180,255,0.2)">
          <div style="text-align:center;margin-bottom:32px">
            <div style="display:inline-flex;align-items:center;gap:12px;padding:12px 20px;background:rgba(0,180,255,0.08);border:1px solid rgba(0,180,255,0.2);border-radius:50px">
              <div style="width:32px;height:32px;background:linear-gradient(135deg,#00B4FF,#7C3AED);border-radius:8px;display:inline-flex;align-items:center;justify-content:center">
                <span style="color:white;font-weight:900;font-size:12px">CC</span>
              </div>
              <span style="font-weight:900;letter-spacing:0.15em;font-size:16px">CCOI SERVICES</span>
            </div>
          </div>
          <h2 style="text-align:center;font-size:22px;font-weight:900;margin-bottom:8px">Candidature bien reçue, ${name} !</h2>
          <p style="text-align:center;color:#94a3b8;margin-bottom:28px">
            Merci pour votre intérêt pour le poste de <strong style="color:#00B4FF">${position}</strong>.<br/>
            Notre équipe RH étudiera votre profil et vous répondra sous <strong style="color:#00B4FF">5 jours ouvrés</strong>.
          </p>
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:24px">
            <div style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px">Récapitulatif</div>
            <div style="font-size:14px;line-height:2;color:#cbd5e1">
              <strong>Poste :</strong> ${position}<br/>
              <strong>Email :</strong> ${email}<br/>
              ${phone ? `<strong>Téléphone :</strong> ${phone}<br/>` : ''}
            </div>
          </div>
          <div style="background:linear-gradient(135deg,rgba(0,180,255,0.08),rgba(124,58,237,0.08));border:1px solid rgba(0,180,255,0.15);border-radius:12px;padding:20px;margin-bottom:28px">
            <div style="font-weight:700;margin-bottom:10px;color:#e2e8f0">Nous contacter</div>
            <div style="color:#94a3b8;font-size:14px;line-height:2">
              📞 <a href="https://wa.me/21626089553" style="color:#00B4FF;text-decoration:none">+216 26 089 553</a><br/>
              📧 <a href="mailto:ccoiservice28@gmail.com" style="color:#00B4FF;text-decoration:none">ccoiservice28@gmail.com</a><br/>
              📍 Rue Omar Kaddeh, Montplaisir 1073, Tunis
            </div>
          </div>
          <div style="text-align:center;color:#475569;font-size:11px">
            CCOI SERVICES · Matricule Fiscale 1867691/N<br/>
            Cet email est envoyé automatiquement suite à votre candidature.
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Careers form error:', err)
    return NextResponse.json({ error: 'Erreur interne. Veuillez réessayer.' }, { status: 500 })
  }
}
