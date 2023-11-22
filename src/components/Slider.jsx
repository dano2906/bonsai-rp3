import { useStore } from '@nanostores/react';
import { isYearly } from '../store/billingStore';

export default function Slider() {
  const yearly = useStore(isYearly);
  return (
    <div className="w-20 h-10 p-0.5 bg-red-400">
      <div className="z-30 w-1/2 h-full bg-slate-500">aasd</div>
    </div>
  )
}
