import { useTheme } from "../../context/ThemeContext";
import DefaultContactForm from "./defaultContactForm";
import SpaceContactForm from "./spaceContactForm";
import VaporwaveContactForm from "./vaporwaveContactForm";

const contactForms = {
  default: DefaultContactForm,
  space: SpaceContactForm,
  vaporwave: VaporwaveContactForm
};

export const ContactForm = () => {
  const { theme } = useTheme();
  const SelectedContactForm = contactForms[theme] || DefaultContactForm;

  return <SelectedContactForm />;
}