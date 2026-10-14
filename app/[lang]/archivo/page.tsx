import PageLayout from '@/components/PageLayout'
import ArchiveWall from '@/components/ArchiveWall'
import { archiveItems } from '@/lib/archive'

export default function ArchivoPage() {
  return (
    <PageLayout>
      <ArchiveWall items={archiveItems()} />
    </PageLayout>
  )
}
