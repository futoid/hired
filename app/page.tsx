
import Footer from "@/components/footer"
import Header from "@/components/header"
import Results from "@/components/results"

export default function Home() {
  return (
    <main>
      <Header />
      <div className={`px-6 pt-10 lg:px-20`}>
        <Results />
      </div>
      <Footer />
    </main>
  )
}
