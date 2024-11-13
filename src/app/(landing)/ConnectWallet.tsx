import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectWallet() {
  return (
    <>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === 'authenticated');

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <Button
                      onClick={openConnectModal}
                      variant={BUTTON_VARIANTS.PRIMARY}
                      size={BUTTON_SIZES.SM}
                      className="font-bold"
                    >
                      Connect a Wallet
                    </Button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <Button
                      onClick={openChainModal}
                      variant={BUTTON_VARIANTS.PRIMARY}
                      size={BUTTON_SIZES.SM}
                      className="font-bold"
                    >
                      Wrong network
                    </Button>
                  );
                }

                return (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      className="border font-bold border-cloudy-gray border-solid shadow-lg py-3 px-2 rounded-xl"
                      style={{ display: 'flex', alignItems: 'center' }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 20,
                            height: 20,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 20, height: 20 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="inline h-5 w-5 font-bold text-stormy-gray"
                      />
                    </button>

                    <button
                      onClick={openAccountModal}
                      className="border border-cloudy-gray border-solid font-bold shadow-lg p-2 rounded-xl"
                      type="button"
                    >
                      {account.displayBalance
                        ? `${account.displayBalance} `
                        : ''}
                      <span className="bg-cloudy-gray p-2 ml-2 rounded-lg">
                        <span className="inline-block w-6 h-6 rounded-full bg-tangerine mr-2">
                          🎉
                        </span>
                        {account.displayName}
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="inline h-4 w-4 font-bold text-stormy-gray"
                        />
                      </span>
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </>
  );
}
