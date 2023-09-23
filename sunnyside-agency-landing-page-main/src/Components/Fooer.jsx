import facebook from "../assets/icon-facebook.svg"
import instagram from "../assets/icon-instagram.svg"
import twitter from "../assets/icon-twitter.svg"
import pintrest from "../assets/icon-pinterest.svg"

function Fooer() {
  return (
    <div className='flex flex-col items-center  bg-blue-300 h-56 text-green-800'>
        <h3 className='text-xl font-barlow font-bold mt-6'>sunnyside</h3>
        <div className="mt-4 flex items-center space-x-6">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
        </div>
        <div className='icons flex items-center mt-8 space-x-6'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={pintrest} alt="" />
        </div>
    </div>
  )
}

export default Fooer