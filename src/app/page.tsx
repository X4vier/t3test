import Link from "next/link";

const mockUrls = duplicateList(
  [
    "https://utfs.io/f/d9e3d3cf-0547-4539-a814-3b80dcce4d39-1nviw6.png",
    "https://utfs.io/f/c31d28ec-7ff0-4011-a26f-c2bf124df24e-vl1num.png",
    "https://utfs.io/f/3fec323c-9912-44de-91c5-1f0258068a76-1k7wxn.png",
  ],
  5,
);

function duplicateList<T>(list: T[], times: number): T[] {
  const l: T[] = [];
  for (let i = 0; i < times; i++) {
    l.push(...list);
  }
  return l;
}

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello poo!
    </main>
  );
}
