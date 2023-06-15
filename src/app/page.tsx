'use client'
import Navbar from './components/navbar'
import GlobalStyles from '../app/styles/GlobalStyles';
import Main from './pages/main';



export default function Page() {
  return (
    <>
    <GlobalStyles />
      <div>
        <Navbar></Navbar>
        <Main></Main>
      </div>
    </>

  )
}
