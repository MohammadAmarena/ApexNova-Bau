import React, { useState, useEffect } from "react";
import { HiMail, HiStar } from "react-icons/hi";
import { FaArrowDown, FaUser } from "react-icons/fa";

const GetInTouch = () => {
  // Load reviews from localStorage on component mount
  const loadReviews = () => {
    const savedReviews = JSON.parse(localStorage.getItem('customerReviews') || '[]');
    return savedReviews.length > 0 ? savedReviews : [
      {
        id: 1,
        name: "Maria Schmidt",
        rating: 5,
        comment: "Hervorragende Arbeit! Die Küchenmontage war perfekt und pünktlich.",
        date: "2024-12-15"
      },
      {
        id: 2,
        name: "Thomas Weber",
        rating: 5,
        comment: "Sehr professionell und sauber gearbeitet. Kann ich nur empfehlen!",
        date: "2024-12-10"
      },
      {
        id: 3,
        name: "Anna Müller",
        rating: 4,
        comment: "Gute Qualität beim Trockenbau. Freundliches Team.",
        date: "2024-12-05"
      }
    ];
  };

  const [reviews, setReviews] = useState(loadReviews);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: ""
  });

  const [showReviewForm, setShowReviewForm] = useState(false);

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem('customerReviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleEmailClick = () => {
    window.location.href = "mailto:mohammad.amaren94@gmail.com";
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleSubmitReview = () => {
    if (newReview.name.trim() && newReview.comment.trim()) {
      const review = {
        id: Date.now(),
        ...newReview,
        date: new Date().toISOString().split('T')[0]
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: "", rating: 5, comment: "" });
      setShowReviewForm(false);
    }
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <HiStar
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8d8664] via-[#306ab2] to-[#1e4a73] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Main Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lassen Sie uns gemeinsam bauen
              </h1>
              <p className="text-white/90 leading-relaxed text-lg">
                Ob Trockenbau, Bodenverlegung, Malerarbeiten oder individuelle Möbel- und Küchenmontagen – wir realisieren Ihre Projekte mit Präzision, Qualität und Leidenschaft.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 px-6 py-3 rounded-full text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
                >
                  <HiMail className="text-xl" />
                  Jetzt E-Mail senden
                </button>

                <button
                  onClick={scrollToBottom}
                  className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#306ab2] transition-all duration-300"
                >
                  <FaArrowDown className="text-lg" />
                  Zum Kontaktformular
                </button>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
              <h2 className="text-2xl font-semibold mb-4">
                Warum mit uns bauen?
              </h2>
              <ul className="space-y-3 text-white/95">
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  Persönliche Beratung & maßgeschneiderte Lösungen
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  Höchste Qualitätsstandards in jedem Detail
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  Termintreue und zuverlässige Umsetzung
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  Über 15 Jahre Erfahrung in der Baubranche
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Reviews Section */}
          <div className="space-y-6">
            {/* Rating Overview */}
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold">Kundenbewertungen</h3>
                <button
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  Bewertung schreiben
                </button>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold">{averageRating}</div>
                <div className="flex">{renderStars(Math.round(averageRating))}</div>
                <div className="text-white/80">({reviews.length} Bewertungen)</div>
              </div>

              {/* Review Form */}
              {showReviewForm && (
                <div className="mb-6 space-y-4 p-4 bg-white/10 rounded-xl">
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  
                  <div className="flex items-center gap-3">
                    <span>Bewertung:</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({...newReview, rating: star})}
                          className="focus:outline-none"
                        >
                          <HiStar className={`text-xl ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-400'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    placeholder="Ihre Bewertung..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    rows="3"
                  />

                  <div className="flex gap-3">
                    <button
                      onClick={handleSubmitReview}
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                    >
                      Bewertung abgeben
                    </button>
                    <button
                      onClick={() => setShowReviewForm(false)}
                      className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    >
                      Abbrechen
                    </button>
                  </div>
                </div>
              )}

              {/* Reviews List */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {reviews.map((review) => (
                  <div key={review.id} className="p-4 bg-white/10 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <FaUser className="text-white/80" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{review.name}</h4>
                          <span className="text-white/60 text-sm">{review.date}</span>
                        </div>
                        <div className="flex mb-2">{renderStars(review.rating)}</div>
                        <p className="text-white/90 text-sm leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;