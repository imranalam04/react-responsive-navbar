import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Accordion = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Who's the ideal client for WGMI Labs?",
      answer:
        "WGMI Labs is the perfect partner for entrepreneurs and businesses of all sizes, looking to develop Software or enhance their operations with the power of advanced technology. We understand the hurdles of hiring a full-time developer – the time spent vetting candidates, the high costs, and the risk of mismatched skill sets.",
    },
    {
      id: 2,
      question: "Why wouldn't I just hire a full-time developer?",
      answer:
        "Excellent question! Hiring a full-time senior developer can be costly, with an average annual salary exceeding $120,000, plus the extra costs of benefits. The hiring process itself can also be lengthy and challenging. More importantly, your workload might fluctuate, leading to periods when you don't have enough tasks to fully utilize a full-time developer. By using our subscription agency membership, you only pay for the development work you need, enjoy the flexibility to pause or resume your subscription as required, and avoid the financial burden of an underutilized in-house developer.",
    },
    {
      id: 3,
      question: "Is there a limit to how many tasks or projects I can have?",
      answer:
        "With our subscription service, you can add or edit as many tasks in your queue as you need. Our team will compile multiple tasks in your queue and turn them into weekly . Tasks inside of a sprint will be completed that week, and each week a new sprint will be created, comprised of new tasks.  Each task in a sprint will go into once completed ensuring that it's completed to your satisfaction before moving on.",
    },
    {
      id: 4,
      question: "How long does it take to complete a development task?",
      answer:
        "The turnaround time for your software depends on the complexity of the task. On average, most tasks requests are completed in just 24-72 hours. However, more complex tasks may take longer to finish",
    },
    {
      id: 5,
      question: "What if I'm not satisfied with the software solution?",
      answer:
        "No worries! Your satisfaction is our priority. If you're not happy with the software solution, we'll work on revising it until you're 100% satisfied with the result.",
    },
    {
      id: 6,
      question:
        "What happens if I don't need development work for a certain month?",
      answer: 
        "If you don't need any work for a specific month, you can pause your subscription and resume it when you need our services again. There are no penalties or additional fees for pausing your subscription.",
    },
    {
      id: 7,
      question: "Is there a Refund Policy?",
      answer:
        "Due to the high quality nature of the work, there will be no refunds issued once a Task is active and has started.",
    },
  ];
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-[89%] m-auto max-w-[1400px] bg-gray-300 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-6 font-semibold">
          Frequently Asked Questions
        </h2>
        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md 
              flex justify-between items-center" onClick={() => setActiveQuestion(q.id)}
            >
              {q.question}
              {activeQuestion === q.id ? (
                <FaMinusCircle onClick={() => setActiveQuestion(null)} />
              ) : (
                <FaPlusCircle onClick={() => setActiveQuestion(q.id)} />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  key={q.id}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-2">
                    {q.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
