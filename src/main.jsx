import ReactDOM from 'react-dom/client'
import Cards from './componentes/Cards/Cards'
import './index.css'
import Footer from "./componentes/Footer/Footer"
import Screen from './img/screen.png'
import Navbar from './componentes/Navbar/Navbar'
import img1 from './img/1.jpeg'
import img2 from './img/2.jpeg'
import img3 from './img/3.jpeg'
import img4 from './img/4.jpeg'
import img5 from './img/5.jpeg'
import img6 from './img/6.jpeg'
const MeetCards = [
  {
    StudentName: "Shashikant",
    StudentImg: img3,
    Micstate: true,
  },
  {
    StudentName: "Rutuja",
    StudentImg: img4,
    Micstate: false,
  },
  {
    StudentName: "Aman",
    StudentImg: img6,
    Micstate: false,
  },
  {
    StudentName: "Bhushan",
    StudentImg: img1,
    Micstate: true,
  },
  {
    StudentName: "Tejesvi",
    StudentImg: img5,
    Micstate: false,
  },
  {
    StudentName: "Siddharth",
    StudentImg: img2,
    Micstate: false,
  },

]
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div>
      <Navbar/>
      <div className='container'>
        <div className='screen'>
          <img className='Screen-img' src={Screen} alt="" />
        </div>
        <div className='cards-container'>
          {
            MeetCards.map((CardsObj, i) => {
              const { StudentImg, StudentName, Micstate } = CardsObj
              return (
                <Cards
                  StudentName={StudentName}
                  StudentImg={StudentImg}
                  Micstate={Micstate}
                  key={i}
                />
              );

            })
          }

        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>




  </>

)
