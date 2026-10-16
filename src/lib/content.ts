import { getCollection, type CollectionEntry } from 'astro:content';

type Name = 'posts' | 'projects' | 'talks';

export async function getPublished<N extends Name>(name: N): Promise<CollectionEntry<N>[]> {
  const entries = await getCollection(name, ({ data }) => data.publish);
  return entries.sort(
    (a, b) => (b.data.date ?? '').localeCompare(a.data.date ?? '') || a.id.localeCompare(b.id)
  );
}

const ordinal = (n: number) => {
  const v = n % 100;
  if (v >= 11 && v <= 13) return `${n}th`;
  return `${n}${['th', 'st', 'nd', 'rd'][n % 10] ?? 'th'}`;
};

// "2019-08-24" -> "Aug 24th, 2019"; non-ISO values (e.g. "2018") pass through
export function formatDate(date?: string) {
  const m = date?.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return date ?? '';
  const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][+m[2] - 1];
  return `${month} ${ordinal(+m[3])}, ${m[1]}`;
}
