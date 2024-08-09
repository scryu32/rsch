import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function CheckLogin(req, res) {
    try {
        let session = await getServerSession(req, res, authOptions);
        console.log(session);

        if (session) {
            res.status(200).json({ session });
        } else {
            res.status(401).json({ message: 'Not authenticated' });
        }
    } catch (error) {
        console.error('Error checking login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}