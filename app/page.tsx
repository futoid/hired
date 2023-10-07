
import Footer from "@/components/footer"
import Header from "@/components/header"
import Results from "@/components/results"
import Search from "@/components/search"

export default function Home() {
  return (
    <main>
      <Header />
      <div className={`px-6 pt-10 lg:px-20`}>
        <Search/>
        <Results />
      </div>
      <Footer />
    </main>
  )
}
