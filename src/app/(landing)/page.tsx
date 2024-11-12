import ConnectWallet from './ConnectWallet';
import Tabs from './Tabs';

export default function LandingPage() {
  return (
    <div className="wrapper">
      <div className="flex justify-end">
        <ConnectWallet />
      </div>
      <div className="mt-32 flex flex-col gap-10 justify-center items-center">
        <Tabs />
      </div>
    </div>
  );
}
