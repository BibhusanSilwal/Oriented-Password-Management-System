import OptionCard from "./OptionCard";

const Home = () => {
    return ( 
        <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <div className="flex flex-col">
                <OptionCard
                    optionLabel="Manage Your Passwords"
                    optionDesc="Seamlessly store and access your important passwords"
                    optionImage="img"
                />
                <OptionCard
                    optionLabel="Manage Your Credit Cards"
                    optionDesc="Store your Credit Card info in a safe vault"
                    optionImage="img"
                />
            </div>

        </div>
     );
}
 
export default Home;