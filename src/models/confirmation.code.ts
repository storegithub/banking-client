export interface IConfirmationCode {
 
    success: boolean;
    message: string;
    code: string;
    validForSeconds: number;
}