// This is the fonts file, where we will be configuring and importing fonts for use.

// Import the fonts from google fonts
import { Outfit, Sulphur_Point } from 'next/font/google';

export const outfit = Outfit({
    subsets: ['latin']
})

export const sulphurPoint = Sulphur_Point({
    subsets: ['latin'],
    weight: "400"
}) 