import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";

const Register = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Basic information
    name: "",
    email: "",
    phone: "",
    password: "",

    // Personal information
    dateOfBirth: "",
    gender: "",
    profileImage: "",

    // Address
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },

    // Social links
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: "",
      website: "",
    },

    // Professional information
    profession: "",
    company: "",

    // Skills
    skills: [],

    // Education
    education: [
      {
        degree: "",
        institution: "",
        startYear: "",
        endYear: "",
      },
    ],

    // Experience
    experience: [
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  });

  // =========================
  // Normal input handler
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // Address handler
  // =========================
  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  // =========================
  // Social links handler
  // =========================
  const handleSocialChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        formData
      );

      console.log("Registration successful:", response.data);

      alert("Account created successfully!");

      // Optional: reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        dateOfBirth: "",
        gender: "",
        profileImage: "",
        address: {
          street: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
        },
        socialLinks: {
          github: "",
          linkedin: "",
          twitter: "",
          website: "",
        },
        profession: "",
        company: "",
        skills: [],
        education: [
          {
            degree: "",
            institution: "",
            startYear: "",
            endYear: "",
          },
        ],
        experience: [
          {
            company: "",
            role: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
      });
     navigate("/login")
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <main className="mx-auto mt-10 max-w-4xl px-4">
      <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">

        {/* Logo */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F2F3FF] p-3">
          <img
            src="/ApexLearn Logo.png"
            alt="ApexLearn Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Create your ApexLearn account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          {/* ================= BASIC INFORMATION ================= */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* ================= PERSONAL INFORMATION ================= */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Date of Birth */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                >
                  <option value="">
                    Select Gender
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="female">
                    Female
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Profile Image */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Profile Image URL
                </label>

                <input
                  type="url"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  placeholder="https://example.com/profile.jpg"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* ================= ADDRESS ================= */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Address
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Street */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Street
                </label>

                <input
                  type="text"
                  name="street"
                  value={formData.address.street}
                  onChange={handleAddressChange}
                  placeholder="Enter street"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.address.city}
                  onChange={handleAddressChange}
                  placeholder="Enter city"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* State */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.address.state}
                  onChange={handleAddressChange}
                  placeholder="Enter state"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Country */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Country
                </label>

                <input
                  type="text"
                  name="country"
                  value={formData.address.country}
                  onChange={handleAddressChange}
                  placeholder="Enter country"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Pincode
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.address.pincode}
                  onChange={handleAddressChange}
                  placeholder="Enter pincode"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Social Links
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Github */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  GitHub
                </label>

                <input
                  type="url"
                  name="github"
                  value={formData.socialLinks.github}
                  onChange={handleSocialChange}
                  placeholder="GitHub URL"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  LinkedIn
                </label>

                <input
                  type="url"
                  name="linkedin"
                  value={formData.socialLinks.linkedin}
                  onChange={handleSocialChange}
                  placeholder="LinkedIn URL"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Twitter */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Twitter
                </label>

                <input
                  type="url"
                  name="twitter"
                  value={formData.socialLinks.twitter}
                  onChange={handleSocialChange}
                  placeholder="Twitter URL"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Website */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Website
                </label>

                <input
                  type="url"
                  name="website"
                  value={formData.socialLinks.website}
                  onChange={handleSocialChange}
                  placeholder="Personal website"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* ================= PROFESSIONAL INFORMATION ================= */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Professional Information
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Profession */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Profession
                </label>

                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="MERN Stack Developer"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* ================= SKILLS ================= */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Skills
            </h2>

            <input
              type="text"
              placeholder="JavaScript, React.js, Node.js"
              value={formData.skills.join(", ")}
              onChange={(e) => {
                const skills = e.target.value
                  .split(",")
                  .map((skill) => skill.trim())
                  .filter(Boolean);

                setFormData((prev) => ({
                  ...prev,
                  skills,
                }));
              }}
              className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
            />

            <p className="mt-2 text-sm text-gray-500">
              Separate skills using commas.
            </p>
          </div>

          {/* ================= EDUCATION ================= */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Education
            </h2>

            {formData.education.map((education, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 p-4 md:grid-cols-2"
              >

                {/* Degree */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Degree
                  </label>

                  <input
                    type="text"
                    value={education.degree}
                    onChange={(e) => {
                      const newEducation = [...formData.education];

                      newEducation[index].degree = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        education: newEducation,
                      }));
                    }}
                    placeholder="MCA"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

                {/* Institution */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Institution
                  </label>

                  <input
                    type="text"
                    value={education.institution}
                    onChange={(e) => {
                      const newEducation = [...formData.education];

                      newEducation[index].institution = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        education: newEducation,
                      }));
                    }}
                    placeholder="University / College"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

                {/* Start Year */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Start Year
                  </label>

                  <input
                    type="number"
                    value={education.startYear}
                    onChange={(e) => {
                      const newEducation = [...formData.education];

                      newEducation[index].startYear = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        education: newEducation,
                      }));
                    }}
                    placeholder="2023"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

                {/* End Year */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    End Year
                  </label>

                  <input
                    type="number"
                    value={education.endYear}
                    onChange={(e) => {
                      const newEducation = [...formData.education];

                      newEducation[index].endYear = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        education: newEducation,
                      }));
                    }}
                    placeholder="2025"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ================= EXPERIENCE ================= */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Experience
            </h2>

            {formData.experience.map((experience, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 p-4 md:grid-cols-2"
              >

                {/* Company */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Company
                  </label>

                  <input
                    type="text"
                    value={experience.company}
                    onChange={(e) => {
                      const newExperience = [...formData.experience];

                      newExperience[index].company = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        experience: newExperience,
                      }));
                    }}
                    placeholder="Company name"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Role
                  </label>

                  <input
                    type="text"
                    value={experience.role}
                    onChange={(e) => {
                      const newExperience = [...formData.experience];

                      newExperience[index].role = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        experience: newExperience,
                      }));
                    }}
                    placeholder="MERN Stack Developer Intern"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

                {/* Start Date */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Start Date
                  </label>

                  <input
                    type="date"
                    value={experience.startDate}
                    onChange={(e) => {
                      const newExperience = [...formData.experience];

                      newExperience[index].startDate = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        experience: newExperience,
                      }));
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

                {/* End Date */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    End Date
                  </label>

                  <input
                    type="date"
                    value={experience.endDate}
                    onChange={(e) => {
                      const newExperience = [...formData.experience];

                      newExperience[index].endDate = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        experience: newExperience,
                      }));
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Description
                  </label>

                  <textarea
                    value={experience.description}
                    onChange={(e) => {
                      const newExperience = [...formData.experience];

                      newExperience[index].description = e.target.value;

                      setFormData((prev) => ({
                        ...prev,
                        experience: newExperience,
                      }));
                    }}
                    placeholder="Describe your work..."
                    rows="4"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ================= SUBMIT ================= */}
          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;