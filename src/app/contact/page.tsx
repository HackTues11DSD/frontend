import ContactUsComponent from "@/components/contact_us";
import Component from "@/components/navigation_bar";
import Footer from "@/components/footer";

function Navigation() {
  return <Component />;
}

function ContactUsPage() {
  return (
    <>
      <Navigation />
      <ContactUsComponent />
      <Footer />
    </>
  );
}

export default ContactUsPage;
