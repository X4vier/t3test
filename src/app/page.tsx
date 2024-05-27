import { headers } from "next/headers";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

function duplicateList<T>(list: T[], times: number): T[] {
  const l: T[] = [];
  for (let i = 0; i < times; i++) {
    l.push(...list);
  }
  return l;
}

export default async function HomePage() {
  const images = duplicateList(
    await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    }),
    4,
  );

  console.log(images);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello poo!
    </main>
  );
}
