import { getListPage } from "@/lib/contentParser";

export function getMDData<T>(path: string): T {
  const raw = getListPage(path);
  if (!raw) throw new Error(`Could not load ${path}`);
  return raw.frontmatter as T;
}
