import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";

import "../styles/contact.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  experience: "",
  date: "",
  guests: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.experience
    ) {
      setError(
        "Please enter your name, phone number and experience type."
      );
      return;
    }

    const enquiryMessage = `
Hello Sai Farms,

I would like to make an enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Experience: ${formData.experience}
Preferred Date: ${formData.date || "Not decided"}
Guests: ${formData.guests || "Not decided"}

Message:
${formData.message || "Please share more details."}
    `.trim();

    const whatsappUrl =
      `https://wa.me/918888867575?text=${encodeURIComponent(
        enquiryMessage
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* HERO */}
      <section className="contact-hero">

        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <p className="contact-eyebrow">
            Plan Your Sai Farms Experience
          </p>

          <h1>
            Let’s Create
            <span>Your Perfect Experience.</span>
          </h1>

          <p>
            Planning a wedding, staycation, corporate gathering,
            school picnic or resort stay? Share a few details
            and connect directly with the Sai Farms team.
          </p>

          <a
            href="#enquiry"
            className="contact-hero-btn"
          >
            Start Your Enquiry
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

      {/* CONTACT + FORM */}
      <section
        id="enquiry"
        className="contact-enquiry-section"
      >
        <div className="container contact-enquiry-grid">

          {/* LEFT */}
          <div className="contact-info">

            <p className="section-eyebrow">
              Contact Sai Farms
            </p>

            <h2>
              Your Experience
              <span>Starts Here.</span>
            </h2>

            <p className="contact-info-intro">
              Tell us what you are planning and our team
              can help you explore the right Sai Farms
              experience for your occasion.
            </p>

            <div className="contact-details">

              <a
                href="tel:+918888867575"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Phone
                    size={20}
                    strokeWidth={1.4}
                  />
                </div>

                <div>
                  <span>Call Us</span>
                  <strong>888 886 7575</strong>
                </div>
              </a>

              <a
                href="https://wa.me/918888867575"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <MessageCircle
                    size={20}
                    strokeWidth={1.4}
                  />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>Chat with Sai Farms</strong>
                </div>
              </a>

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <MapPin
                    size={20}
                    strokeWidth={1.4}
                  />
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    Badlapur, Maharashtra
                  </strong>
                </div>

              </div>

            </div>

            <div className="contact-image">

              <img
                src="/images/activities/riverside-view.jpg"
                alt="Sai Farms Badlapur"
              />

              <div className="contact-image-overlay"></div>

              <div className="contact-image-content">
                <span>One Destination</span>
                <strong>
                  Weddings · Stays · Experiences
                </strong>
              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="contact-form-wrapper">

            <p className="contact-form-eyebrow">
              Booking Enquiry
            </p>

            <h3>
              Tell Us What
              <span>You’re Planning.</span>
            </h3>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="name">
                    Your Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className="contact-field">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="experience">
                  What Are You Planning? *
                </label>

                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">
                    Select experience
                  </option>

                  <option value="Destination Wedding">
                    Destination Wedding
                  </option>

                  <option value="Staycation">
                    Staycation
                  </option>

                  <option value="Corporate Event">
                    Corporate Event
                  </option>

                  <option value="School Picnic">
                    School Picnic
                  </option>

                  <option value="Accommodation">
                    Accommodation / Stay
                  </option>

                  <option value="Day Experience">
                    Day Experience
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="date">
                    Preferred Date
                  </label>

                  <div className="contact-input-icon">

                    <CalendarDays
                      size={17}
                      strokeWidth={1.4}
                    />

                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                <div className="contact-field">

                  <label htmlFor="guests">
                    Number of Guests
                  </label>

                  <div className="contact-input-icon">

                    <Users
                      size={17}
                      strokeWidth={1.4}
                    />

                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      placeholder="e.g. 100"
                      value={formData.guests}
                      onChange={handleChange}
                    />

                  </div>

                </div>

              </div>

              <div className="contact-field">

                <label htmlFor="message">
                  Tell Us More
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your event, stay or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>

              {error && (
                <p className="contact-form-error">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Enquiry on WhatsApp
                <ArrowRight size={17} />
              </button>

              <p className="contact-form-note">
                Clicking Send Enquiry will open WhatsApp
                with your enquiry details ready to send.
              </p>

            </form>

          </div>

        </div>
      </section>

      {/* EXPERIENCE OPTIONS */}
      <section className="contact-experiences">

        <div className="container">

          <div className="contact-experiences-header">

            <p className="section-eyebrow">
              What Can We Help You Plan?
            </p>

            <h2>
              One Resort.
              <span>Many Reasons to Visit.</span>
            </h2>

          </div>

          <div className="contact-experience-grid">

            <div>
              <span>01</span>
              <h3>Destination Weddings</h3>
              <p>
                Wedding venues, accommodation
                and celebration experiences.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Staycations</h3>
              <p>
                Family, couple and group resort
                experiences.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Corporate Events</h3>
              <p>
                Team gatherings, outings and
                group experiences.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>School Picnics</h3>
              <p>
                Water activities, games,
                dining and group day experiences.
              </p>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;
