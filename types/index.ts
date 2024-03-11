export interface INavigationItem {
  title: string;
  to: string;
}

export interface IContent {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  image: string
}