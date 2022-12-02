import Image from 'next/image'
import{AiOutlineHeart} from 'react-icons/ai'

const style={

    wrapper: `relative flex h-[400px] w-[300px] cursor-pointer flex-col rounded-lg bg-gray shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-[#ccccff]`,
    imageContainer : `h-3/4 overflow-hidden`,
    nftImage: `rounded-t-lg object-cover`,
    nftLowerContainer: `flex h-1/4 flex-col justify-between p-4`,
    nftInfoContainer: `flex justify-between`,
    collectionTitle: `text-sm text-black dark:text-black  `,
    nftTitle: `text-sm font-bold`,
    priceContainer : `flex flex-col items-end justify-center space-y-1 `,
    priceTitle: ` text-xs font-light`,
    wethImageContainer:`flex items-center justify-end space-x-2`,
    likesContainer: `flex items-center justify-end space-x-2`,
    heartIcon:` h-3 w-3 text-gray-600 dark:text-gray-500`,
    likeCounter: `text-xs text-gray-600 dark:text-gray-500`,
   

}

const NFTCard = ({listing}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.imageContainer}>
                <image
                    className={style.nftImage}
                    src={listing.asset.Image}
                    height ={400}
                    width = {300}
                    alt = 'nft'
                />
            </div>

            <div className={style.nftLowerContainer}>
                <div className={style.nftInfoContainer}>
                    <div>
                        {listing.asset.collection && (
                            <div className={style.collectionTitle}>
                                {listing.asset?.collection?.name}
                            </div>
                        )}

                        <div className={style.nftTitle}>
                            {listing.asset.name}
                        </div>
                    </div>

                    <div className={style.priceContainer}>
                        <div className={style.priceTitle}>
                            BUY AT
                        </div>
                        <div className={style.wethImageContainer}>
                            <Image 
                            height={14}
                            width ={14}
                            src = '/weth-logo.svg'
                            alt = 'weth'
                            />
                            <div className={style.priceValue}>
                                {listing.buyoutCurrencyValuePerToken?.displayValue}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.likesContainer}>
                    <AiOutlineHeart className={style.heartIcon}/>
                    <div className={style.likeCounter}>
                        {listing.asset?.stats?.favourites ?? 0}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NFTCard