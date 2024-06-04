export interface IUser {
  _id: string;
  username: string;
  role: string;
}

export interface Post {
  _id: string;
  title: string;
  content: string;
  author: IUser;
  createdAt: string;
}
