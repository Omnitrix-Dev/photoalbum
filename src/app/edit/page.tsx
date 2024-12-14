import { EditForm } from './_components/EditForm'

export default async function EditPage({
  searchParams,
}: {
  searchParams: Promise<{
    publicId: string
  }>
}) {
  return <EditForm publicId={(await searchParams).publicId} />
}
