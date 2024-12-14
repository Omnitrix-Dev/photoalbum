function Skeleton() {
  return (
    <section className='min-w-[30%]'>
      <div
        role='status'
        className='max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
      >
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-3'>
            <div>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
              <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
            </div>
            <div className='w-32 h-10 bg-gray-200 rounded-sm dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <span className='sr-only'>Loading...</span>
      </div>
    </section>
  )
}

export function AlbumSkeleton() {
  return (
    <section className='flex gap-2 flex-col sm:flex-row w-full'>
      {Array.from({ length: 2 }).map((_, idx) => (
        <Skeleton key={idx} />
      ))}
    </section>
  )
}
