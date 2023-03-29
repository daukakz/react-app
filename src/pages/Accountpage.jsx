import { Navbar } from "../components/navbar/Navbar";
import { SubmitForm } from "../components/submit-form/SubmitForm";
import { Footer } from "../containers/footer/Footer";

const Account = () => {
  return (
    <div className="Account">
      <div className="gradient_bg">
        <Navbar />
      </div>
      <SubmitForm />
      <div className="gradient_bg">
        <Footer />
      </div>
    </div>
  );
};

export { Account };
