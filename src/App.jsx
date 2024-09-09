// import React from "react";

// const Portfolio = () => {
//   return (
//     <div className="bg-[#FFF8E8] min-h-screen p-8 font-sans">
//       {/* Header Section */}
//       <header className="text-center">
//         <h1 className="text-4xl font-bold text-[#674636] mb-4">
//           [Aspirant's Name]
//         </h1>
//         <p className="text-lg text-[#674636]">
//           Aspiring MBA | Future Business Leader
//         </p>
//         <div className="mt-6">
//           <button className="bg-[#AAB396] text-[#FFF8E8] px-4 py-2 rounded-md shadow-md hover:bg-[#674636] hover:text-white transition duration-300">
//             Download Resume
//           </button>
//         </div>
//       </header>

//       {/* Summary Section */}
//       <section className="mt-12 bg-[#F7EED3] p-8 rounded-md shadow-lg">
//         <h2 className="text-2xl font-bold text-[#674636] mb-4">Summary</h2>
//         <p className="text-[#674636]">
//           A highly motivated and bright individual with a passion for business
//           strategy and entrepreneurship. Hardworking and dedicated to her
//           studies, she aims to pursue an MBA to develop the skills necessary for
//           becoming a successful businesswoman and entrepreneur. Known for her
//           intelligence, leadership, and problem-solving abilities, she is
//           determined to achieve her dream of leading her own business ventures.
//         </p>
//       </section>

//       {/* Education Section */}
//       <section className="mt-12 bg-[#F7EED3] p-8 rounded-md shadow-lg">
//         <h2 className="text-2xl font-bold text-[#674636] mb-4">Education</h2>
//         <div className="space-y-6">
//           <div className="bg-white p-4 rounded-md shadow-sm">
//             <h3 className="text-xl font-bold text-[#674636]">10th (CBSE Board)</h3>
//             <p className="text-[#674636]">Year of Completion: [Year]</p>
//             <p className="text-[#674636]">Percentage: [Placeholder for Percentage]</p>
//           </div>
//           <div className="bg-white p-4 rounded-md shadow-sm">
//             <h3 className="text-xl font-bold text-[#674636]">PUC Science</h3>
//             <p className="text-[#674636]">Year of Completion: [Year]</p>
//             <p className="text-[#674636]">Percentage: [Placeholder for Percentage]</p>
//           </div>
//           <div className="bg-white p-4 rounded-md shadow-sm">
//             <h3 className="text-xl font-bold text-[#674636]">Bachelor of Arts</h3>
//             <p className="text-[#674636]">University: [University Name]</p>
//             <p className="text-[#674636]">Percentage: [Placeholder for Percentage]</p>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="mt-12 bg-[#F7EED3] p-8 rounded-md shadow-lg">
//         <h2 className="text-2xl font-bold text-[#674636] mb-4">Skills</h2>
//         <ul className="text-[#674636] space-y-2">
//           <li>Leadership & Teamwork</li>
//           <li>Problem-solving & Analytical Thinking</li>
//           <li>Effective Communication</li>
//           <li>Time Management</li>
//           <li>Strategic Planning</li>
//           <li>Financial Acumen</li>
//         </ul>
//       </section>

//       {/* Certifications & Achievements */}
//       <section className="mt-12 bg-[#F7EED3] p-8 rounded-md shadow-lg">
//         <h2 className="text-2xl font-bold text-[#674636] mb-4">Certifications & Achievements</h2>
//         <ul className="text-[#674636] space-y-2">
//           <li>[Placeholder for Certification 1]</li>
//           <li>[Placeholder for Certification 2]</li>
//           <li>[Placeholder for Achievement 1]</li>
//           <li>[Placeholder for Achievement 2]</li>
//         </ul>
//       </section>

//       {/* Contact Section */}
//       <footer className="mt-12 text-center text-[#674636]">
//         <p>Contact: [Email] | [LinkedIn]</p>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;
import React from "react";
import Example from "./Example";


const Portfolio = () => {
  return (

    <>
  <Example/>
    <div className="bg-[#FFF8E8] min-h-screen p-8 font-sans">
      {/* Header Section */}
      <header className="text-center">
  {/* Profile Picture Placeholder */}
  <div className="w-32 h-32  mx-auto rounded-full bg-[#AAB396] mb-4 flex items-center justify-center">
    <span className="text-[#FFF8E8] text-xl font-bold">Profile Pic</span>
  </div>
  <h1 className="text-4xl font-bold text-[#674636] mb-4">
 Shraddha Dummi
  </h1>
  <p className="text-lg text-[#674636]">
    Aspiring MBA | Future Business Leader
  </p>

  {/* Contact Information */}
  <div className="mt-4 flex justify-center items-center flex-wrap  gap-4">
    <p className="text-[#674636]">Phone: +91 6361769148</p>
    <p className="text-[#674636]">Email: hrishivastrad14@gmail.com</p>
    <p className="text-[#674636]">LinkedIn: <a href="[LinkedIn Profile URL]" className="text-blue-500 underline">[LinkedIn Profile]</a></p>
    <p className="text-[#674636]">Address: Bengaluru, Karnataka</p>
  </div>

  <div className="mt-6">
  <a href="/resume.pdf" download="Resume.pdf">
    <button className="bg-[#AAB396] text-[#FFF8E8] px-4 py-2 rounded-md shadow-md hover:bg-[#674636] hover:text-white transition duration-300">
      Download Resume
    </button>
  </a>
</div>

</header>


      {/* Summary Section */}
      <section className="mt-12 bg-[#F7EED3] p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-[#674636] mb-4">Summary</h2>
        <p className="text-[#674636]">
          A highly motivated and bright individual with a passion for business
          strategy and entrepreneurship. Hardworking and dedicated to her
          studies, she aims to pursue an MBA to develop the skills necessary for
          becoming a successful businesswoman and entrepreneur. Known for her
          intelligence, leadership, and problem-solving abilities, she is
          determined to achieve her dream of leading her own business ventures.
        </p>
      </section>

      {/* Education Section */}
      <section className="mt-12 bg-[#F7EED3] p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-[#674636] mb-4">Education</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-bold text-[#674636]">10th (CBSE Board)</h3>
            <p className="text-[#674636]">Year of Completion: [Year]</p>
            <p className="text-[#674636]">Percentage: [Placeholder for Percentage]</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-bold text-[#674636]">PUC Science</h3>
            <p className="text-[#674636]">Year of Completion: [Year]</p>
            <p className="text-[#674636]">Percentage: [Placeholder for Percentage]</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-bold text-[#674636]">Bachelor of Arts</h3>
            <p className="text-[#674636]">University: [University Name]</p>
            <p className="text-[#674636]">Percentage: [Placeholder for Percentage]</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-12 bg-[#F7EED3] p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-[#674636] mb-4">Skills</h2>
        <ul className="text-[#674636] space-y-2">
          <li>Leadership & Teamwork</li>
          <li>Problem-solving & Analytical Thinking</li>
          <li>Effective Communication</li>
          <li>Time Management</li>
          <li>Strategic Planning</li>
          <li>Financial Acumen</li>
        </ul>
      </section>

      {/* BA Project Section */}
  {/* BA Project Section */}
<section className="mt-12 bg-[#F7EED3] p-8 rounded-md shadow-lg">
  <h2 className="text-2xl font-bold text-[#674636] mb-4">
    Relevant Project (Bachelor of Arts)
  </h2>
  <p className="text-[#674636]">
    <strong>Project Title: Optimizing Consumer Engagement in the Online Grocery Market</strong>
    <br />
    <strong>Description:</strong> This project focused on analyzing the shifting trends in consumer behavior within the growing online grocery market. With the rise of e-commerce, particularly in the grocery sector, the project explored methods to increase customer retention and optimize user experience.
    <br /><br />
    <strong>Key Areas Covered:</strong>
    <ul className="list-disc ml-6">
      <li>Consumer Behavior Analysis: Collected data on purchasing habits, delivery preferences, and shopping patterns in urban and semi-urban areas.</li>
      <li>Market Trend Analysis: Studied the impact of local and global economic trends on grocery e-commerce, including inflation and delivery costs.</li>
      <li>Strategic Recommendations: Proposed strategies to enhance customer engagement through personalized recommendations, improving app usability, and implementing loyalty programs.</li>
    </ul>
    <br />
    <strong>Outcomes:</strong> The project improved understanding of consumer buying patterns in online grocery platforms and suggested ways to reduce cart abandonment and boost customer loyalty. A mobile-first interface design increased sales conversions by 15% in a simulated business environment.
  </p>
</section>


      {/* Certifications & Achievements */}
      <section className="mt-12 bg-[#F7EED3] p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-[#674636] mb-4">
          Certifications & Achievements
        </h2>
        <ul className="text-[#674636] space-y-2">
          <li>[Placeholder for Certification 1]</li>
          <li>[Placeholder for Certification 2]</li>
          <li>[Placeholder for Achievement 1]</li>
          <li>[Placeholder for Achievement 2]</li>
        </ul>
      </section>

      {/* Contact Section */}
      <footer className="mt-12 text-center text-[#674636]">
        <p>Contact: [Email] | [LinkedIn]</p>
      </footer>
    </div>
    </>
  );
};

export default Portfolio;
