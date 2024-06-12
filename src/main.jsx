import ReactDOM from 'react-dom/client'
import Cards from './componentes/Cards/Cards'
import './index.css'
import Footer from "./componentes/Footer/Footer"
import Screen from './img/screen.png'
import Navbar from './componentes/Navbar/Navbar'
const MeetCards = [
  {
    StudentName: "Shashikant",
    StudentImg: 'https://i.pravatar.cc/150?img=3',
    Micstate: true,
  },
  {
    StudentName: "Rutuja",
    StudentImg: 'https://i.pravatar.cc/150?img=1',
    Micstate: false,
  },
  {
    StudentName: "Aman",
    StudentImg: 'https://i.pravatar.cc/150?img=2',
    Micstate: false,
  },
  {
    StudentName: "Bhushan",
    StudentImg: 'https://i.pravatar.cc/150?img=4',
    Micstate: true,
  },
  {
    StudentName: "Tejesvi",
    StudentImg: 'https://i.pravatar.cc/150?img=5',
    Micstate: false,
  },
  {
    StudentName: "Siddharth",
    StudentImg: 'https://i.pravatar.cc/150?img=33',
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
