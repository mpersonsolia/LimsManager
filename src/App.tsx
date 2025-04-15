import {
  BiData,
  BiSolidVial,
  BiGroup,
  BiScatterChart,
  BiShield,
  BiGlobe,
  BiX,
  BiMenu,
  BiWater,
  BiFace,
  BiCloud,
  BiDesktop,
} from "react-icons/bi";
import {
  LuFactory,
  LuFlaskRound,
  LuTractor,
  LuTrees,
  LuBuilding2,
} from "react-icons/lu";
import { BsEggFried } from "react-icons/bs";
import { MdOutlineFastfood } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import logo from "./image/logo.jpg";
import lab from "./image/laboratory.jpg";
import system from "./image/system.jpg";

function App() {
  const features = [
    {
      icon: <BiData className="w-12 h-12 text-violet-700" />,
      title: "Sample Management",
      description:
        "Comprehensive tracking and organization of laboratory samples",
    },
    {
      icon: <BiSolidVial className="w-12 h-12 text-violet-700" />,
      title: "Lab Operations",
      description: "Streamline your laboratory workflows and processes",
    },
    {
      icon: <BiGroup className="w-12 h-12 text-violet-700" />,
      title: "Team Collaboration",
      description:
        "Enhanced communication and data sharing between team members",
    },
    {
      icon: <BiScatterChart className="w-12 h-12 text-violet-700" />,
      title: "Data Analysis",
      description: "Powerful tools for analyzing and visualizing your lab data",
    },
    {
      icon: <BiShield className="w-12 h-12 text-violet-700" />,
      title: "Security",
      description: "Enterprise-grade security for your sensitive lab data",
    },
    {
      icon: <BiGlobe className="w-12 h-12 text-violet-700" />,
      title: "Global Access",
      description: "Access your lab data from anywhere in the world",
    },
  ];

  const applications = [
    {
      icon: <MdOutlineFastfood className="w-12 h-12 text-violet-700" />,
      title: "Foods and Drinks",
      description:
        "Quality control and specialized testing for food and beverages",
    },
    {
      icon: <BiWater className="w-12 h-12 text-violet-700" />,
      title: "Sanitation",
      description:
        "Monitoring and laboratory testing for water and sanitation systems",
    },
    {
      icon: <BiFace className="w-12 h-12 text-violet-700" />,
      title: "Beauty and Hygiene",
      description: "Microbiological and chemical analysis of products",
    },
    {
      icon: <LuTractor className="w-12 h-12 text-violet-700" />,
      title: "Agricultural",
      description:
        "Testing and quality assurance for agricultural products and inputs",
    },
    {
      icon: <LuTrees className="w-12 h-12 text-violet-700" />,
      title: "Environment",
      description: "Environmental assessments focused on natural resources",
    },
    {
      icon: <LuFactory className="w-12 h-12 text-violet-700" />,
      title: "Mining and Metallurgy",
      description: "Physical-chemical testing and process controly",
    },
    {
      icon: <BsEggFried className="w-12 h-12 text-violet-700" />,
      title: "Animal Nutrition",
      description:
        "Composition and testing analysis for animal feed and supplements",
    },
    {
      icon: <LuFlaskRound className="w-12 h-12 text-violet-700" />,
      title: "Chemistry",
      description:
        "Advanced laboratory services for research and chemical analysis",
    },
    {
      icon: <LuBuilding2 className="w-12 h-12 text-violet-700" />,
      title: "Civil Engineering",
      description:
        "Material testing and technological control for construction projects",
    },
  ];

  const pricing = [
    {
      title: "Free Pack",
      value: "$0",
      description: "Supports 1 user",
      buttonColor: "bg-gray-400",
      text: "text-gray-400",
      buttonHoverColor: "hover:bg-gray-500",
      backgroundHoverColor: "hover:bg-gray-200",
    },
    {
      title: "Small Pack",
      value: "$500",
      description: "Supports 1 to 10 users",
      buttonColor: "bg-emerald-400",
      text: "text-emerald-400",
      buttonHoverColor: "hover:bg-emerald-500",
      backgroundHoverColor: "hover:bg-emerald-200",
    },
    {
      title: "Medium Pack",
      value: "$1000",
      description: "Supports 11 to 20 users",
      buttonColor: "bg-sky-400",
      text: "text-sky-400",
      buttonHoverColor: "hover:bg-sky-500",
      backgroundHoverColor: "hover:bg-sky-200",
    },
    {
      title: "Big Pack",
      value: "$1500",
      description: "Supports 21 to 50 users",
      buttonColor: "bg-amber-400",
      text: "text-amber-400",
      buttonHoverColor: "hover:bg-amber-500",
      backgroundHoverColor: "hover:bg-amber-200",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu hamburger

  //Features carousel (small screens)
  const [currentIndexFeaturesCarousel, setCurrentIndexFeaturesCarousel] =
    useState(0);

  const prevFeatures = () => {
    setCurrentIndexFeaturesCarousel((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );
  };

  const nextFeatures = () => {
    setCurrentIndexFeaturesCarousel((prev) =>
      prev === features.length - 1 ? 0 : prev + 1
    );
  };

  // Applications carousel
  const [currentIndexApplications, setCurrentIndexApplications] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedApplications = [
    ...applications.slice(-itemsPerPage),
    ...applications,
    ...applications.slice(0, itemsPerPage),
  ];

  const totalPages = Math.ceil(applications.length / itemsPerPage);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndexApplications((prev) => prev + 1);

    if (currentIndexApplications >= totalPages - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndexApplications(0);
      }, 500);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndexApplications((prev) => prev - 1);

    if (currentIndexApplications <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndexApplications(totalPages - 1);
      }, 500);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndexApplications + i) % applications.length;
      items.push(applications[index]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  //Pricing carousel (small screens)
  const [currentIndexPricing, setCurrentIndexPricing] = useState(0);

  const prevPricing = () => {
    setCurrentIndexPricing((prev) =>
      prev === 0 ? pricing.length - 1 : prev - 1
    );
  };

  const nextPricing = () => {
    setCurrentIndexPricing((prev) =>
      prev === pricing.length - 1 ? 0 : prev + 1
    );
  };

  return (
    // Header
    <div className="min-h-screen">
      <nav className="bg-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img className="max-h-20 max-w-3xs" src={logo} alt="Logo" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-violet-700">
                Features
              </a>
              <a href="#solutions" className="text-white hover:text-violet-700">
                Solutions
              </a>
              <a
                href="#applications"
                className="text-white hover:text-violet-700"
              >
                Applications
              </a>
              <a href="#pricing" className="text-white hover:text-violet-700">
                Pricing
              </a>
              <a href="#contact" className="text-white hover:text-violet-700">
                Contact
              </a>
              <button className="bg-violet-700 text-white px-4 py-2 rounded-md  hover:bg-violet-500 transition">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-violet-700 hover:text-violet-800"
              >
                {isMenuOpen ? (
                  <BiX className="h-6 w-6" />
                ) : (
                  <BiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-white hover:text-violet-800"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="block px-3 py-2 text-white hover:text-violet-800"
              >
                Solutions
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-white hover:text-violet-800"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:text-violet-800"
              >
                Contact
              </a>
              <button className="w-full mt-2 bg-violet-700 text-white px-4 py-2 rounded-md hover:bg-violet-800 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-violet-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 shadow-2xl">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Modern Laboratory</span>
                  <span className="block text-violet-700">
                    Management System
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Streamline your laboratory operations with our comprehensive
                  LIMS solution. Manage samples, track experiments, and
                  collaborate with your team efficiently.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-white bg-violet-700 hover:bg-violet-500 md:py-4 md:text-lg md:px-10">
                      Start Free Trial
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-violet-700 bg-violet-200 hover:bg-violet-300 md:py-4 md:text-lg md:px-10">
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={lab}
            alt="Laboratory"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="pt-12 pb-1 sm:pb-12 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:block">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Comprehensive Lab Management Features
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Everything you need to manage your laboratory efficiently
              </p>
            </div>

            <div className="hidden sm:block">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl"
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Small screens */}
          <div className="lg:hidden relative flex flex-col items-center mt-8">
            <button
              onClick={prevFeatures}
              className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
              style={{ transform: "translateY(-50%)" }}
            >
              <IoIosArrowBack className="w-6 h-6 text-violet-700" />
            </button>

            <div className="w-full flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-[90%]">
                <div className="mb-4">
                  {features[currentIndexFeaturesCarousel].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {features[currentIndexFeaturesCarousel].title}
                </h3>
                <p className="text-gray-500">
                  {features[currentIndexFeaturesCarousel].description}
                </p>
              </div>
            </div>

            <button
              onClick={nextFeatures}
              className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg  z-10"
              style={{ transform: "translateY(-50%)" }}
            >
              <IoIosArrowForward className="w-6 h-6 text-violet-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="relative bg-gray-50 overflow-hidden" id="solutions">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-violet-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:ml-auto lg:w-full lg:pb-28 xl:pb-32 shadow-none lg:shadow-2xl">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <span className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                  Our Solutions For Your Lab
                </span>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  The Lims system goes far beyond industry standards. With
                  exclusive features and a modular architecture, it adapts
                  seamlessly to laboratories of all sizes and specialties:
                  Service Providers, Quality Control, and Research &
                  Development. Discover how we’ve automated hundreds of routines
                  within a single platform. Offering the best cost-benefit ratio
                  in the market, Lims provides a fair and realistic licensing
                  policy. Cut unnecessary expenses and gain access to more
                  features at an affordable price.
                </p>
              </div>
            </main>
          </div>
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={system}
            alt="System"
          />
        </div>
      </div>

      {/* Application Section */}
      <div className="bg-gray-100">
        <div className="py-12 bg-gray-50" id="applications">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Empowering Industries with Smart Lab Solutions
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Tailored technologies and intelligent solutions to elevate
                performance across multiple sectors
              </p>
            </div>

            <div className="mt-16 relative">
              <button
                onClick={prevSlide}
                className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Previous slide"
              >
                <IoIosArrowBack className="w-6 h-6 text-violet-700" />
              </button>

              <div className="overflow-hidden">
                <div
                  className="flex"
                  style={{
                    transform: `translateX(0)`,
                  }}
                >
                  <div className="flex w-full">
                    {visibleItems.map((application, index) => (
                      <div
                        key={`${application.title}-${index}`}
                        className={`w-full md:w-1/${itemsPerPage} px-4`}
                        style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                      >
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                          <div className="flex mb-4">{application.icon}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {application.title}
                          </h3>
                          <p className="text-gray-500">
                            {application.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Next slide"
              >
                <IoIosArrowForward className="w-6 h-6 text-violet-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Version Section */}
      <div className="bg-violet-700 flex justify-center items-center flex-col p-4">
        <div className="flex justify-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center">
            Version: 5.12.3
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mt-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white mb-2 text-center">
              Windows, Mac or Linux
            </div>
            <div className="h-24 flex items-center justify-center">
              <BiDesktop className="w-24 h-24 text-white" />
            </div>
            <button
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet-700
            bg-white hover:bg-violet-200"
            >
              Start Your Free Trial for 30 days
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white mb-2 text-center">
              Cloud or Online
            </div>
            <div>
              <BiCloud className="w-24 h-24 text-white" />
            </div>
            <button
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md
            text-violet-700 bg-white hover:bg-violet-200 text-center"
            >
              Start Your Free Trial for 30 days
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative bg-gray-50 overflow-hidden" id="pricing">
        <div className="m-4">
          {/* Big screens*/}
          <div className="hidden lg:grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-4">
            {pricing.map((price, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center ${price.backgroundHoverColor}`}
              >
                <h3
                  className={`text-2xl font-extrabold ${price.text} sm:text-4xl pb-8`}
                >
                  {price.title}
                </h3>
                <p
                  className={`text-3xl font-extrabold sm:text-4xl ${price.text} pb-8`}
                >
                  {price.value}
                </p>
                <p className="text-gray-500 pb-8">{price.description}</p>
                <div className="rounded-md shadow">
                  <button
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md
                  text-white ${price.buttonColor} ${price.buttonHoverColor} md:py-4 md:text-lg md:px-10`}
                  >
                    Start Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Small screens */}
          <div className="lg:hidden flex flex-col items-center relative">
            <button
              onClick={prevPricing}
              className="absolute left-0 z-10 bg-white shadow rounded-full p-2 ml-2"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <IoIosArrowBack className="w-6 h-6 text-violet-700" />
            </button>

            <div className="w-full flex justify-center">
              <div
                className={`bg-white rounded-lg shadow-lg p-6 w-[90%] flex flex-col justify-center items-center ${pricing[currentIndexPricing].backgroundHoverColor}`}
              >
                <h3
                  className={`text-2xl font-extrabold ${pricing[currentIndexPricing].text} pb-4`}
                >
                  {pricing[currentIndexPricing].title}
                </h3>
                <p
                  className={`text-3xl font-extrabold ${pricing[currentIndexPricing].text} pb-4`}
                >
                  {pricing[currentIndexPricing].value}
                </p>
                <p className="text-gray-500 pb-4">
                  {pricing[currentIndexPricing].description}
                </p>
                <div className="rounded-md shadow">
                  <button
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md
                  text-white ${pricing[currentIndexPricing].buttonColor} ${pricing[currentIndexPricing].buttonHoverColor}`}
                  >
                    Start Now
                  </button>
                </div>
              </div>
              <button
                onClick={nextPricing}
                className="absolute right-0 z-10 bg-white shadow rounded-full p-2 mr-2"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <IoIosArrowForward className="w-6 h-6 text-violet-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Contact*/}
      <div className="pt-12 pb-1 sm:pb-12 bg-gray-50 border-none" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Reach Out to Us
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We’re ready to help you find the perfect solution for your lab
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-10 p-6 bg-violet-200 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Name"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="phone"
              >
                Phone number
              </label>
              <input
                type="phone"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Phone number"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="phone"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent 
                resize-none"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-violet-700 text-white px-4 py-2 rounded-md  hover:bg-violet-500 transition">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Free trial Section */}
      <div className="bg-violet-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-violet-200">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent 
              text-base font-medium rounded-md text-violet-700 bg-white hover:bg-violet-200"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#applications"
                    className="text-gray-300 hover:text-white"
                  >
                    Applications
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-center">
              &copy; 2025 LabCollector. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
