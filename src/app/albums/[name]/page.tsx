import cloudinary from 'cloudinary'

import { Suspense } from 'react'
import { SearchResult } from '~/app/gallery/page'
import { ForceRefresh } from '~/components/ForceRefresh'
import { AlbumGrid } from '../_components/AlbumGrid'
import { GallerySkeleton } from '~/components/skeletons/GallerySkeleton'

async function AlbumWithData({ albumName }: { albumName: string }) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as { resources: SearchResult[] }

  return <AlbumGrid images={results.resources} />
}

export default async function AlbumDetailPage({
  params,
}: {
  params: Promise<{
    name: string
  }>
}) {
  const name = (await params).name
  return (
    <section>
      <ForceRefresh />
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Album {name}</h1>
        </div>
        <Suspense fallback={<GallerySkeleton />}>
          <AlbumWithData albumName={name} />
        </Suspense>
      </div>
    </section>
  )
}
