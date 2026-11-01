// 글 안에 들어 있는 인라인 SVG 도식을 PNG로 뽑아 눈으로 검수하기 위한 스크립트.
// 배포물에는 영향을 주지 않습니다. 결과물은 .figure-preview/ 에 쌓입니다.
import { readFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const SRC = 'src/content/blog';
const OUT = '.figure-preview';
if (!existsSync(OUT)) mkdirSync(OUT);

// 브라우저에서는 페이지 폰트를 상속받지만 sharp는 그렇지 않아서,
// 검수용 렌더에서만 한글 폰트를 주입합니다.
const FONT = 'Malgun Gothic, Segoe UI, sans-serif';

const files = readdirSync(SRC).filter((f) => f.endsWith('.md'));
let n = 0;

for (const file of files) {
	const md = readFileSync(join(SRC, file), 'utf8');
	const matches = md.match(/<svg[\s\S]*?<\/svg>/g);
	if (!matches) continue;

	for (const [i, raw] of matches.entries()) {
		const vb = raw.match(/viewBox="([^"]+)"/);
		if (!vb) continue;
		const [, , w, h] = vb[1].split(/\s+/).map(Number);

		// 실제 표시 크기의 2배로 렌더해 글자 뭉개짐 없이 확인합니다.
		const scale = 2;
		const svg = raw
			.replace('<svg', `<svg width="${w * scale}" height="${h * scale}" style="font-family:${FONT}"`)
			.replace(/<text /g, `<text font-family="${FONT}" `);

		const name = `${file.replace(/\.md$/, '')}${matches.length > 1 ? `-${i + 1}` : ''}.png`;
		await sharp(Buffer.from(svg))
			.flatten({ background: '#ffffff' })
			.png()
			.toFile(join(OUT, name));
		n++;
	}
}

console.log(`도식 ${n}개를 ${OUT}/ 에 렌더했습니다.`);
