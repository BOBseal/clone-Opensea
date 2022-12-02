import Image from "next/image"
import { AiOutlineFire } from "react-icons/ai"

const style = {

}
 const NImage = ({image})=> {
    // const image = Image()

    return (
        <div className={style.wrapper}>
            <div className={style.nftHeader}>
                <Image 
                height={15}
                width={15}
                src ='/eth-logo.svg'
                alt='eth'
                />
                <div className={style.likesContainer}>
                    <AiOutlineFire className={style.fireIcon}/>
                    <div className={style.likesCount}>6000000000000
                    </div>
                </div>
            </div>
            <div>
             { image && <Image height={400} width={400} src ={image} alt='nft' />}
            </div>
        </div>
    )

 }

 export default NImage 