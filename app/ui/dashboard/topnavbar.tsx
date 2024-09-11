// Import the necessary components
import NavButton from '../navbutton';
import BrandLogo from '../brandlogo';

export default function TopNavBar() {
    return (
        <div className="flex flex-row py-6 px-10 justify-between bg-transparent text-white">
            <BrandLogo />
            <div className="flex flex-row gap-x-3">
                <NavButton 
                    text={'Home'}
                    source={'/icons/home-icon-minimal.png'}
                />
                <NavButton 
                    text={'Home'}
                    source={'/icons/home-icon-minimal.png'}
                />
                <NavButton 
                    text={'Home'}
                    source={'/icons/home-icon-minimal.png'}
                />
            </div>
        </div>
    )
}