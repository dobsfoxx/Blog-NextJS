import { postRepository } from "@/src/repositories/post/json-post-repository"
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic());
  // cache do react para otimizar chamadas repetidas
  // Lógica para buscar todos os posts públicos
export const findPostBySlugCached = cache(async (slug: string) => {
    const post = await postRepository.findBySlug(slug).catch(()=> undefined);

    if(!post) notFound();

    return post;
  });

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id));
