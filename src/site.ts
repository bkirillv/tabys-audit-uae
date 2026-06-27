export const siteBase = '/';

export function withBase(path: string) {
	return `${siteBase}${path.replace(/^\//, '')}`;
}
