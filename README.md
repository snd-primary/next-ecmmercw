## ハマったエラー

状況：以下のエラーが発生、pnpm buildが通らない

```
.next/types/app/products/[id]/page.ts:8:13
Type error: Type 'OmitWithTag<typeof import("C:/Users/sndwe/next-ecmmercw/src/app/products/[id]/page"), "default" | "metadata" | "config" | "generateStaticParams" | "revalidate" | "dynamic" | "dynamicParams" | ... 4 more ... | "generateMetadata", "">' does not satisfy the constraint '{ [x: string]: never; }'.
  Property 'generateMetaData' is incompatible with index signature.
    Type '({ params: { id }, }: ProductPageProps) => Promise<Metadata>' is not assignable to type 'never'.

   6 |
   7 | // Check that the entry is a valid entry
>  8 | checkFields<Diff<{
     |             ^
   9 |   default: Function
  10 |   config?: {}
  11 |   generateStaticParams?: Function
 ELIFECYCLE  Command failed with exit code 1.
```

generateMetaData プロパティの型 ({ params: { id }, }: ProductPageProps) => Promise<Metadata> は never 型と互換性がありません。これは、never 型が他のどの型も代入できない特殊な型であるためです。

stringとしたものがなんでnever型になるのだろうか？わからん。インデックスシグネチャの書き方が違うのだろうか。
