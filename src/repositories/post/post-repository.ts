import { PostModel } from "@/src/models/post/post-model";

export interface PostRepository { //interface do repositório de posts
  findAllPublic(): Promise<PostModel[]>;
  findById(id:string) : Promise<PostModel>; //método para encontrar um post pelo ID
  findBySlug(slug:string) : Promise<PostModel>
}


