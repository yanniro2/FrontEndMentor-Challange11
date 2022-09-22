import "./index.css"
import img from "./images/image-product-desktop.jpg"
import img_Mobile from "./images/image-product-mobile.jpg"
import icon from "./images/icon-cart.svg"
function App()
{
  return (
    <div className="App bg-Cream w-screen h-screen flex items-center justify-center ">
      <div className="content w-1/2 h-2/3 flex rounded-lg overflow-hidden shadow-2xl Mobile:w-11/12 Mobile:h-[90%] Mobile:flex-col">
        <div className="left w-1/2 h-full Mobile:w-full Mobile:h-[40%]">
          <img src={img} alt="img icon" className="w-full object-center Mobile:hidden" />
          <img src={img_Mobile} alt="img mobile icon" className="w-full object-cover  hidden Mobile:block" />
        </div>
        <div className="right w-1/2 h-full flex flex-col p-6 bg-White justify-evenly Mobile:w-full Mobile:h-[60%]">
          <h3 className="font-Mounts uppercase space-x-3 text-ms font-lg text-Dark-grayish-blue tracking-[5px]">perfume</h3>
          <h1 className="font-Fraunce text-[2rem] text-Very-dark-blue leading-none">Gabrielle Essence Eau De Parfum</h1>
          <p className="font-Monts text-Dark-grayish-blue "> A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.</p>
          <div className="box flex w-full items-center font-Fraunce">
            <h2 className="text-[2rem] text-Dark-cyan">  $149.99</h2>
            <span className="font-Monts text-Dark-grayish-blue line-through m-3">  $169.99</span>

          </div>
          <button className="w-full bg-Dark-cyan flex items-center p-4 justify-center rounded-xl cursor-pointer text-White font-lg shadow-xl hover:bg-Very-Dark-cyan transition-all">
            <img src={icon} alt="icon" className="mr-3" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
