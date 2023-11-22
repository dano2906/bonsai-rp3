import { atom } from 'nanostores';

export const isYearly = atom(false);

export const setBilling = () => {
    isYearly.set(!isYearly)
}