import Navbar from './components/Navbar/index';
import Banner from './components/Banner/Banner';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';
import Students from './components/Students/Students';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Tabs />
      <Mentor />
      {/* <Students /> */}
      {/* <Newsletter /> */}
      <Footer />
    </main>
  )
}
