// This file constructs the BrandLogo Component.
// This component holds the brand's icon and name, as a "home button".

// Import necessary components
import Image from 'next/image';

export default function BrandLogo() {
    return (
        <a className="flex flex-row gap-x-3 items-center" href="#">
            <Image 
                src={'/brand-logo-icon.jpg'}
                alt={ 'Brand Logo' }
                width={50}
                height={50}
                className="rounded-full"
            />
            <h1 className="text-3xl font-bold tracking-tight text-center text-white">
                ThisIsABrand
            </h1>
        </a>
    )
}