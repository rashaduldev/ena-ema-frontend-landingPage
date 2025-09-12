import { getListPage } from "@/lib/contentParser";

export function getMDData<T>(path: string): T {
  const raw = getListPage(path);
  return raw.frontmatter as T;
}
