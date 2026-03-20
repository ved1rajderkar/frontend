import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import useSidebarStore from "./store/sidebarStore";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import ScrollToTop from "./utils/ScrollToTop";
import SearchResult from "./pages/SearchResult";
import WatchPage from "./pages/WatchPage";
import PageNotFound from "./pages/PageNotFound";
import PeopleInfoPage from "./pages/PeopleInfoPage";
import CharacterInfoPage from "./pages/CharacterInfoPage";
import CharactersPage from "./pages/CharactersPage";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

const AppContent = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const togglesidebar = useSidebarStore((state) => state.toggleSidebar);
  const location = useLocation();
  const path = location.pathname === "/";

  return (
    <>
      {!path && <Sidebar />}

      <main className={`${isSidebarOpen ? "bg-active" : ""} opacityWrapper`}>
        <div
          onClick={togglesidebar}
          className={`${isSidebarOpen ? "active" : ""} opacityBg`}
        ></div>
        {!path && <Header />}
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Root />} />
            <Route path="/home" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/anime/:id" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <DetailPage />
              </motion.div>
            } />
            <Route path="/animes/:category/:query?" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ListPage />
              </motion.div>
            } />
            <Route path="/search" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <SearchResult />
              </motion.div>
            } />
            <Route path="/watch/:id" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <WatchPage />
              </motion.div>
            } />
            <Route path="/characters/:id" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CharactersPage />
              </motion.div>
            } />
            <Route path="/people/:id" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PeopleInfoPage />
              </motion.div>
            } />
            <Route path="/character/:id" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CharacterInfoPage />
              </motion.div>
            } />
            <Route path="*" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PageNotFound />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>

        {/* SEO Content Section */}
        <section style={{ padding: "2rem", color: "#666", fontSize: "0.9rem", borderTop: "1px solid #333", marginTop: "2rem" }}>
          <h1 style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", border: 0 }}>
            ZenkaiDrive - Watch Free Anime Online in HD
          </h1>
          <div className="seo-description">
            <p>
              Welcome to <strong>ZenkaiDrive</strong>, your ultimate destination for high-quality anime streaming. Our platform is designed with a modern interface to provide the best user experience for anime fans worldwide. Whether you are looking for the latest seasonal releases or classic masterpieces, ZenkaiDrive offers a vast library of anime with both SUB and DUB options in full HD quality.
            </p>
            <p>
              We prioritize performance and accessibility, ensuring that you can watch your favorite shows on any device without interruptions. ZenkaiDrive features an advanced search system, detailed anime information, character profiles, and a seamless video player. Our mission is to provide a free, safe, and premium-feeling environment for the community to enjoy Japanese animation.
            </p>
            <p>
              Explore our trending sections, top-rated lists, and genre categories to find your next binge-watch. From action-packed shonen and emotional dramas to mind-bending sci-fi and heartwarming slice-of-life, there is something for everyone on ZenkaiDrive. Join thousands of users who trust ZenkaiDrive for their daily dose of anime. We continuously update our servers to provide the fastest streaming speeds and most reliable links.
            </p>
            <p>
              ZenkaiDrive is more than just a streaming site; it's a hub for anime enthusiasts. Stay tuned for new features and improvements as we continue to evolve. Thank you for choosing ZenkaiDrive as your go-to anime streaming platform. Start watching now and immerse yourself in the world of anime!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AppContent;
