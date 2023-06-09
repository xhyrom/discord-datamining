import { ArticleType, Articles } from "./modules/Articles.ts";

const s = await new Articles(ArticleType.Normal).articles();
console.log(s);

export {};
