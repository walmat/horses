import { useState, useEffect } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'
import Portis from '@portis/web3'

export function useWeb3Modal() {
  const [web3Modal, setWeb3Modal] = useState<any>(null)

  useEffect(() => {
    if (!web3Modal) {
      try {
        import('web3modal').then((Web3Modal) => {
          const infuraId = process.env.NEXT_PUBLIC_INFURA_ID

          const providerOptions = {
            walletconnect: {
              package: WalletConnectProvider, // required
              options: {
                infuraId, // required
              },
            },
            portis: {
              package: Portis, // required
              options: {
                id: 'PORTIS_ID', // required
              },
            },
            walletlink: {
              package: WalletLink,
              options: {
                appName: 'Tigerbob',
                infuraId,
              },
            },
          }

          setWeb3Modal(
            new Web3Modal.default({
              network:
                process.env.NODE_ENV === 'development' ? 'rinkeby' : 'mainnet',
              // false will always shows the modal
              // cacheProvider: false, // optional
              providerOptions, // required
              cacheProvider: false, // optional
            }),
          )
        })
      } catch (_) {}
    }
  }, [])

  return web3Modal
}
