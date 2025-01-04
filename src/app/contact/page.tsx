import Contact from "@/components/Contact";
import { metadataBase } from '../meta';

export const metadata = {
  ...metadataBase.pages.contact,
};

export default function ContactPage() {
    return <Contact />;
}

