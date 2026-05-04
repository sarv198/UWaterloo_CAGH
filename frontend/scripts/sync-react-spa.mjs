/**
 * After `vite build`, writes hashed JS/CSS paths into Django's react_spa.html
 * so {% static %} resolves to files that actually exist (and cache busts).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const frontendRoot = path.join(__dirname, '..')
const repoRoot = path.join(frontendRoot, '..')
const outDir = path.join(repoRoot, 'CAGH', 'static', 'frontend')
const manifestPath = path.join(outDir, '.vite', 'manifest.json')
const templatePath = path.join(repoRoot, 'CAGH', 'templates', 'CAGH', 'react_spa.html')

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
const entry = manifest['index.html']
if (!entry?.file) {
  console.error('sync-react-spa: missing index.html entry in manifest', manifestPath)
  process.exit(1)
}

const jsPath = entry.file
const cssPath = entry.css?.[0]
if (!cssPath) {
  console.error('sync-react-spa: no css in manifest entry', entry)
  process.exit(1)
}

let html = fs.readFileSync(templatePath, 'utf8')

html = html.replace(
  /<link rel="stylesheet" href="\{% static 'frontend\/assets\/[^']+' %\}" \/>/,
  `<link rel="stylesheet" href="{% static 'frontend/${cssPath}' %}" />`,
)

html = html.replace(
  /<script type="module" src="\{% static 'frontend\/assets\/[^']+' %\}"><\/script>/,
  `<script type="module" src="{% static 'frontend/${jsPath}' %}"></script>`,
)

fs.writeFileSync(templatePath, html, 'utf8')
console.log('sync-react-spa: updated', templatePath, '→', jsPath, cssPath)
