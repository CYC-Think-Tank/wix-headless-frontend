"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { wixClient } from "@/lib/wixClient";
import { useRegistration } from "@/components/RegistrationContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    school: "",
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
    phone: "",
    parentNameTop: "",
    emergencyEmail: "",
    emergencyPhone: "",
    grade: "",
    hasTeam: "",
    teammates: "",
    projectOption: "",
    waiverAgreed: false,
    participantSignature: "",
    participantDate: "",
    parentGuardianNameBottom: "",
    parentSignature: "",
    parentDate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { registrationOpen, registrationClosedDate } = useRegistration();

  let reopenMonthStr = "a later date";
  if (registrationClosedDate) {
    const closedDate = new Date(registrationClosedDate);
    closedDate.setMonth(closedDate.getMonth() + 4);
    reopenMonthStr = closedDate.toLocaleString('default', { month: 'long' });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await wixClient.items.insert("Registrations", formData);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error("Failed to submit registration:", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50 relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      <section className="relative w-full min-h-[100vh] flex items-center justify-center pt-32 pb-24 px-6 lg:px-8">
        {/* Background Elements */}
        <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-cyc-teal/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyc-yellow/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-4xl relative z-10"
        >
          <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl border border-gray-100 relative">
            <div className="mb-10 pb-6 border-b border-gray-100">
              <h1 className="text-4xl lg:text-5xl font-black text-cyc-navy tracking-tight mb-4">Sign Up</h1>
              <p className="text-gray-500">Please fill out all required fields below to complete your registration.</p>
            </div>

            {!registrationOpen ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8">
                  <Clock className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Registration is Closed</h3>
                <p className="text-gray-600 text-lg mb-10 max-w-lg">
                  We are not currently accepting new registrations for the regular program. 
                  Please check back in <strong>{reopenMonthStr}</strong> for the next semester!
                </p>
              </div>
            ) : isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Registration Complete!</h3>
                <p className="text-gray-600 text-lg mb-10 max-w-lg">Thank you for registering. We've received your information and will be in touch shortly.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Register Another Person
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {errorMsg && (
                  <div className="p-5 bg-red-50 text-red-700 font-medium rounded-xl border border-red-100 flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
                    {errorMsg}
                  </div>
                )}

                {/* Section 1: Personal Info */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="school" className="text-sm font-bold text-gray-700">School *</label>
                    <input type="text" id="school" name="school" required value={formData.school} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="firstName" className="text-sm font-bold text-gray-700">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="lastName" className="text-sm font-bold text-gray-700">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email (Cannot be school domains gapps/ycdsb/yrdsb) *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="postalCode" className="text-sm font-bold text-gray-700">Postal Code *</label>
                    <input type="text" id="postalCode" name="postalCode" required value={formData.postalCode} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="parentNameTop" className="text-sm font-bold text-gray-700">If under 18, Parent/Guardian Name: *</label>
                    <input type="text" id="parentNameTop" name="parentNameTop" value={formData.parentNameTop} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="emergencyEmail" className="text-sm font-bold text-gray-700">Emergency Contact Email *</label>
                    <input type="email" id="emergencyEmail" name="emergencyEmail" required value={formData.emergencyEmail} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="emergencyPhone" className="text-sm font-bold text-gray-700">Emergency Contact Phone *</label>
                    <input type="tel" id="emergencyPhone" name="emergencyPhone" required value={formData.emergencyPhone} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                  </div>
                </div>

                {/* Section 2: Grade & Teams */}
                <div className="flex flex-col gap-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-gray-700">Grade</label>
                    <div className="flex flex-col gap-2">
                      {["9", "10", "11", "12"].map((g) => (
                        <label key={g} className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="grade" value={g} checked={formData.grade === g} onChange={handleChange} className="w-4 h-4 text-cyc-teal border-gray-300 focus:ring-cyc-teal" />
                          <span className="text-gray-700">{g}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-gray-700">Do you already have a team? *</label>
                    <div className="flex flex-col gap-2">
                      {["Yes", "No"].map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="hasTeam" value={opt} required checked={formData.hasTeam === opt} onChange={handleChange} className="w-4 h-4 text-cyc-teal border-gray-300 focus:ring-cyc-teal" />
                          <span className="text-gray-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.hasTeam === "Yes" && (
                    <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <label htmlFor="teammates" className="text-sm font-bold text-gray-700">If you chose "YES" for the above question, list your teammates below:</label>
                      <input type="text" id="teammates" name="teammates" value={formData.teammates} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" placeholder="Add your teammates" />
                    </div>
                  )}

                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-gray-700">Project Options:</label>
                    <div className="flex flex-col gap-2">
                      {["CYC Think Tank", "Senior Care", "Others"].map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="projectOption" value={opt} checked={formData.projectOption === opt} onChange={handleChange} className="w-4 h-4 text-cyc-teal border-gray-300 focus:ring-cyc-teal" />
                          <span className="text-gray-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Waiver */}
                <div className="flex flex-col gap-6 pt-8 mt-4 border-t border-gray-200">
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">CYC Volunteer Waiver and Consent Form</h2>
                  <p className="text-gray-700 font-medium">Please read and sign below:</p>
                  
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div>
                      <h4 className="font-bold text-gray-800 text-base mb-1">1. Volunteer Participation</h4>
                      <p>I understand that participation in CYC activities is voluntary, and I agree to follow all CYC rules and safety instructions.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base mb-1">2. Assumption of Risk</h4>
                      <p>I understand that volunteer activities may involve certain risks (such as physical activities, travel, and interaction with others), and I accept these risks.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base mb-1">3. Release of Liability</h4>
                      <p>In consideration of being permitted to participate, I release and hold harmless Canadian Youth Champions (CYC), its directors, officers, employees, partners, sponsors, and volunteers from claims arising from participation, except in cases of gross negligence.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base mb-1">4. Medical Authorization</h4>
                      <p>In an emergency, I authorize CYC to obtain medical care for the participant if needed. I understand I am responsible for any related costs.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base mb-1">5. Media Consent</h4>
                      <p>I permit CYC to use photos or videos taken during activities for promotional and reporting purposes.</p>
                    </div>
                  </div>

                  <label className="flex items-start gap-4 mt-2 cursor-pointer group">
                    <div className="mt-1">
                      <input type="checkbox" name="waiverAgreed" required checked={formData.waiverAgreed} onChange={handleChange} className="w-5 h-5 text-cyc-teal rounded border-gray-300 focus:ring-cyc-teal" />
                    </div>
                    <span className="text-sm text-gray-700 leading-snug group-hover:text-gray-900 transition-colors">
                      I acknowledge that the information provided is true and accurate and that I have read, understood, and will abide by the Volunteer Agreement above. I grant the CYC permission to contact the references listed on my application form and follow up on any information provided.
                    </span>
                  </label>
                </div>

                {/* Section 4: Signatures */}
                <div className="flex flex-col gap-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="participantSignature" className="text-sm font-bold text-gray-700">Participant Signature *</label>
                      <input type="text" id="participantSignature" name="participantSignature" required value={formData.participantSignature} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 border-b-2 border-b-gray-400 rounded-none focus:ring-0 focus:border-b-cyc-teal outline-none transition-all placeholder:text-gray-300 italic font-serif text-xl" placeholder="Type your full name" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="participantDate" className="text-sm font-bold text-gray-700">Date *</label>
                      <input type="date" id="participantDate" name="participantDate" required value={formData.participantDate} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all text-gray-700" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-bold text-gray-900 mb-4">If the participant is under 18, the parent/guardian must sign below:</p>
                    
                    <div className="flex flex-col gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="parentGuardianNameBottom" className="text-sm font-bold text-gray-700">Participant/Guardian Name *</label>
                        <input type="text" id="parentGuardianNameBottom" name="parentGuardianNameBottom" value={formData.parentGuardianNameBottom} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all placeholder:text-gray-400" />
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6 mt-2">
                        <div className="flex flex-col gap-2 flex-1">
                          <label htmlFor="parentSignature" className="text-sm font-bold text-gray-700">Parent Signature *</label>
                          <input type="text" id="parentSignature" name="parentSignature" value={formData.parentSignature} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 border-b-2 border-b-gray-400 rounded-none focus:ring-0 focus:border-b-cyc-teal outline-none transition-all placeholder:text-gray-300 italic font-serif text-xl" placeholder="Type your full name" />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                          <label htmlFor="parentDate" className="text-sm font-bold text-gray-700">Date *</label>
                          <input type="date" id="parentDate" name="parentDate" value={formData.parentDate} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyc-teal/20 focus:border-cyc-teal outline-none transition-all text-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5: Video Info & Submission */}
                <div className="flex flex-col gap-6 pt-10 mt-4 border-t border-gray-200">
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">2-Minute Intro Video Submission</h2>
                  <p className="text-gray-600 text-sm">Once the form is submitted, we will <strong className="text-gray-900">send you a confirmation and next-steps email regarding a</strong> 2-minute video interview submission.</p>

                  <div className="mt-4">
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-4">What Happens Next?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm font-medium">
                      <li>Selected students will be <strong>contacted by March 18 th</strong></li>
                      <li>Questions? Reach out to <strong>your local CYC chapter or email (admin@thecyc.org)</strong></li>
                    </ul>
                    <p className="mt-6 text-gray-700 font-medium">Thanks for submitting!</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 px-6 py-4 bg-[#2ab1c5] text-white font-bold rounded-md hover:bg-[#2395a6] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg tracking-wide"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
