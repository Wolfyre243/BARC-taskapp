// Import the necessary components
import NavButton from './navbutton';
import BrandLogo from './brandlogo';

export default function TopNavBar() {
    return (
        <div className="flex flex-row py-6 px-10 justify-between bg-transparent text-white">
            <BrandLogo />
            <div className="flex flex-row gap-x-3">
                <NavButton
                    source={'/icons/home-icon.svg'}
                    width={20}
                    height={20}
                />
                <NavButton
                    source={'/icons/home-icon.svg'}
                    width={20}
                    height={20}
                />
                <NavButton
                    source={'/icons/home-icon.svg'}
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}