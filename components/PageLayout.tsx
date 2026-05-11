import Nav from './Nav'
import Footer from './Footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
