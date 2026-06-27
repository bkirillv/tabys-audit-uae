export const siteBase = '/tabys-audit-uae/';

export function withBase(path: string) {
	return `${siteBase}${path.replace(/^\//, '')}`;
}
