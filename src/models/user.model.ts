export interface User {
  role: string;
  name: string;
  email: string;
  token: string;
  confirmationToken: string;
  isConfirmedEmail: boolean;
}
