import type { Project, SubProject } from './projects'
import { projectTranslationsEN } from './project-translations'
// Deep-merge EN translations into the project object when lang === 'en'
export function applyTranslation(project: Project, lang: 'es' | 'en'): Project {
  if (lang === 'es') return project
  const t = projectTranslationsEN[project.id]
  if (!t) return project

  const p: Project = {
    ...project,
    ...(t.name && { name: t.name }),
    ...(t.tagline && { tagline: t.tagline }),
    ...(t.tags && { tags: t.tags }),
    ...(t.overview && { overview: t.overview }),
    ...(t.role && { role: t.role }),
    ...(t.challenge && { challenge: t.challenge }),
    ...(t.process && { process: t.process }),
    ...(t.result && { result: t.result }),
    ...(t.campaignsLabel !== undefined && { campaignsLabel: t.campaignsLabel }),
  }

  if (t.campaigns && project.campaigns) {
    p.campaigns = project.campaigns.map((campaign, i) => {
      const tc = t.campaigns![i]
      if (!tc) return campaign
      const c: SubProject = {
        ...campaign,
        ...(tc.name && { name: tc.name }),
        ...(tc.objective && { objective: tc.objective }),
        ...(tc.formats && { formats: tc.formats }),
      }
      if (tc.subCampaigns && campaign.subCampaigns) {
        c.subCampaigns = campaign.subCampaigns.map((sub, j) => {
          const ts = tc.subCampaigns![j]
          if (!ts) return sub
          return {
            ...sub,
            ...(ts.name && { name: ts.name }),
            ...(ts.objective && { objective: ts.objective }),
            ...(ts.formats && { formats: ts.formats }),
          }
        })
      }
      return c
    })
  }

  const label = (value?: string) =>
    value
      ?.replace(/Antes/g, 'Before')
      .replace(/Después/g, 'After')
      .replace(/Dirección de arte/g, 'Art direction')
      .replace(/Output IA/g, 'AI output')
      .replace(/Imagen Generativa/g, 'Generative imagery')
      .replace(/Posts Editoriales/g, 'Editorial posts')
      .replace(/Carrusel/g, 'Carousel')
  const translateSections = (campaign: SubProject): SubProject => ({
    ...campaign,
    sections: campaign.sections?.map((section) => ({
      ...section,
      label: label(section.label),
      groups: section.groups?.map((group) => ({
        ...group,
        label: label(group.label),
      })),
    })),
    subCampaigns: campaign.subCampaigns?.map(translateSections),
  })
  p.campaigns = p.campaigns?.map(translateSections)
  return p
}
