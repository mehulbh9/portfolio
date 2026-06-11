import sharp from 'sharp'
import { readdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imgDir = path.join(__dirname, '..', 'public', 'images')

const files = await readdir(imgDir)
const jpgs = files.filter(f => f.endsWith('.jpg'))

for (const file of jpgs) {
  const input = path.join(imgDir, file)
  const output = path.join(imgDir, file.replace('.jpg', '.webp'))

  const info = await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output)

  const orig = (await import('fs')).statSync(input).size
  console.log(`${file} → ${file.replace('.jpg','.webp')}  ${Math.round(orig/1024)}KB → ${Math.round(info.size/1024)}KB`)
}
