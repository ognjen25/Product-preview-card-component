import ProducPicMB from "./assets/images/image-product-mobile.jpg"
import ProducPicDT from "./assets/images/image-product-desktop.jpg"
import { useWindowSize } from "./Hooks/useWindowSize";
import Button from "./components/Button"

const App = () => {

    const isDesktop = useWindowSize();

    return (
        <div className="my-[30px] bg-white max-w-[350px] min-h-[750px] md:max-w-[600px] md:min-h-[450px] flex flex-col md:flex-row">
            <img
                src={isDesktop ? ProducPicDT : ProducPicMB}
                alt="Gabrielle Essence Perfume"
                className="w-full h-[342px] md:h-full md:w-[300px]"
            />
            <section className="p-[32px] h-full flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[24px]">
                    <p className="text_preset_4 text-grey">PERFUME</p>
                    <h1 className="text_preset_1 text-black">Gabrielle Essence Eau De Parfum</h1>
                    <p className="text_preset_3 text-grey">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                </div>
                <div className="flex gap-[16px] justify-baseline items-center">
                    <p className="text_preset_1 text-green-500 ">$149.99</p>
                    <p className="text_preset_5 text-grey line-through">$169.99</p>
                </div>
                <Button />
            </section>
        </div>
    )
}

export default App