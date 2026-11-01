import { getCollection, type CollectionEntry } from 'astro:content';

type BlogData = CollectionEntry<'blog'>['data'];

// 한국 시간 기준 오프셋(UTC+9).
// 프론트매터의 pubDate(예: 2026-11-05)는 UTC 자정으로 해석되지만,
// 우리는 한국 시간 2026-11-05 00시부터 공개되기를 기대합니다.
// 그래서 현재 시각에 9시간을 더해 비교합니다.
const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

/**
 * 글을 지금 공개해도 되는지 판단합니다.
 *
 * - draft: true 인 글은 공개하지 않습니다.
 * - pubDate 가 아직 오지 않은 글(예약 발행)도 공개하지 않습니다.
 *
 * 정적 사이트라 "지금"은 빌드 시점을 뜻합니다.
 * 예약한 날짜에 글이 저절로 올라오게 하려면 매일 한 번 다시 빌드해야 하며,
 * 이는 .github/workflows/deploy-ftps.yml 의 schedule 이 담당합니다.
 */
export function isPublished(data: BlogData): boolean {
	if (data.draft) return false;
	return data.pubDate.getTime() <= Date.now() + KST_OFFSET_MS;
}

/** 공개 대상 글을 최신순으로 돌려줍니다. */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog', ({ data }) => isPublished(data));
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
