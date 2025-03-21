import SignUpPage from "@/components/signup";
import Component from "@/components/navigation_bar";
import Footer from "@/components/footer";

function Navigation() {
  return <Component />;
}

function SignUp() {
  return (
    <>
      <Navigation />
      <SignUpPage />
      <Footer />
    </>
  );
}

export default SignUp;