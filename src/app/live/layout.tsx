import type { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://emenme.netlify.app/'),
    title: 'Our systems have detected unusual traffic from your computer network',
    description: 'Verify your account to continue',
};

export default function LiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

