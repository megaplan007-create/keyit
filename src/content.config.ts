import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// src/content/blog/ 안의 Markdown / MDX 파일을 불러옵니다.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),

			// ── SEO / 노출 최적화 필드 ──────────────────────────
			category: z.enum(['life', 'health', 'policy']),
			tags: z.array(z.string()).default([]),
			// 검색 타겟 키워드 (meta keywords + 내부 활용)
			keywords: z.array(z.string()).default([]),
			author: z.string().default('전일용'),

			// 신뢰도(E-E-A-T) — 공식 출처. 건강/정책 글은 반드시 채우세요.
			sources: z
				.array(
					z.object({
						label: z.string(),
						url: z.string().url(),
					}),
				)
				.default([]),

			// FAQ 구조화 데이터 → 구글 리치결과 + AI(GPT/제미니) 인용 최적화
			faq: z
				.array(
					z.object({
						q: z.string(),
						a: z.string(),
					}),
				)
				.default([]),

			// 초안/비공개 글은 true 로 두면 빌드에서 제외됩니다.
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
