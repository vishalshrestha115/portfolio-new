import { NextResponse } from 'next/server';
// @ts-ignore
import { send } from '@emailjs/nodejs';


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message, social } = body;

        const result = await send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            {
                from_name: name,
                from_email: email,
                message,
                social: social || 'N/A',
            },
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY!,
                privateKey: process.env.EMAILJS_PRIVATE_KEY!,
            }
        );

        return NextResponse.json({ message: 'Email sent successfully', result });
    } catch (error) {
        console.error('EmailJS error:', error);
        return NextResponse.json(
            { message: 'Failed to send email', error },
            { status: 500 }
        );
    }
}

export function GET() {
    return NextResponse.json({ message: 'Only POST requests allowed' }, { status: 405 });
}
