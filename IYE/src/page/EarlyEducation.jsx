import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Testimonials from './NurseryPrents';

const EarlyEducation = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="max-w-5xl mx-auto p-6 mt-12 space-y-8 text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">💡 Because Early Education Shapes the Future!</h1>
          <p className="mt-2 text-lg">
            At Illuminate Your Education (IYE), we nurture, engage, and develop essential life skills in your child. <br />
            <span>Our structured program is carefully designed by child psychologists and educators</span>
          </p>
        </div>

        {/* Video Section
        <div className="flex justify-center">
          <video className="w-3/4 rounded-lg shadow-lg" controls>
            <source src="/videos/nursery_lkg_ukg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}

        {/* Graphical Representation
        <div className="flex justify-center">
          <img src="/images/education_graphic.png" alt="Educational Representation" className="w-3/4 rounded-lg shadow-lg" />
        </div> */}

        {/* Why Choose IYE Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">🌱 Why Choose IYE for Your Child?</h2>
          <ul className="pl-5 space-y-2">
            <li>✔ Expert & Trained Teacher – A Perfect Balance of Learning, Discipline & Fun!
              Our well-trained educators provide personalized attention, focusing on every aspect of early learning. Unlike traditional tuition, we nurture young minds with care and responsibility. Our Nursery & Kindergarten teachers follow a child-centered approach, creating a safe and engaging learning environment.
            </li>
            <li>✔ Parent Involvement in the Learning Journey.
              We ensure that parents stay informed about how their child is learning and growing. (Fortnightly – Alternate Sunday of month).
              We don’t just teach subjects—we develop essential skills that help children excel in academics and beyond!

            </li>
            <li>✔ Play-Based Learning for Holistic Growth in cognitive & creative development.</li>
            <li>✔ Curriculum Focused on Overall Growth, beyond just subjects.</li>
          </ul>
        </div>

        {/* Learning Approach Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">📖 Our Learning Approach – More Than Just Studies!</h2>
          <ul className="pl-5 space-y-2">
            <li>🧠 Nurturing Young Minds with care, discipline & fun!</li>
            <li>🔹 Balanced Guidance – Teachers maintain a structured yet friendly approach, ensuring children stay on track while learning in a playful manner.</li>
            <li>🔹 Small Rewards, Big Motivation – Chocolates, stickers & fun incentives.</li>
            <li>🔹 Play-Based Bonding – Interactive games, storytelling, and creative activities make learning engaging & joyful.</li>
            <li>🔹 Active Learning – No Passive Sitting! Teachers move with students.</li>
            <li>🔹 Encouraging Curiosity – 90% of children hesitate to ask questions. At IYE, we nurture curiosity, confidence, and creative thinking from an early age!</li>
          </ul>
        </div>

        {/* Extra Skills Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">🎨 Extra Skill-Based Learning for Nursery & KG</h2>
          <ul className="pl-5 space-y-2">
            <li>📖 Storytelling Sessions – Ignite Imagination! It helps in emotional development of children.
              <br />✔ Improves language skills, vocabulary, and listening abilities
            </li>
            <li>🎨 Art & Craft – Enhances hand-eye coordination & creativity.</li>
            <li>🎭 Sensory Play – Engaging & Developmental Activities!
              <br />
              ✔ Balance & Coordination Games – Stacking cups, arranging cups in lines to develop stability & motor skills.
              <br />
              ✔ Water Play & Pouring Activities – Helps in understanding measurement, balance, and fine motor control.
              <br />
              ✔ Dough Play (Clay Molding) – Strengthens hand muscles & creativity.
              <br />
              ✔ Sound Play with Objects – Enhances auditory learning & cognitive skills.
            </li>
          </ul>
        </div>

        {/* Sensory Activities Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">🎯 Fun & Engaging Sensory Activities for Home Tutoring</h2>
          <ul className="pl-5 space-y-2">
            <li>🎭 Feely Bag Game – Identifying objects by touch.</li>
            <li>🎈 Bubble Wrap Popping – Improves finger strength.</li>
            <li>🔮 Sensory Bottles – Helps in visual tracking & calming.</li>
            <li>🖐 Textured Balls – Enhances hand strength & sensory response.</li>
            <li>👃 Scent Guessing Game – Strengthens sense of smell & memory.</li>
            <li>🔮 Sensory Bottles (Shake & Watch) – Helps in visual tracking & calming the mind.</li>
          </ul>
        </div>



         {/* Pictorial & Listening Experiments*/}
         <div className="space-y-4">
          <h2 className="text-2xl font-semibold">🎶 Pictorial & Listening Experiments – Engaging & Effective Learning!</h2>
          <ul className="pl-5 space-y-2">
            <li>🎨 Pictorial Learning – Kids match shapes, objects, and colours to enhance visual recognition & vocabulary.</li>
            <li>🔊 Animated Listening Activities – Children identify animal sounds, vehicle noises, and nature sounds through fun exercises.</li>
            <li>🎵 Listening & Command-Based Learning – Improves focus & listening skills through interactive movement activities like:
              <br />
              ✔ Clap, Jump, Wave, Stretch, March.
              <br />
              ✔ Recognizing sounds & matching them to objects.
              <br />
              ✔ Sing-along rhymes.
            </li>
            
          </ul>
        </div>

        {/* Promises to Parents */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">📢 Promises to Parents – What Sets Us Apart!</h2>
          <ul className="pl-5 space-y-2">
            <li>✔ Beyond Just Teaching – We Take Responsibility!
              <br />
              Unlike many teachers who focus only on fees, we ensure overall development & structured learning for every child.
            </li>
            <li>✔ Transparent Learning – Stay informed about your child’s progress.</li>
            <li>✔ Expert & Trained Educators – Structured learning for success.</li>
            <li>✔ Engaging & Transparent Learning - Parents stay informed about their child’s learning journey and development.</li>
            <li>📞 Real-Time Teacher Arrival & Departure Notifications – Get updates for complete transparency.</li>
            <li>🔄 Teacher Replacement Policy – 100% Satisfaction Guaranteed!
              <br />
              ✔ 3-Day Free Demo – Experience our teaching first!
              <br />
              ✔ Not satisfied? Get a teacher change within 3 days.
              <br />
              ✔ 100% Fee Refund if Not Satisfied Within the First Week!
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-red-400 text-white py-12 text-center">
          <h2 className="text-2xl font-semibold">Enroll Your Child Today!</h2>
          <p className="mt-2 text-lg">Give your child the best start to their education journey.</p>
          <button className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200 transition">
            <a href="https://wa.me/message/2KRZEEKQKG2ID1">Get Started</a>
          </button>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default EarlyEducation;
