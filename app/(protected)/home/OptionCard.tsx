import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
const font = Poppins({
    subsets:["latin"],
    weight:["600"],
    
})

interface OptionCardProps{
    optionDesc: string,
    optionImage: string,
    optionLabel :string
}

const OptionCard = ({optionDesc,optionImage,optionLabel}: OptionCardProps) => {
    return ( 
        <>
            <div className="flex bg-white m-2 p-3 rounded-sm">
                <div>
                    <img src={optionImage} alt=""/>
                </div>
                <div>
                    <div className={cn("text-1xl",font.className)}>
                        {optionLabel}
                    </div>
                    <div className="text-muted-foreground text-sm">
                        {optionDesc}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default OptionCard;