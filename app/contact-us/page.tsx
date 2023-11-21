import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <div className="flex justify-center py-14">
      <div className="wrapper max-md:px-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">Contact Us</h1>
        <p className="mb-4 md:text-center text-justify">
          Have a question or feedback for us? We&apos;d love to hear from you! Feel
          free to get in touch using any of the following methods:
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
        <div className="flex items-start flex-col bg-gray-300 rounded-md p-2">
          <h2 className="text-xl flex items-center font-semibold justify-center max-md:text-base">
            <FaEnvelope className="text-blue-500 mr-2" /> Email
          </h2>
          <a
            href="mailto:contact@pricetrackerapp.com"
            className="hover:underline"
          >
            contact@pricetrackerapp.com
          </a>
        </div>
        <div className=" flex items-start flex-col bg-gray-300 rounded-md p-2">
          <h2 className="text-xl flex items-center font-semibold justify-center max-md:text-base">
            <FaPhone className="text-blue-500 mr-2" /> Phone
          </h2>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className=" flex items-start flex-col bg-gray-300 rounded-md p-2">
          <h2 className="text-xl font-semibold mb-2 flex items-center justify-center max-md:text-base">
            <FaMapMarkerAlt className="text-blue-500 mr-2" /> Mailing Address
          </h2>
          <address>
            123 Main Street,
            City, State 12345,
            Country
          </address>
        </div>
        </div>
        <ContactForm/>
      </div>
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Contact PriceTrackerHub - Your Ultimate Amazon and Flipkart Price Tracking Solution",
  description: "Welcome to PriceTrackerHub, your one-stop destination for effortlessly monitoring and comparing prices of Amazon and Flipkart products. Never miss a deal again as our intuitive platform helps you stay updated on price drops, discounts, and special offers, ensuring you always get the best value for your money. Start tracking prices today and make smarter shopping decisions with PriceTrackerHub!",
};