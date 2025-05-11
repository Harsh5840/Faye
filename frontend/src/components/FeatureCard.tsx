import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-600 rounded-lg p-6 border border-amber-200  shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl text-amber-300 font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
