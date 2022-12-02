import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useAddress, useMarketplace } from "@thirdweb-dev/react"
import { BigNumber } from "ethers"
import TopNavbarLayout from "../../../layouts/TopNavbarLayout"
import NImage from "../../../components/NFTDetails/NFTImage"
const style ={

}

const NFT = ()=> {

    const [loading, setLoading] = useState(false)
    const [listing , setListing] = useState()
    const router = useRouter()
    const {tokenID} = router.query
    console.log(tokenID)
    const marketplace = useMarketplace("0x8BbcFb5935E6DF2C51fA85e682a1C0E51e42aD4F")
    const address = useAddress() 
    useEffect(()=>{getListing()}
    ,[])
    useEffect (()=>{if(!address){router.replace('/')}},[address])

    const getListing = async()=>{
        try {
            setLoading(true)
            const listing = await marketplace.getListing(BigNumber.from(tokenID))
            setListing(listing)
            setLoading(false)

        }
        catch(error){
            console.log(error)
        }
    }
    console.log(listing)

    return (

     <TopNavbarLayout>
         <div className={style.wrapper}>
                { loading ? (
                    <div>Loading Please Wait...</div>
                    ) : (
                    <div className={style.nftContainer}>
                        <div className={style.leftContainer}>
                            <div className={style.leftElement}>
                                <NImage image = {listing?.asset?.image}/>
                            </div>

                            <div className={style.leftElement}>
                                {/*<NFTDetails/>*/}
                            </div> 
                        </div> 

                            <div className={style.rightContainer}>
                                {/*<NFTBasicInfo/> */}
                                <div className={style.buyoutContainer}>
                                    {/*<NFTSalesInfo/> */}
                                </div>
                            </div>
                        </div>
                    )
                 }
                </div>
     </TopNavbarLayout>
    )
}
export default NFT