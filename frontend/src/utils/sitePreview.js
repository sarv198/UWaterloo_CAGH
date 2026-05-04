/** Remote screenshot thumbnail (WordPress mshots); may be slow or fail for some hosts. */
export function sitePreviewUrl(pageUrl) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(pageUrl)}?w=900`
}

export function siteFaviconUrl(pageUrl) {
  try {
    const host = new URL(pageUrl).hostname
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=256`
  } catch {
    return ''
  }
}
