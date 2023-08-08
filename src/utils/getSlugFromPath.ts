export default function getSlugFromPath(path: string) {
  return path.split("/").at(-1)?.replace(".md", "");
}
