'use client'

import { CldImage, CldImageProps } from 'next-cloudinary'
import { useState, useTransition } from 'react'
import { SearchResult } from '~/app/gallery/page'
import { FullHeart, Heart } from './icons'
import { ImageMenu } from './ImageMenu'
import { setAsFavoriteAction } from '~/action/image.action'

export function CloudinaryImage(
  props: {
    imagedatas: SearchResult
    onUnheart?: (unheartedResource: SearchResult) => void
  } & Omit<CldImageProps, 'src'>,
) {
  const [transition, startTransition] = useTransition()
  const { imagedatas, onUnheart } = props

  const [isFavorited, setIsFavorited] = useState(
    imagedatas?.tags?.includes('favorite'),
  )

  return (
    <div className='relative'>
      <CldImage {...props} src={imagedatas?.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            onUnheart?.(imagedatas)
            setIsFavorited(false)
            startTransition(() => {
              setAsFavoriteAction(imagedatas?.public_id, false)
            })
          }}
          className='absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer'
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true)
            startTransition(() => {
              setAsFavoriteAction(imagedatas?.public_id, true)
            })
          }}
          className='absolute top-2 left-2 hover:text-red-500 cursor-pointer'
        />
      )}
      <ImageMenu image={imagedatas} />
    </div>
  )
}
