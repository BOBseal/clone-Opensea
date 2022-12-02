import {useAddress, useMetamask} from '@thirdweb-dev/react'
import Main from '../components/Home'
const style= {
  wrapper: 'flex h-screen items-center justify-center',
  connectWalletButton: 'rounded-lg border border-black px-20 py-7 trasnition-all hover:bg-[#96ff48] hover:text-[#2d319f]' ,
}
export default function Home() {
  const connectWithMetamask= useMetamask()
const address = useAddress()

console.log(address)

const Auth = ()=>{
  return (
    <div className={style.wrapper}>
     {/* <div className={style.wrapper}>BOB MarketPlace</div>*/}
      <button 
      onClick={connectWithMetamask}
      className={style.connectWalletButton}
      >
        Connect Web3
        </button>
    </div>
  )
}
 return <>{address ? <Main/>: Auth()}</>
}
