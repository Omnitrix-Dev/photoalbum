'use client'

import { SearchResult } from '~/app/gallery/page'
import { CloudinaryImage } from '~/components/CloudinaryImage'
import { ImageGrid } from '~/components/ImageGrid'

export function AlbumGrid({ images }: { images: SearchResult[] }) {
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
