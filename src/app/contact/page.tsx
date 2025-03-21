import ContactUsComponent from "@/components/contact_us";
import Component from "@/components/navigation_bar";

function Navigation() {
  return <Component />;
}

function ContactUsPage() {
  return (
    <>
      <Navigation />
      <ContactUsComponent />
    </>
  );
}

export default ContactUsPage;