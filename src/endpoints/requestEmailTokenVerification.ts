import { requestAppApi } from '../requestApi';

interface RequestEmailTokenVerificationParams {
    login: string;
}

type RequestEmailTokenVerificationResult = any;

// Unused for now
export type RequestEmailTokenVerificationError = 'TWOFA_EMAIL_TOKEN_NOT_ENABLED' | 'invalid_authentication';

export const requestEmailTokenVerification = ({ login }: RequestEmailTokenVerificationParams) =>
    requestAppApi<RequestEmailTokenVerificationResult>({
        path: 'authentication/RequestEmailTokenVerification',
        payload: { login },
    });
