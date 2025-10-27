import { PostModel } from "@/src/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd(); //diretório raiz do projeto
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json'); //caminho completo do arquivo JSON

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if(SIMULATE_WAIT_IN_MS <= 0) return;
    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }
  private async readFromDisk(): Promise<PostModel[]> { //lê o arquivo JSON do disco
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8'); //lê o conteúdo do arquivo como string
    const parsedJson  = JSON.parse(jsonContent); // analisa a string JSON para um objeto separado
    const { posts } = parsedJson; //extrai a propriedade posts do objeto analisado
    return posts;
  }
  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk(); //lê os posts do disco
    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id); //procura o post com o ID correspondente
    if (!post) {
      throw new Error(`Post with id ${id} not found`);

    }

    return post;
  }
}
export const postRepository : PostRepository = new JsonPostRepository();  //instância do repositório de posts

(async () => {
  const posts = await postRepository.findAll();
  posts.forEach(post=>{
    console.log(post.title);
  })
  console.log(posts);
}
)()


