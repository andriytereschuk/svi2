const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '../dist')
let count = 0

function cleanHtmlContent(html, filePath) {
  const cleaned = html.replace(/\sdata-n-head="[^"]*"/g, '')
  if (html !== cleaned) {
    console.log(`✅ Cleaned: ${filePath}`)
  }
  return cleaned
}

function walkAndClean(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      walkAndClean(fullPath) // recurse
    } else if (entry.isFile() && fullPath.endsWith('.html')) {
      try {
        const html = fs.readFileSync(fullPath, 'utf-8')
        const cleanedHtml = cleanHtmlContent(html, fullPath)
        fs.writeFileSync(fullPath, cleanedHtml, 'utf-8')
        count++
      } catch (err) {
        console.error(`❌ Error processing ${fullPath}:`, err)
      }
    }
  }
}

console.log('🧹 Cleaning AdSense-incompatible attributes from HTML...')
walkAndClean(distDir)
console.log('✅ Cleaning complete. Total files cleaned:', count)
