'use client'

import { ImageGrid } from '~/components/ImageGrid'
import { CloudinaryImage } from '~/components/CloudinaryImage'
import { SearchResult } from '../page'

export function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imagedatas={imageData}
            width='400'
            height='300'
            alt='an image of something'
          />
        )
      }}
    />
  )
}
