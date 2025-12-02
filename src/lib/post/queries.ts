import { postRepository } from "@/src/repositories/post/json-post-repository"
import { cache } from "react";

export const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublic());
  // cache do react para otimizar chamadas repetidas
  // Lógica para buscar todos os posts públicos

