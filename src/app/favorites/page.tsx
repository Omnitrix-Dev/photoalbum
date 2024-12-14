import cloudinary from 'cloudinary'

import { SearchResult } from '../gallery/page'
import { ForceRefresh } from '~/components/ForceRefresh'
import { FavoritesList } from './_components/FavoriteLists'
import { Suspense } from 'react'
import { GallerySkeleton } from '~/components/skeletons/GallerySkeleton'

async function FavoritesWithData() {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as { resources: SearchResult[] }

  return <FavoritesList initialResources={results.resources} />
}

export default async function FavoritesPage() {
  return (
    <section>
      <ForceRefresh />

      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Favorite Images</h1>
        </div>
        <Suspense fallback={<GallerySkeleton />}>
          <FavoritesWithData />
        </Suspense>
      </div>
    </section>
  )
}
