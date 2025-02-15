export interface RestaurantMetaType {
  name: string;
  distance: number;
  menu: string;
  prices: string[];
  recommends: string[];
  imageSrcs: string[];
  comments: CommentType[];
}

export interface CommentType {
  profileImg: string;
  nickname: string;
  content: string;
}
