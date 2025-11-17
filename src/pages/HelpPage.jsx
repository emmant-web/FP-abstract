import Header from "../components/Header";
import HelpTopics from "../components/HelpTopics";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

function HelpPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-300">
      {/* <Header /> */}
      <SearchBar />
      <HelpTopics />
      <Footer />
    </div>
  );
}

export default HelpPage;
