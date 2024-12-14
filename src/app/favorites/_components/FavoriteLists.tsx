'use client'

import { useEffect, useState } from 'react'
import { SearchResult } from '~/app/gallery/page'
import { CloudinaryImage } from '~/components/CloudinaryImage'
import { ImageGrid } from '~/components/ImageGrid'

export function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[]
}) {
  const [resources, setResources] = useState(initialResources)

  useEffect(() => {
    setResources(initialResources)
  }, [initialResources])

  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imagedatas={imageData}
            width='400'
            height='300'
            alt='an image of something'
            onUnheart={unheartedResource => {
              setResources(currentResources =>
                currentResources.filter(
                  resource =>
                    resource.public_id !== unheartedResource.public_id,
                ),
              )
            }}
          />
        )
      }}
    />
  )
}
