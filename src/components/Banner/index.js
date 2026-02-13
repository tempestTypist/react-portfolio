import { useTheme } from "../../context/ThemeContext";
import DefaultBanner from "./defaultBanner";
import SpaceBanner from "./spaceBanner";
import VaporwaveBanner from "./vaporwaveBanner";

const banners = {
  default: DefaultBanner,
  space: SpaceBanner,
  vaporwave: VaporwaveBanner
};

const Banner = () => {
  const { theme } = useTheme();
  const SelectedBanner = banners[theme] || DefaultBanner;

  return <SelectedBanner />;
};

export default Banner;