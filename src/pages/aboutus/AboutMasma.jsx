import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";
import founder from "../../assets/image/founder.jpg";
import OurObjective from "./OurObjective";

const AboutMasma = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-16 bg-gray-100 pt-40">
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
              src={founder}
              alt="MASMA Association"
              className="w-full h-[700px] object-cover rounded-2xl"
            />
            {/* Years Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#005aa8]">
                  Mr. Shashikant Wakade
                </div>
                <div className="text-lg font-semibold text-[#ed6605]">
                  President
                </div>
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
              <h3 className="text-2xl font-semibold text-[#ed6605]">
                President's Message
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                I am honored to be the incoming President of MASMA and I want to
                acknowledge the leadership and support provided by our board
                members and past presidents. I am excited to welcome the new
                board directors, new and renewing members. There is a definite
                common urge to see advancements in solar energy’s future. MASMA
                is the right vehicle to add fuel to this while delivering value
                to each and every member.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-justify">
                I’m proud of MASMA successes over years, particularly in
                providing more opportunities for our members. In the year ahead,
                we will continue these initiatives, as well as adding
                furthermore training and awareness to promote solar energy,
                aligning the interests of both solar promoters and consumers to
                harness maximum solar energy and events held in collaboration
                with other organizations and regional chapters.
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
                We can take this organization, which has come this far, further
                by joining our forces and moving towards the same goal. To
                overcome the challenges we face, we need to our knowledge and
                act more organized. Everyone who contributes to this sustainable
                sector should gather under the roof of the MASMA. . We would
                like to invite not only business, EPC who are working in this
                field to be active members of MASMA but also collaborations with
                different organizations working for climate change. May the
                power from our collaboration get stronger for our future
                generation, our state, our country…
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
                All of the MASMA is focused on enriching your experience as
                members, so if you have an idea, suggestion, or would like to
                get involved, feel free to reach out to me, any of our board
                members/leaders
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMasma;
