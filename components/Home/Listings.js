import { useEffect, useState  } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'
import NFTCard from './NftCard'

const style = {
    wrapper: `mx-auto grid max-w-fit flex-1 gap-4 grid-cols-2 p-10 pt-24 md:grid-cols-1 md:pt-0 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 `
}

const Listings = () => {

    const [listings,setListings]=useState([])

    const marketplace = useMarketplace("0x8BbcFb5935E6DF2C51fA85e682a1C0E51e42aD4F")

    useEffect(()=>{
        getListings()
    },[])

    const getListings = async()=>{
        try{
            const list = await marketplace.getActiveListings()
            setListings(list)
        }catch (error){console.log(error)}
    }
   

    return (
        <div className={style.wrapper}> 
        {listings.length > 0 ? (
            <>
            {listings?.map((listing, index)=>( 
                <Link 
                key = {index}
                href={`/assets/${listing.assetContractAddress} /${listing.id}`} 
                >
                    <a>
                        <NFTCard listing = {listing}/>
                    </a>
                </Link>
            ))}
            </>
        ) : (
         <div> Loading </div>
        )}
        </div>
    )
}
export default Listings