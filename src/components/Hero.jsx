
import {logo} from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col '>
            <nav className='flex justify-center items-center w-full mb-10 pt-3 flex-row '>
                <img src={logo} alt='Sumz Logo' className='w-28 object-contain '/>
                <button type='button' onClick={()=> window.open('')} className='black_btn'>
                    GitHub

                </button>
            </nav>

            <h1 className='head_text'>
                Summarize Articles With <br/>
                <span className='orange_gradient'>
                    Openai GPT-4
                </span>

            </h1>
            <h2 className='desc'>This is a great App that plays a role of an 
            assistant to help with summarizing article, one can get the overview 
            of the full article without reading everythng </h2>
            
        </header>
    )
}

export default Hero
