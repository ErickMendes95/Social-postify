export class AuthenticatedUserDto {
  user: {
    sub: number;
    username: string;
    ia: number;
    ea: number;
  };
}
