export interface UserDetailsModel {
  id: string;
  name: string;
  username: string;
  email: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  }
}
