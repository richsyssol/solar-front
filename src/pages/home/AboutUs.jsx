import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";

const AboutUsCompact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="MASMA Association"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Years Badge - Responsive positioning */}
            <div className="absolute -bottom-4 left-0 right-0 mx-auto lg:mx-0 lg:-bottom-6 lg:right-0 lg:left-auto bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg max-w-[140px] sm:max-w-[160px] lg:max-w-none">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#005aa8]">
                  20
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#ed6605]">
                  Years
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  of Legacy
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            ref={ref}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#005aa8] leading-tight">
                Welcome To Our Association
              </h2>
              <div className="w-16 h-1 bg-[#ed6605] rounded-full mx-auto lg:mx-0 mt-3 mb-4"></div>
            </div>

            {/* President's Message Section */}
            <div className="space-y-3 md:space-y-4">
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  MASMA is an association of the Solar PV and Solar water heater
                  industry, Engaging the manufacturers, installers, and
                  suppliers not only in Maharashtra but from various other
                  states of India.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  We Interact and coordinate with Central Ministry MNRE, State
                  ministry, and State Nodal Agencies to bring awareness to
                  national programs and policies for benefit of citizens to
                  adopt the use of Solar Systems and other renewable energy
                  systems.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  MASMA is also pledged to bring nationalized and cooperative
                  banks to the mainstream of the industry, which provides
                  banking solutions in the interest scheme like govt. subsidy.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  We organize and conduct training programs for installers,
                  plumbers, and marketers coordinating and cooperating with
                  other industry associations and Chambers of Commerce for
                  modifying and altering policies that are detrimental to the
                  growth of the industry.
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <motion.div
              className="flex justify-center lg:justify-start pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className="flex items-center space-x-2 px-6 py-3 bg-[#ed6605] text-white rounded-lg font-semibold hover:bg-[#d45a04] transition-colors shadow-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read More</span>
                <FaArrowRight className="text-xs sm:text-sm" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          className="lg:hidden grid grid-cols-3 gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-lg p-3 text-center shadow border border-gray-200">
            <div className="text-base font-bold text-[#005aa8]">500+</div>
            <div className="text-xs text-gray-600 mt-1">Members</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center shadow border border-gray-200">
            <div className="text-base font-bold text-[#005aa8]">1000+</div>
            <div className="text-xs text-gray-600 mt-1">Projects</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center shadow border border-gray-200">
            <div className="text-base font-bold text-[#005aa8]">50+</div>
            <div className="text-xs text-gray-600 mt-1">Cities</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsCompact;
