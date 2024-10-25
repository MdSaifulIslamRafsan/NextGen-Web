
const TermsAndConditions = () => {
  return (
    <div className="max-w-[1440px] w-10/11 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to ContestHub! By accessing or using ContestHub, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully. If you do not agree with any part of these terms, you may not use the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years of age to register, participate in contests, or create contests on ContestHub. Contest creators and participants are responsible for ensuring compliance with any applicable laws or regulations related to the contests they engage in.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Account Registration</h2>
      <p className="mb-4">
        When creating an account, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account information and are liable for all activities that occur under your account.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Roles and Permissions</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Admin:</strong> Has access to manage users and contests, approve or reject contests, and block or unblock users as needed.</li>
        <li><strong>Contest Creator:</strong> Authorized to create, update, and manage contests, and to declare contest winners.</li>
        <li><strong>User:</strong> Can participate in contests, track their contest history, and update their profile.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Intellectual Property</h2>
      <p className="mb-4">
        All content submitted to ContestHub, including text, images, and other media, must be original or have proper authorization from the content creator. By submitting content on ContestHub, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and modify the content as necessary for the operation of the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Contest Rules and Participation</h2>
      <p className="mb-4">
        All contests on ContestHub are governed by specific rules set by the contest creator. Participants must comply with these rules to remain eligible. Contest creators are responsible for ensuring that contests are fair, transparent, and in compliance with {`ContestHub's`} guidelines.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Payments and Prizes</h2>
      <p className="mb-4">
        Payments made for contest participation are non-refundable. ContestHub is not liable for any disputes regarding prize allocation or contest outcomes. All decisions made by contest creators are final.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Prohibited Activities</h2>
      <p className="mb-4">
        You may not use ContestHub to post or distribute content that is illegal, offensive, or infringes upon the rights of others. Unauthorized access, hacking, or attempts to compromise the platform’s security are strictly prohibited and will result in account termination.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Data Privacy</h2>
      <p className="mb-4">
        We are committed to protecting your personal information. By using ContestHub, you agree to our data collection, usage, and storage practices as described in our Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Limitation of Liability</h2>
      <p className="mb-4">
        ContestHub is not liable for any direct, indirect, or incidental damages resulting from the use or inability to use the platform. ContestHub does not guarantee the accuracy or reliability of any content posted by users.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">10. Termination of Service</h2>
      <p className="mb-4">
        ContestHub reserves the right to terminate or suspend your account without notice if you violate any of these terms. You may also terminate your account at any time; however, all outstanding payments and obligations must be fulfilled prior to termination.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">11. Amendments to Terms</h2>
      <p className="mb-4">
        ContestHub reserves the right to modify or replace these terms at any time. Any changes will be posted on this page, and continued use of the platform constitutes acceptance of the modified terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">12. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by the laws of the jurisdiction where ContestHub operates. Any disputes arising from these terms shall be resolved in the applicable legal venue.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@conteshtub.com" className="text-blue-600 hover:underline">support@conteshtub.com</a>.
      </p>

      <p className="text-sm mt-6 text-gray-500">Last Updated: 25/10/2024</p>
    </div>
  );
};

export default TermsAndConditions;
