import PageLayout from '@/components/PageLayout'
import ProjectGrid from '@/components/ProjectGrid'

// The header lives in the grid: it changes with the area someone came for.
export default function ProyectosPage() {
  return (
    <PageLayout>
      <ProjectGrid />
    </PageLayout>
  )
}
