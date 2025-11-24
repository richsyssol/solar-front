import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";

const AboutUsCompact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
              alt="MASMA Association"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
            {/* Years Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#005aa8]">20</div>
                <div className="text-lg font-semibold text-[#ed6605]">
                  Years
                </div>
                <div className="text-sm text-gray-500">of Legacy</div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            ref={ref}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-[#005aa8]">
              Welcome To Our Association
            </h2>

            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800">
                President's Message
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                MASMA is an association of the Solar PV and Solar water heater
                industry, Engaging the manufacturers, installers, and suppliers
                not only in Maharashtra but from various other states of India.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-justify">
                We Interact and coordinate with Central Ministry MNRE, State
                ministry, and State Nodal Agencies to bring awareness to
                national programs and policies for benefit of citizens to adopt
                the use of Solar Systems and other renewable energy systems.
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
                MASMA is also pledged to bring nationalized and cooperative
                banks to the mainstream of the industry, which provides banking
                solutions in the interest scheme like govt. subsidy.
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
                We organize and conduct training programs for installers,
                plumbers, and marketers coordinating and cooperating with other
                industry associations and Chambers of Commerce for modifying and
                altering policies that are detrimental to the growth of the
                industry.
              </p>
            </div>

            <motion.button
              className="flex items-center space-x-2 px-6 py-3 bg-[#ed6605] text-white rounded-lg font-semibold hover:bg-[#d45a04] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span>Read More</span>
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCompact;
